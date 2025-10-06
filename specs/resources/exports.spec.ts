
import { expect, test, beforeAll, afterEach, describe } from 'vitest'
import { type ExportCreate, exports, prices } from '@commercelayer/sdk'
import { splitExport, exportsToBatchTasks, executeExport } from '../../src'
import type { Task, TaskResult } from '../../src'
import { initialize } from '../../test/common'
import { TemplateTask } from '../../src/batch'
import { ApiResourceClient } from '../../src/init'


const resourceType = 'prices'


beforeAll(async () => {
	await initialize(exports, prices)
})

afterEach(() => {
	vi.resetAllMocks()
})



describe('sdk-utils.exports suite', () => {

	test('exports.split', async () => {

		const exportMaxSize = 30
		const resourceCount = await ApiResourceClient(resourceType).count()
		const expectedExports = Math.ceil(resourceCount / exportMaxSize)
		
		const expCreate = {
			resource_type: resourceType
		}

		const exports = await splitExport(expCreate, { size: exportMaxSize, delay: 700 })

		expect(exports.length).toBe(expectedExports)

		for (let i = 0; i < exports.length; i++) {

			const exp = exports[i]
			
			expect(exp.filters).toBeDefined()
			if (!exp.filters) exp.filters = {}
			if (i === 0) {
				expect(exp.filters['id_gt']).toBeUndefined()
				expect(exp.filters['id_lteq']).toBeDefined()
			} else {
				if (i === exports.length-1) {
					const expPre = exports[i-1]
					if (!expPre.filters) expPre.filters = {}
					expect(exp.filters['id_gt']).toBe(expPre.filters['id_lteq'])
					expect(exp.filters['id_lteq']).toBeUndefined()
				} else 
				if (i < exports.length-1) {
					const expPre = exports[i-1]
					if (!expPre.filters) expPre.filters = {}
					expect(exp.filters['id_gt']).toBe(expPre.filters['id_lteq'])
					expect(exp.filters['id_gt']).not.toBe(exp.filters['id_lteq'])
				}
			}

			expect(exp.metadata).toBeDefined()
			if (exp.metadata) {
				expect(exp.metadata['group_id']).toBeDefined
				expect(exp.metadata['progress_number']).toBeDefined()
			}

		}

	})


	test('exports.toBatchTasks', async () => {

		const exports: ExportCreate[] = [
			{ resource_type: resourceType },
			{ resource_type: resourceType },
			{ resource_type: resourceType }
		]

		const task: TemplateTask = {
			onSuccess: {
				callback: (output: TaskResult, task: Task): void => {}
			},
			onFailure: {
				haltOnError: true
			}
		}

		const tasks = exportsToBatchTasks(exports, task)

		expect(tasks.length).toBe(exports.length)

		for (let i = 0; i < tasks.length; i++) {

			const exp = exports[i]
			const tsk = tasks[i]

			expect(tsk.operation).toBe('create')
			expect(tsk.resourceType).toBe('exports')
			expect(tsk.resource).toEqual(exp)

			expect(tsk.onFailure?.haltOnError).toBeTruthy()
			expect(tsk.onSuccess?.callback).toBeDefined()

		}

	})


	test('exports.execute', async () => {

		const exportMaxSize = 5
		const queueLength = 5
		const resourceCount = await ApiResourceClient(resourceType).count()	// await cl[resourceType].count()
		const expectedExports = Math.ceil(resourceCount / exportMaxSize)
		
		const expCreate = {
			resource_type: resourceType
		}

		const exports = await executeExport(expCreate, { size: exportMaxSize, queueLength })

		expect(exports.length).toBe(expectedExports)

		for (const exp of exports) {
			expect(exp.records_count).toBeLessThanOrEqual(exportMaxSize)
			expect(exp.reference).toBeDefined()
			expect(exp.metadata).toBeDefined()
			if (exp.metadata) {
				expect(exp.metadata['group_id']).toBeDefined
				expect(exp.metadata['progress_number']).toBeDefined()
			}
			expect(['completed', 'interrupted']).toContain(exp.status)
		}

		// console.log(exports[0].metadata?.group_id)

	}, 0)

})
