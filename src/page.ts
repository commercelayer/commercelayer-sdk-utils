import type { ApiResource, CommerceLayerClient, ListableResourceType, QueryParamsList, ListResponse, Resource, QueryPageSize } from '@commercelayer/sdk'
import CommerceLayerUtils from './init'
import { config } from './config'
import { currentTokenData } from './util'


const TEST_MODE = (typeof process === 'undefined')? undefined : process.env.CL_SDK_TEST // if defined specs are running
const DEBUG = (typeof process === 'undefined')? undefined : process.env.CL_SDK_DEBUG  // if defined show debug messages


const MAX_PAGE_SIZE_LIVE = TEST_MODE ? 950 : 1000  // test mode requires more requests
const MAX_PAGE_SIZE_TEST = TEST_MODE ? 475 : 500   // test mode requires more requests


export type PaginationParams<R extends Resource> = Omit<QueryParamsList<R>, 'pageSize'> & { pageSize?: number }


export const retrievePage = async <R extends Resource>(resourceType: ListableResourceType, params?: PaginationParams<R>): Promise<ListResponse<R>> => {

  let requests = 0

  const cl = CommerceLayerUtils().sdk
  // const client = cl[resourceType] as unknown as ApiResource<R>
  const client = CommerceLayerUtils().api(resourceType) as ApiResource<R>

  let result: ListResponse<R> | null = null

  const queryParams: QueryParamsList<R> = {
    fields: params?.fields,
    filters: params?.filters,
    sort: params?.sort,
    include: params?.include
  }

  // Page size check
  const tokenData = currentTokenData(cl.currentAccessToken)
  const maxPageSize = tokenData.test ? MAX_PAGE_SIZE_TEST : MAX_PAGE_SIZE_LIVE
  if (DEBUG) console.log('maxPageSize: ' + maxPageSize)

  const pageSize = Math.max(1, params?.pageSize || 1)
  if (DEBUG) console.log('pageSize: ' + pageSize)
  if (pageSize > maxPageSize) throw new Error(`Page size exceeds the maximum allowed of ${maxPageSize}: [${pageSize}]`)

  // Page number check
  if (DEBUG) console.log('requests: ' + ++requests)
  const recordCount = await client.count(queryParams)
  if (DEBUG) console.log('recordCount: ' + recordCount)
  const pageNumber = Math.max(1, params?.pageNumber || 1)
  if (DEBUG) console.log('pageNumber: ' + pageNumber)
  const maxPageNumber = Math.ceil(recordCount / pageSize)
  if (pageNumber > maxPageNumber) throw new Error(`Page number greater than the last page number ${maxPageNumber}: [${pageNumber}]`)


  if (pageSize <= config.api.page_max_size) { // Page size lower than maximum api page size
    queryParams.pageSize = pageSize as QueryPageSize
    queryParams.pageNumber = pageNumber
    if (DEBUG) console.log('requests: ' + ++requests)
    result = await (client as unknown as ApiResource<R>).list(queryParams)
  } else {

    const pageSizeApi = config.api.page_max_size
    queryParams.pageSize = pageSizeApi

    const recordStart = pageSize * (pageNumber - 1) + 1
    const recordEnd = Math.min((recordStart + pageSize - 1), recordCount)
    if (DEBUG) console.log('recordStart: ' + recordStart)
    if (DEBUG) console.log('recordEnd: ' + recordEnd)

    const pageStartApi = Math.ceil(recordStart / pageSizeApi)
    const pageEndApi = Math.ceil(recordEnd / pageSizeApi)
    if (DEBUG) console.log('pageStartApi: ' + pageStartApi)
    if (DEBUG) console.log('pageEndApi: ' + pageEndApi)


    for (let pageCurrApi = pageStartApi; pageCurrApi <= pageEndApi; pageCurrApi++) {

      queryParams.pageNumber = pageCurrApi

      if (DEBUG) console.log('FOR requests: ' + ++requests)
      const page = await client.list(queryParams)
      if (result === null) result = page
      else result.push(...page)

    }


    if (!result) throw new Error(`Error retrieving ${resourceType} page`)
    if (DEBUG) console.log('result.length: ' + result.length)
    if (result.length === 0) return result


    if (DEBUG) console.log('requests: ' + ++requests)
    if (DEBUG) console.log('requests: ' + ++requests)
    const firstResource = (await client.list({ ...queryParams, ...{ pageNumber: recordStart, pageSize: 1 } })).first()
    const lastResource = (await client.list({ ...queryParams, ...{ pageNumber: recordEnd, pageSize: 1 } })).first()
    if (DEBUG) console.log('firstResource: ' + firstResource?.id)
    if (DEBUG) console.log('lastResource: ' + lastResource?.id)

    const firstResourceIdx = result.findIndex(r => (r.id === firstResource?.id))
    const lastResourceIdx = result.findIndex(r => (r.id === lastResource?.id))
    if (DEBUG) console.log('firstResourceIdx: ' + firstResourceIdx)
    if (DEBUG) console.log('lastResourceIdx: ' + lastResourceIdx)

    result.splice(lastResourceIdx + 1)
    if (DEBUG) console.log('End trim - result.length: ' + result.length)
    result.splice(0, firstResourceIdx)
    if (DEBUG) console.log('Start trim - result.length: ' + result.length)


    // Fix result.meta info
    const meta = result.meta as any
    meta.recordsPerPage = pageSize
    meta.currentPage = pageNumber
    meta.pageCount = maxPageNumber
    if (DEBUG) console.log(meta)

    if (DEBUG) console.log('requests: ' + ++requests)

  }


  return result

}
