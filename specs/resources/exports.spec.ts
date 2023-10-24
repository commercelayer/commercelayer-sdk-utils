
import type { ExportCreate } from '@commercelayer/sdk'
import { splitExport, exportsToBatchTasks } from '../../src'
import type { Task, TaskResult } from '../../src'
import { initialize, cl } from '../../test/common'
import { TemplateTask } from '../../src/batch'


const resourceType = 'prices'


beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	jest.resetAllMocks()
})



describe('sdk-utils.exports suite', () => {

	it('exports.split', async () => {

		const exportMaxSize = 30
		const resourceCount = await cl[resourceType].count()
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
					console.log(exp)
					const expPre = exports[i-1]
					if (!expPre.filters) expPre.filters = {}
					expect(exp.filters['id_gt']).toBe(expPre.filters['id_lteq'])
					expect(exp.filters['id_lteq']).toBeUndefined()
				} else 
				if (i < exports.length-1) {
					console.log(i)
					console.log(exp)
					const expPre = exports[i-1]
					if (!expPre.filters) expPre.filters = {}
					expect(exp.filters['id_gt']).toBe(expPre.filters['id_lteq'])
					expect(exp.filters['id_gt']).not.toBe(exp.filters['id_lteq'])
				}
			}
		}

	})


	it('exports.toBatchTasks', async () => {

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

})
