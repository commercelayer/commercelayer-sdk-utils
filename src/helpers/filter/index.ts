import type { QueryFilter } from '@commercelayer/sdk'
import type { NonEmptyArray } from '../../types'
import { FilterHelper } from './resources'
export type * from './resources'


export const buildFilter = (...filters: NonEmptyArray<QueryFilter>): QueryFilter => {
  const filter: QueryFilter = {}
  filters.forEach(f => Object.assign(filter, f))
  return filter
}


export const Filter = new FilterHelper()


export const filter = {
  helper: Filter,
  build: buildFilter
}
