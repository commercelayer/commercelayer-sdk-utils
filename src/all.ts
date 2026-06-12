import type { ApiError, DeletableResourceType, ListableResourceType, ListResponse, QueryParamsList, Resource, ResourceUpdate, UpdatableResourceType } from "@commercelayer/sdk"
import { sleep } from "./common"
import { config } from "./config"
import CommerceLayerUtils from "./init"
import { computeRateLimits, headerRateLimits, type RateLimitInfo } from "./rate_limit"


type AllParams<R extends Resource = Resource> = Omit<QueryParamsList<R>, 'pageSize' | 'pageNumber' | 'sort'>


export const retrieveAll = async <R extends Resource>(resourceType: ListableResourceType, params?: AllParams<R> & { limit?: number }): Promise<ListResponse<R>> => {

	const cl = CommerceLayerUtils().sdk
	// const client = cl[resourceType] as unknown as ApiResource<ListableResource>
	const client = CommerceLayerUtils().api(resourceType)
	const rrr = cl.addRawResponseReader({ headers: true })

	let result: ListResponse<R> | null = null
	let lastId = null
	let rateLimit: RateLimitInfo | null = null
	
	const recordLimit = ((params?.limit || 0) > 0)? params?.limit : undefined
	if (recordLimit && params) delete params.limit

	const allParams: QueryParamsList<R> = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id'] as QueryParamsList<R>['sort']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)

		const page = await client.list(allParams as QueryParamsList) as ListResponse<R>
		if (result === null) result = page
		else result.push(...page)

		lastId = page.last()?.id

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType as string, result.pageCount)
			if (rateLimit) cl.removeRawResponseReader()
		} catch (_error: any) {}

	} while ( result.length < Math.min((recordLimit || result.recordCount), result.recordCount) )

	if (recordLimit) {
		result.splice(recordLimit, result.length - recordLimit)
	}

	const meta = result.meta as any
	// if (recordLimit) meta.recordLimit = recordLimit
	delete meta.currentPage

	return result

}



type UpdateResult = {
	total: number,
	processed: number,
	errors: number,
	resources: Record<string, {
		success: boolean,
		error?: ApiError,
		errorMessage?: string
	}>
}

export const updateAll = async <U extends Omit<ResourceUpdate, 'id'>, R extends Resource = Resource>(resourceType: UpdatableResourceType, resource: U, params?: AllParams<R>): Promise<UpdateResult> => {

	const cl = CommerceLayerUtils().sdk

	// const client = cl[resourceType] as unknown as ApiResource<UpdatableResource>
	const client = CommerceLayerUtils().api(resourceType)
	const rrr = cl.addRawResponseReader({ headers: true })

	const result: UpdateResult = { total: 0, processed: 0, errors: 0, resources: {} }
	let lastId = null
	let rateLimit: RateLimitInfo | null = null

	const allParams: QueryParamsList<R> = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id'] as QueryParamsList<R>['sort']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)
		const page = await client.list(allParams as QueryParamsList)
		if (!lastId) result.total = page.recordCount

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType, (result.total + page.pageCount))
			if (rateLimit) cl.removeRawResponseReader()
		} catch (_error: any) {}


		for (const item of page) {

			result.resources[item.id] = { success: false }
			const resId = result.resources[item.id]

			try {

				const updRes = {
					...resource,
					id: item.id,
					type: resourceType
				}

				if (rateLimit) await sleep(rateLimit.delay)
				await client.update(updRes)

				result.processed++
				resId.success = true

			} catch (error: any) {
				result.errors++
				if (cl.isApiError(error)) resId.error = error
				resId.errorMessage = error.message
			}

		}
		

		lastId = page.last()?.id

	} while ( (result.processed + result.errors) < result.total )


	return result

}


type DeleteResult = UpdateResult


export const deleteAll = async <R extends Resource>(resourceType: DeletableResourceType, params?: AllParams<R>): Promise<DeleteResult> => {

	const cl = CommerceLayerUtils().sdk
	// const client = cl[resourceType] as unknown as ApiResource<DeletableResource>
	const client = CommerceLayerUtils().api(resourceType)
	const rrr = cl.addRawResponseReader({ headers: true })

	const result: UpdateResult = { total: 0, processed: 0, errors: 0, resources: {} }
	let lastId = null
	let rateLimit: RateLimitInfo | null = null

	const allParams: QueryParamsList<R> = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id'] as QueryParamsList<R>['sort']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)
		const page = await client.list(allParams as QueryParamsList)
		if (!lastId) result.total = page.recordCount

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType, (result.total + page.pageCount))
			if (rateLimit) cl.removeRawResponseReader()
		} catch (_error: any) {}


		for (const item of page) {

			result.resources[item.id] = { success: false }
			const resId = result.resources[item.id]

			try {

				if (rateLimit) await sleep(rateLimit.delay)
				await (client as any).delete(item.id)

				result.processed++
				resId.success = true

			} catch (error: any) {
				result.errors++
				if (cl.isApiError(error)) resId.error = error
				resId.errorMessage = error.message
			}

		}
		

		lastId = page.last()?.id

	} while ( (result.processed + result.errors) < result.total )


	return result

}



export const all = {
	retrieveAll,
	updateAll
}
