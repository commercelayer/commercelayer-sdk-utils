import type { QueryFilter } from '@commercelayer/sdk'
import type { NonEmptyArray } from '../../types'
import { FilterHelper } from './resources'
export { FilterHelper }
export type * from './resources'


export const buildFilter = (...filters: NonEmptyArray<QueryFilter>): QueryFilter => {
  const filter: QueryFilter = {}
  filters.forEach(f => Object.assign(filter, f))
  return filter
}


export const filter = {
  helper: FilterHelper,
  build: buildFilter
}
