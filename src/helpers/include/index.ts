import { type ResourceInclude } from './base'
import { IncludeHelper } from './resources'


export const Include = new IncludeHelper()


export const buildInclude = (...includes: ResourceInclude[]): string[] => {
  return includes.map(inc => inc.build())
}


export const include = {
  helper: Include,
  build: buildInclude
}
