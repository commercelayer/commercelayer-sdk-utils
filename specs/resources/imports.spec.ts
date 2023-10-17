
import type { ImportCreate } from '@commercelayer/sdk'
import { importsToBatchTasks, splitImport } from '../../lib/cjs'
import type { Task, TaskResult } from '../../lib/cjs'
import { initialize } from '../../test/common'
import { TemplateTask } from '../../lib/cjs/batch'



beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	jest.resetAllMocks()
})



describe('sdk-utils.imports suite', () => {

	it('imports.split', async () => {

		const numInputs = 1000
		const impSize = 100

		const inputs: Record<string, any>[] = []

		for (let i = 0; i < numInputs; i++) {
			inputs.push({ attr: 'input_' + i })
		  }
		
		  const ic: ImportCreate = {
			resource_type: 'customers',
			inputs
		  }
		
		  const imports = splitImport(ic, impSize)

		  expect(imports.length).toBe(Math.ceil(numInputs / impSize))
		  for (let i = 1; i <= imports.length; i++) {
			const imp = imports[i-1]
			if (i === imports.length) expect(imp.inputs.length).toBeLessThanOrEqual(impSize)
			else expect(imp.inputs.length).toBe(impSize)
		  }

	})


	it('imports.toBatchTasks', async () => {

		const imports: ImportCreate[] = [
			{ resource_type: 'customers', inputs: [] },
			{ resource_type: 'customers', inputs: [] },
			{ resource_type: 'customers', inputs: [] }
		]

		const task: TemplateTask = {
			onSuccess: {
				callback: (output: TaskResult, task: Task): void => {}
			},
			onFailure: {
				haltOnError: true
			}
		}

		const tasks = importsToBatchTasks(imports, task)

		expect(tasks.length).toBe(imports.length)

		for (let i = 0; i < tasks.length; i++) {

			const exp = imports[i]
			const tsk = tasks[i]

			expect(tsk.operation).toBe('create')
			expect(tsk.resourceType).toBe('imports')
			expect(tsk.resource).toEqual(exp)

			expect(tsk.onFailure?.haltOnError).toBeTruthy()
			expect(tsk.onSuccess?.callback).toBeDefined()

		}

	})

})
