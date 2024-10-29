import type { NonEmptyArray } from '../../types'
import { type ResourceInclude } from './base'
import { IncludeHelper } from './resources'


export const buildInclude = (...includes: NonEmptyArray<ResourceInclude>): string[] => {
  return includes.map(inc => inc.build())
}


export const Include = new IncludeHelper()


export const include = {
  helper: Include,
  build: buildInclude
}
