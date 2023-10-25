import type { ApiError, CommerceLayerClient, QueryParams, QueryParamsList, SdkError } from "@commercelayer/sdk"
import type { CreatableResourceType, DeletableResourceType, ListableResourceType, ResourceTypeLock, RetrievableResourceType, UpdatableResourceType } from "@commercelayer/sdk/lib/cjs/api"
import type { ListResponse, Resource, ResourceCreate, ResourceId, ResourceUpdate, ResourcesConfig } from "@commercelayer/sdk/lib/cjs/resource"
import CommerceLayerUtils from './init'
import { computeRateLimits, headerRateLimits, type RateLimitInfo } from "./rate_limit"
import { invalidToken, sleep } from "./common"

/*
createAll: 		KO, can be done with imports
deleteAll: 		KO, can be done with cleanups
updateAll:		OK, update of known resources can be done with imports, but would be useful a feature to update resources using a filter
retrieveAll:	OK, list all resources with pagination, zero offset and token refresh (listAll)
*/

export type TaskOperation = 'retrieve' | 'list' | 'create' | 'update' | 'delete'

export type TaskResourceParam = ResourceId | ResourceCreate | ResourceUpdate
export type TaskResourceResult = Resource | ListResponse<Resource>
export type TaskResult = TaskResourceResult | undefined


export class InvalidTokenError extends Error {
	readonly cause: ApiError
	constructor(error: ApiError) {
		super(error.first().detail)
		this.cause = error
	}
}


export type SuccessCallback = (output: TaskResult, task: Task) => Promise<void> | void
export type FailureCallback = (error: SdkError, task: Task) => Promise<boolean> | boolean
export type TokenCallback = (error: InvalidTokenError, task: Task) => Promise<string> | string

export type PrepareResourceResult = TaskResourceParam | undefined
export type PrepareResourceCallback = (resource: TaskResourceParam, last: TaskResourceResult) => Promise<PrepareResourceResult> | PrepareResourceResult

export type TemplateTask = Partial<Task>

type CreateTask = CRUDTask & {
	resourceType: CreatableResourceType,
	operation: 'create',
	resource: ResourceCreate
}

type UpdateTask = CRUDTask & {
	resourceType: UpdatableResourceType,
	operation: 'update',
	resource: ResourceUpdate
}

type DeleteTask = CRUDTask & {
	resourceType: DeletableResourceType,
	operation: 'delete',
	resource: ResourceId
}

type ListTask = {
	resourceType: ListableResourceType,
	operation: 'list',
	params?: QueryParamsList
}

type RetrieveTask = CRUDTask & {
	resourceType: RetrievableResourceType,
	operation: 'retrieve',
	resource: ResourceId
}

type CRUDTask = {
	resourceType: ResourceTypeLock
	operation: 'create' | 'retrieve' | 'update' | 'delete'
	resource: Record<string, any>
	prepareResource?: PrepareResourceCallback
}


export type Task = {
	label?: string
	resourceType: ResourceTypeLock
	operation: TaskOperation
	params?: QueryParams
	options?: ResourcesConfig
	executed?: boolean
	onSuccess?: {
		callback?: SuccessCallback
		result?: TaskResult,
	},
	onFailure?: {
		error?: SdkError
		haltOnError?: boolean
		errorHandler?: FailureCallback
	}
} & (CreateTask | UpdateTask | DeleteTask | ListTask | RetrieveTask)


export type BatchResult = {
	startedAt: Date,
	finishedAt?: Date
}


export type BatchOptions = {
	haltOnError?: boolean,
	refreshToken?: TokenCallback
}


export type Batch = {
	tasks: Task[]
	rateLimits?: Partial<Record<ResourceTypeLock, Partial<Record<TaskOperation, RateLimitInfo>>>>
	running?: boolean
	runningTask?: string,
	options?: BatchOptions
}



const isCRUDTask = (task: any): task is CRUDTask => {
	return task.resource && ['create', 'retrieve', 'update', 'delete'].includes(task.operation)
}


const taskRateLimit = (batch: Batch, task: Task, info?: RateLimitInfo): RateLimitInfo | undefined => {

	if (info) {
		if (!batch.rateLimits) batch.rateLimits = {}
		Object.assign(batch.rateLimits || {}, { [task.resourceType]: { [task.operation]: info } })
	}

	const resLimits = batch.rateLimits?.[task.resourceType]
	return resLimits ? resLimits[task.operation] : undefined

}



const executeTask = async (cl: CommerceLayerClient, task: Task, options: BatchOptions = {}): Promise<TaskResult> => {

	const client = cl[task.resourceType]
	let out: TaskResult

	try {

		task.executed = false

		const op = client[task.operation as keyof typeof client] as any
		if (!op) throw new Error(`Unsupported operation [resource: ${task.resourceType}, operation: ${task.operation}]`)

		switch (task.operation) {
			case 'list': {
				out = await (client[task.operation as keyof typeof client] as any)(task.params, task.options) as ListResponse<Resource>
				break
			}
			case 'delete': {
				await (client[task.operation as keyof typeof client] as any)(task.resource, task.options)
				break
			}
			case 'create':
			case 'retrieve':
			case 'update': {
				out = await (client[task.operation as keyof typeof client] as any)(task.resource, task.params, task.options) as Resource
				break
			}
		}

		if (!task.onSuccess) task.onSuccess = {}
		const success = task.onSuccess
		success.result = out
		if (success.callback) try { await success.callback(success.result, task) } catch (err) { }

		return out

	} catch (error: unknown) {

		if (invalidToken(error)) throw new InvalidTokenError(error)

		if (!task.onFailure) task.onFailure = {}
		const failure = task.onFailure
		failure.error = error as SdkError
		let halt = options.haltOnError || failure.haltOnError
		if (failure.errorHandler) try { halt = halt || await failure.errorHandler(failure.error, task) } catch (err) { }
		if (halt) throw error

	} finally {
		task.executed = true
	}

}


const resolvePlaceholders: PrepareResourceCallback = (resource: TaskResourceParam, last: TaskResourceResult): undefined => {
	/*
	if (!last) return
	let lastResult: Resource
	if (Array.isArray(last)) {
		if (last.length === 0) return
		lastResult = last[0]
	} else lastResult = last

	Object.entries(resource.).forEach(([k, v]) => {
		const val = String(v)
		const vars = val.match(/{{[\w]{2,}\([\d]\)?}}/g)
		if (vars?.length) for (const v of vars) {
			const newVal = lastResult[v as keyof typeof lastResult]

		}
	})
	*/
}


export const executeBatch = async (batch: Batch): Promise<BatchResult> => {

	const cl = CommerceLayerUtils().sdk
	const rrr = cl.addRawResponseReader({ headers: true })
	batch.running = false

	const result: BatchResult = {
		startedAt: new Date()
	}

	let runningIndex = -1
	let lastResult: TaskResult
	for (const task of batch.tasks) {

		runningIndex++
		batch.running = true
		batch.runningTask = task.label || String(runningIndex)

		let rateLimit = taskRateLimit(batch, task)
		if (rateLimit) await sleep(rateLimit.delay)

		try {
			if (lastResult && isCRUDTask(task)) {
				let modRes: PrepareResourceResult
				try {
					if (task.resource && task.prepareResource) modRes = await task.prepareResource(task.resource, lastResult)
					else modRes = await resolvePlaceholders(task.resource, lastResult)
				} catch (e: any) { modRes = undefined }
				if (modRes) task.resource = modRes
			}
			lastResult = undefined
			lastResult = await executeTask(cl, task, batch.options)
		} catch (err: unknown) {
			// Refresh access token if needed and re-execute the task
			if ((err instanceof InvalidTokenError) && batch.options?.refreshToken) {
				const newAccessToken = await batch.options.refreshToken(err, task)
				cl.config({ accessToken: newAccessToken })
				await executeTask(cl, task, batch.options)
			} else throw err
		}

		if (!rateLimit) try {
			// Compute and store rate limit for this kind of resource/operation
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, task, batch.tasks)
			taskRateLimit(batch, task, rateLimit)
		} catch (error: any) { }

	}

	if (cl && rrr) cl.removeRawResponseReader(rrr)

	result.finishedAt = new Date()

	return result

}


export const batch = {
	execute: executeBatch
}
