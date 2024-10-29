import type { NonEmptyArray } from '../../types'
import { type ResourceInclude } from './base'
import { IncludeHelper } from './resources'
export { IncludeHelper }


export const buildInclude = (...includes: NonEmptyArray<ResourceInclude>): string[] => {
  return includes.map(inc => inc.build())
}


export const include = {
  helper: IncludeHelper,
  build: buildInclude
}
