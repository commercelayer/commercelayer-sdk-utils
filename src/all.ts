import type { ApiError, CommerceLayerClient, QueryParamsList, ListResponse, Resource, ResourceUpdate, ListableResourceType, UpdatableResourceType, ApiResource, DeletableResourceType } from "@commercelayer/sdk"
import CommerceLayerUtils from "./init"
import { config } from "./config"
import { type RateLimitInfo, computeRateLimits, headerRateLimits } from "./rate_limit"
import { sleep } from "./common"


type AllParams = Omit<QueryParamsList, 'pageSize' | 'pageNumber' | 'sort'>


export const retrieveAll = async <R extends Resource>(resourceType: ListableResourceType, params?: AllParams & { limit?: number }): Promise<ListResponse<R>> => {

	const cl = CommerceLayerUtils().sdk
	const client = cl[resourceType as keyof CommerceLayerClient]
	const rrr = cl.addRawResponseReader({ headers: true })

	let result: ListResponse<R> | null = null
	let lastId = null
	let rateLimit: RateLimitInfo | null = null
	
	const recordLimit = ((params?.limit || 0) > 0)? params?.limit : undefined
	if (recordLimit && params) delete params.limit

	const allParams: QueryParamsList = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)

		const page = await (client as ApiResource<Resource>).list(allParams) as ListResponse<R>
		if (result === null) result = page
		else result.push(...page)

		lastId = page.last()?.id

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType as string, result.pageCount)
			if (rateLimit) cl.removeRawResponseReader()
		} catch (error: any) {}

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


export const updateAll = async <U extends Omit<ResourceUpdate, 'id'>>(resourceType: UpdatableResourceType, resource: U, params?: AllParams): Promise<UpdateResult> => {

	const cl = CommerceLayerUtils().sdk
	const client = cl[resourceType as keyof CommerceLayerClient] as ApiResource<Resource>
	const rrr = cl.addRawResponseReader({ headers: true })

	const result: UpdateResult = { total: 0, processed: 0, errors: 0, resources: {} }
	let lastId = null
	let rateLimit: RateLimitInfo | null = null

	const allParams: QueryParamsList = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)
		const page = await client.list(allParams)
		if (!lastId) result.total = page.recordCount

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType, (result.total + page.pageCount))
			if (rateLimit) cl.removeRawResponseReader()
		} catch (error: any) {}


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


export const deleteAll = async (resourceType: DeletableResourceType, params?: AllParams): Promise<DeleteResult> => {

	const cl = CommerceLayerUtils().sdk
	const client = cl[resourceType]
	const rrr = cl.addRawResponseReader({ headers: true })

	const result: UpdateResult = { total: 0, processed: 0, errors: 0, resources: {} }
	let lastId = null
	let rateLimit: RateLimitInfo | null = null

	const allParams: QueryParamsList = params || {}
	allParams.pageNumber = 1
	allParams.pageSize = config.api.page_max_size
	allParams.sort = ['id']
	if (!allParams.filters) allParams.filters = {}

	do {

		if (lastId) allParams.filters.id_gt = lastId

		if (rateLimit) await sleep(rateLimit.delay)
		const page = await (client as ApiResource<Resource>).list(allParams)
		if (!lastId) result.total = page.recordCount

		if (!rateLimit) try {
			const rateLimits = headerRateLimits(rrr.headers)
			rateLimit = computeRateLimits(rateLimits, resourceType, (result.total + page.pageCount))
			if (rateLimit) cl.removeRawResponseReader()
		} catch (error: any) {}


		for (const item of page) {

			result.resources[item.id] = { success: false }
			const resId = result.resources[item.id]

			try {

				if (rateLimit) await sleep(rateLimit.delay)
				await client.delete(item.id)

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
