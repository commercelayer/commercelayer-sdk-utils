import CommerceLayerUtils from "./init"
import type { ListableResourceType } from "@commercelayer/sdk/lib/cjs/api"
import { config } from "./config"
import type { QueryFilter } from "@commercelayer/sdk/lib/cjs/query"
import { type Task, type TemplateTask } from "./batch"
import type { CleanupCreate, ExportCreate, ImportCreate } from "@commercelayer/sdk"



export type JobOutputType = 'exports' | 'cleanups'
export type JobInputType = 'imports'
export type JobType = JobOutputType | JobInputType

export type ResourceJob = ResourceJobOutput | ResourceJobInput
export type ResourceJobOutput = ExportCreate | CleanupCreate
export type ResourceJobInput = ImportCreate



export const splitInputJob = <JI extends ResourceJobInput>(job: JI, jobType: JobInputType, jobSize?: number): JI[] => {

	const jobs: JI[] = []
	if (!job?.inputs || (job.inputs.length === 0)) return jobs

	const jobMaxSize = jobSize ? Math.min(Math.max(1, jobSize), config[jobType].max_size) : config[jobType].max_size

	const allInputs = job.inputs
	const totJobs = Math.ceil(allInputs.length / jobMaxSize)

	let jobNum = 0
	while (allInputs.length > 0) jobs.push({
		...job,
		inputs: allInputs.splice(0, jobMaxSize),
		metadata: { ...job.metadata, progress_number: `${++jobNum}/${totJobs}` }
	})

	return jobs

}


export const splitOutputJob = async <JO extends ResourceJobOutput>(job: JO, jobType: JobOutputType, jobSize?: number): Promise<JO[]> => {

	const cl = CommerceLayerUtils().sdk
	const resSdk = cl[job.resource_type as ListableResourceType]
	const jobMaxSize = jobSize ? Math.min(Math.max(1, jobSize), config[jobType].max_size) : config[jobType].max_size

	const totRecords = await resSdk.count({ filters: job.filters as QueryFilter, pageSize: 1, pageNumber: 1 })

	const totJobs = Math.ceil(totRecords / jobMaxSize)


	const jobs: JO[] = []
	let startId = null
	let stopId = null
	let jobPage = 0


	for (let curJob = 0; curJob < totJobs; curJob++) {

		const jobCreate: JO = {
			...job,
			filters: { ...job.filters },
			metadata: { ...job.metadata }
		}
		if (!jobCreate.filters) jobCreate.filters = {}

		const curJobRecords = Math.min(jobMaxSize, totRecords - (jobMaxSize * curJob))
		const curJobPages = Math.ceil(curJobRecords / config.api.page_max_size)
		jobPage += curJobPages

		const curJobLastPage = await resSdk.list({ filters: job.filters as QueryFilter, pageSize: config.api.page_max_size, pageNumber: jobPage, sort: { id: 'asc' } })

		stopId = curJobLastPage.last()?.id

		if (startId) jobCreate.filters.id_gt = startId
		if ((curJob + 1 < totJobs)) jobCreate.filters.id_lteq = stopId

		if (!jobCreate.metadata) jobCreate.metadata = {}
		jobCreate.metadata.progress_number = `${curJob + 1}/${totJobs}`

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


/*
const countRunning = (jobs: ResourceJobResult[]): number => {
	return jobs.filter(j => (!j.status || ['pending', 'in_progress'].includes(j.status))).length
}

const countFinished = (jobs: ResourceJobResult[]): number => {
	return jobs.filter(j => ['completed', 'interrupted'].includes(j.status)).length
}
*/
/*
export const executeOutputJobs = async <J extends ResourceJobOutputResult>(jobs: ResourceJobOutput[], jobType: JobOutputType, queueLength?: number): Promise<J[]> => {

	const cl = CommerceLayerUtils().sdk
	const rrr = cl.addRawResponseReader({ headers: true })
	const resSdk = cl[jobType]

	const results: J[] = []

	const queueMax = queueLength || jobs.length
	let delay = -1

	do {

		while (countRunning(results) < queueMax) {
			const job = await resSdk.create(jobs[results.length])
			results.push(job as J)
			if (delay < 0) {
				const rateLimits = headerRateLimits(rrr.headers)
				const rateLimit = computeRateLimits(rateLimits, jobType)
				delay = rateLimit.delay
				cl.removeRawResponseReader(rrr)
			} else await sleep(delay)
		}

		for (const job of results) {
			await sleep(delay)
			const j = await resSdk.retrieve(job)
			
		}

	} while (countFinished(results) < jobs.length)

	return results

}
*/
