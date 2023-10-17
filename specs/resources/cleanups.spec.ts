
import type { CleanupCreate } from '@commercelayer/sdk'
import { splitCLeanup, cleanupsToBatchTasks, type Task, type TaskResult } from '../../lib/cjs'
import { initialize, cl } from '../../test/common'
import { TemplateTask } from '../../lib/cjs/batch'



beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	jest.resetAllMocks()
})



describe('sdk-utils.cleanups suite', () => {

	it('cleanups.split', async () => {

		const cleanupMaxSize = 100
		const customersCount = await cl.customers.count()
		const expectedCleanups = Math.ceil(customersCount / cleanupMaxSize)
		
		const clpCreate = {
			resource_type: 'customers'
		}

		const cleanups = await splitCLeanup(clpCreate, cleanupMaxSize)

		expect(cleanups.length).toBe(expectedCleanups)

		for (let i = 0; i < cleanups.length; i++) {
			const clp = cleanups[i]
			expect(clp.filters).toBeDefined()
			if (!clp.filters) clp.filters = {}
			if (i === 0) {
				expect(clp.filters['id_gt']).toBeUndefined()
				expect(clp.filters['id_lteq']).toBeDefined()
			} else {
				const clpPre = cleanups[i-1]
				if (!clpPre.filters) clpPre.filters = {}
				expect(clp.filters['id_gt']).toBe(clpPre.filters['id_lteq'])
				expect(clp.filters['id_gt']).not.toBe(clp.filters['id_lteq'])
			}
		}

	})


	it('cleanups.toBatchTasks', async () => {

		const cleanups: CleanupCreate[] = [
			{ resource_type: 'customers' },
			{ resource_type: 'customers' },
			{ resource_type: 'customers' }
		]

		const task: TemplateTask = {
			onSuccess: {
				callback: (output: TaskResult, task: Task): void => {}
			},
			onFailure: {
				haltOnError: true
			}
		}

		const tasks = cleanupsToBatchTasks(cleanups, task)

		expect(tasks.length).toBe(cleanups.length)

		for (let i = 0; i < tasks.length; i++) {

			const clp = cleanups[i]
			const tsk = tasks[i]

			expect(tsk.operation).toBe('create')
			expect(tsk.resourceType).toBe('cleanups')
			expect(tsk.resource).toEqual(clp)

			expect(tsk.onFailure?.haltOnError).toBeTruthy()
			expect(tsk.onSuccess?.callback).toBeDefined()

		}

	})

})
