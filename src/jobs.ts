import CommerceLayerUtils from "./init"
import type { ListableResourceType } from "@commercelayer/sdk/lib/cjs/api"
import { config } from "./config"
import type { QueryFilter } from "@commercelayer/sdk/lib/cjs/query"
import { type Task, type TemplateTask } from "./batch"
import type { Cleanup, CleanupCreate, Export, ExportCreate, Import, ImportCreate } from "@commercelayer/sdk"
import { groupUID, sleep } from "./common"
import { computeRateLimits, headerRateLimits } from "./rate_limit"


export type JobOptions = {
	size?: number			// The output size of the jobs
	delay?: number			// Delay to use between requests if made in conjunction with other external calls
	queueLength?: number	// Max length of remote queue of jobs
}

export type JobOutputType = 'exports' | 'cleanups'
export type JobInputType = 'imports'
export type JobType = JobOutputType | JobInputType

export type ResourceJob = ResourceJobOutput | ResourceJobInput
export type ResourceJobOutput = ExportCreate | CleanupCreate
export type ResourceJobInput = ImportCreate

export type ResourceJobResult = ResourceJobOutputResult | ResourceJobInputResult
export type ResourceJobOutputResult = Export | Cleanup
export type ResourceJobInputResult = Import



export const splitInputJob = <JI extends ResourceJobInput>(job: JI, jobType: JobInputType, options?: JobOptions): JI[] => {

	const jobs: JI[] = []
	if (!job?.inputs || (job.inputs.length === 0)) return jobs
	const groupId = groupUID()

	const jobSize = options?.size
	const jobMaxSize = jobSize ? Math.min(Math.max(1, jobSize), config[jobType].max_size) : config[jobType].max_size

	const allInputs = job.inputs
	const totJobs = Math.ceil(allInputs.length / jobMaxSize)

	let jobNum = 0
	while (allInputs.length > 0) {

		jobNum++

		const jobCreate: JI = {
			...job,
			reference: `${groupId}-${jobNum}`,
			inputs: allInputs.splice(0, jobMaxSize),
			metadata: { ...job.metadata }
		}
		if (!jobCreate.metadata) jobCreate.metadata = {}
		jobCreate.metadata.progress_number = `${jobNum}/${totJobs}`
		jobCreate.metadata.group_id = groupId

		jobs.push(jobCreate)

	}

	return jobs

}


export const splitOutputJob = async <JO extends ResourceJobOutput>(job: JO, jobType: JobOutputType, options?:JobOptions): Promise<JO[]> => {

	const cl = CommerceLayerUtils().sdk
	const rrr = cl.addRawResponseReader({ headers: true })
	const resSdk = cl[job.resource_type as ListableResourceType]
	const jobSize = options?.size
	const jobMaxSize = jobSize ? Math.min(Math.max(1, jobSize), config[jobType].max_size) : config[jobType].max_size
	let delay = options?.delay

	const totRecords = await resSdk.count({ filters: job.filters as QueryFilter, pageSize: 1, pageNumber: 1 })

	// Rate limit
	if (!delay) {
		const rateLimits = headerRateLimits(rrr.headers)
		const rateLimit = computeRateLimits(rateLimits, jobType)
		delay = rateLimit.delay
	}
	
	cl.removeRawResponseReader(rrr)

	const totJobs = Math.ceil(totRecords / jobMaxSize)


	const jobs: JO[] = []
	const groupId = groupUID()

	let startId = null
	let stopId = null
	let jobPage = 0


	for (let curJob = 0; curJob < totJobs; curJob++) {

		const jobNum = curJob +1 

		const jobCreate: JO = {
			...job,
			reference: `${groupId}-${jobNum}`,
			filters: { ...job.filters },
			metadata: { ...job.metadata }
		}
		if (!jobCreate.filters) jobCreate.filters = {}
		if (!jobCreate.metadata) jobCreate.metadata = {}
		jobCreate.metadata.progress_number = `${jobNum}/${totJobs}`
		jobCreate.metadata.group_id = groupId

		const pageSize = 1
		const curJobRecords = Math.min(jobMaxSize, totRecords - (jobMaxSize * curJob))
		const curJobPages = Math.ceil(curJobRecords / pageSize)
		jobPage += curJobPages

		await sleep(delay)
		const curJobLastPage = await resSdk.list({ filters: job.filters as QueryFilter, pageSize, pageNumber: jobPage, sort: { id: 'asc' } })

		stopId = curJobLastPage.last()?.id
		
		if (startId) jobCreate.filters.id_gt = startId
		if ((jobNum < totJobs)) jobCreate.filters.id_lteq = stopId

		jobs.push(jobCreate)

		startId = stopId

	}

	return jobs

}


export const jobsToBatchTasks = (jobs: ResourceJob[], jobType: JobType, baseTask?: TemplateTask): Array<Task & { operation: 'create' }> => {

	return jobs.map(job => {

		const task: Task = {
			operation: 'create',
			resourceType: jobType,
			resource: { ...job }
		}

		if (baseTask) {
			task.onFailure = baseTask.onFailure
			task.onSuccess = baseTask.onSuccess
			task.params = baseTask.params
			task.options = baseTask.options
		}

		return task

	})

}


const isRunning = (job: ResourceJobResult): boolean => {
	return (!job.status || ['pending', 'in_progress'].includes(job.status))
}

const countRunning = (jobs: ResourceJobResult[]): number => {
	return jobs.filter(j => isRunning(j)).length
}

const isCompleted = (job: ResourceJobResult): boolean => {
	return ['completed', 'interrupted'].includes(job.status)
}

const countCompleted = (jobs: ResourceJobResult[]): number => {
	return jobs.filter(j => isCompleted(j)).length
}


export const executeJobs = async <J extends ResourceJobResult>(jobs: ResourceJob[], jobType: JobType, options?: JobOptions): Promise<J[]> => {

	const checkInterval = 1000	// ms

	const cl = CommerceLayerUtils().sdk
	const rrr = cl.addRawResponseReader({ headers: true })
	const resSdk = cl[jobType]
	const results: J[] = []

	const queueMax = options?.queueLength || config[jobType].queue_size || jobs.length
	let delay = -1

	do {

		// Create job if there are slots available
		while ((countRunning(results) < queueMax) && (results.length < jobs.length)) {
			const job = await resSdk.create(jobs[results.length] as any)
			results.push(job as J)
			if (delay < 0) {
				const rateLimits = headerRateLimits(rrr.headers)
				const rateLimit = computeRateLimits(rateLimits, jobType)
				delay = rateLimit.delay
				cl.removeRawResponseReader(rrr)
			} else await sleep(delay)
		}

		// Check job status
		for (const job of results) {
			if (isCompleted(job)) continue
			await sleep(delay)
			const j = await resSdk.retrieve(job)
			Object.assign(job, j)
		}

		await sleep(checkInterval)

	} while (countCompleted(results) < jobs.length)

	return results

}
