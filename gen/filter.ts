import { appendFileSync, existsSync, renameSync, unlinkSync, writeFileSync } from 'fs'
import Inflector from './inflector'
import { resolve } from 'path'
import { ResourceTypeLock } from '@commercelayer/sdk'


const DEBUG = process.env.DEBUG_SDK_UTILS


export const generate = async (resources: any): Promise<any> => {

  console.log('Generating filter helper...')

  const resourcesFile = resolve('src/helpers/include/resources.ts')
  const resourcesFileBkp = resourcesFile + '.bkp'
  const encoding = 'utf-8'


  try {

    

    console.log('Filter helper generated.')

  } catch (error: any) {
    console.log('Error generating filter helper: ' + error.message)
    if (DEBUG) console.log(error)
  }
  finally {
    // Delete backup file if exists
    if (existsSync(resourcesFileBkp)) unlinkSync(resourcesFileBkp)
  }

}


const acceptMultipleValues = (op: string): boolean => {
  return (op.endsWith('_all') || op.endsWith('_any') || op.endsWith('_in') || ['not_in_or_null', 'in'].includes(op))
}


const operators = [
	'eq',
	'not_eq',
	'matches',
	'does_not_match',
	'matches_any',
	'matches_all',
	'does_not_match_any',
	'does_not_match_all',
	'lt',
	'lteq',
	'gt',
	'gteq',
	'present',
	'blank',
	'null',
	'not_null',
	'in',
	'not_in',
	'lt_any',
	'lteq_any',
	'gt_any',
	'gteq_any',
	'lt_all',
	'lteq_all',
	'gt_all',
	'gteq_all',
	'not_eq_all',
	'start',
	'not_start',
	'start_any',
	'not_start_any',
	'not_start_all',
	'end',
	'not_end',
	'end_any',
	'end_all',
	'not_end_any',
	'not_end_all',
	'cont',
	'not_cont',
	'cont_any',
	'cont_all',
	'not_cont_all',
	'jcont',
	'true',
	'false',
	'not_eq_or_null',
	'not_in_or_null'
] as const
