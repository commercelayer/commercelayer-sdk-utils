import { appendFileSync, existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'fs'
import Inflector from './inflector'
import { resolve } from 'path'
import { ResourceTypeLock } from '@commercelayer/sdk'
import { findLine } from './util'


const DEBUG = process.env.DEBUG_SDK_UTILS

const encoding = 'utf-8'
const baseResourceFields = [ 'id', 'created_at', 'updated_at', 'reference', 'reference_origin', 'metadata' ]


const refreshOperators = async (): Promise<void> => {

	const operatorsFile = resolve('src/helpers/filter/base.ts')

	const cl = readFileSync(operatorsFile, { encoding })

	const lines = cl.split('\n')

	const operators: string[] = []

	for (const op of OPERATORS) {

		let opType = 'Single'
		let paramName = 'val'
		let paramVal = 'val'
		if (multipleValOperator(op)) {
			opType = 'Multiple'
			paramName = '...val'
			paramVal = '...val'
		}
		else if (noValOperator(op)) {
			opType = 'No'
			paramName = ''
			paramVal = '\'true\''
		}

		const opFun = `\t${op}: ${opType}ValOperator = (${paramName}) => { return this.addOperator('${op}', ${paramVal}) }`
		
		operators.push(opFun)

	}

	const iniStartIdx = findLine('##__FILTER_OPERATORS_START__##', lines).index + 1
	const iniStopIdx = findLine('##__FILTER_OPERATORS_STOP__##', lines).index
	lines.splice(iniStartIdx, iniStopIdx - iniStartIdx, ...operators)

	writeFileSync(operatorsFile, lines.join('\n'), { encoding })

}



export const generate = async (resources: any): Promise<any> => {

	console.log('Generating filter helper...')

	const resourcesFile = resolve('src/helpers/filter/resources.ts')
	const resourcesFileBkp = resourcesFile + '.bkp'


	try {

		const resourceHelpers: Partial<Record<ResourceTypeLock, string>> = {}
		resources.forEach(r => { if (!r.attributes.singleton) resourceHelpers[r.id] = Inflector.camelize(r.id) })

		const filterClasses: string[] = []


		for (const res of resources) {

			if ((res.type !== 'resources') || res.attributes.singleton) continue
			const resClass = Inflector.camelize(res.id)

			const filterClass: string[] = []

			filterClass.push(`class ${resClass}FilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {`)

			// Fields
			Object.entries(res.attributes.fields).forEach(([name, val]) => {
				const field = val as any
				if (field.filterable && !baseResourceFields.includes(name)) filterClass.push(`\tget ${name}(): Types.FilterOperator<M> { return this.addField('${name}') }`)
			})

			// Relationships
			Object.entries(res.attributes.relationships).forEach(([name, val]) => {
				const rel = val as any
				if (rel.filterable) {
					let polymorphic = ''
					let filterType = rel.class_name
					if (rel.polymorphic && !Object.values(resourceHelpers).includes(rel.class_name)) {
						filterType = 'Resource'
						polymorphic = ' // polymorphic'
					}
					filterClass.push(`\tget ${name}(): ${filterType}FilterFields<M> { return new ${filterType}FilterFields<M>(this.master, this.operator, this.addRelationship('${name}')) }${polymorphic}`)
				}
			})

			filterClass.push('}')

			filterClass.push(`\nexport type ${resClass}Filter = ${resClass}FilterFields<${resClass}Filter>`)

			filterClasses.push(filterClass.join('\n'))

		}


		const eslint = []

		const imports = [
			'import type * as Types from \'./base\'',
			'import { ResourceFilterFields } from \'./base\''
		]

		const header: string[] = [
			eslint.join('\n'),
			imports.join('\n'),
			'\n\n\n'
		]

		const helperClass = [
			'\n\n\n',
			'export class FilterHelper<M extends Types.FilterMaster> {',
			'\n\tstatic new<M extends Types.FilterMaster>(): FilterHelper<M> { return new FilterHelper<M>()}',
			'\n\tprivate constructor() {}\n',
			...Object.entries(resourceHelpers).map(([res, clazz]) =>
				`\tget ${Inflector.pluralize(res)}(): ${clazz}FilterFields<M> { return new ${clazz}FilterFields<M>() }`
			),
			'}\n'
		]

		// Backup current file
		renameSync(resourcesFile, resourcesFileBkp)

		// Create new file
		writeFileSync(resourcesFile, header.join('\n'), { encoding })
		appendFileSync(resourcesFile, filterClasses.join('\n\n\n'), { encoding })
		appendFileSync(resourcesFile, helperClass.join('\n'), { encoding })

		await refreshOperators()

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


const multipleValOperator = (op: string): boolean => {
	return (op.endsWith('_all') || op.endsWith('_any') || op.endsWith('_in') || ['not_in_or_null', 'in'].includes(op))
}

const noValOperator = (op: string): boolean => {
	return ['present', 'blank', 'null', 'not_null', 'true', 'false'].includes(op)
}


const OPERATORS = [
	'eq',
	'eq_or_null',
	'not_eq',
	'not_eq_or_null',
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
	'in_or_null',
	'not_in',
	'not_in_or_null',
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
	'false'
] as const
