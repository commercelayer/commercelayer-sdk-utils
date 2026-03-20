

import { type CleanupCreate, skus } from '@commercelayer/sdk'
import { afterEach, beforeAll, describe, expect, test } from 'vitest'
import { cleanupsToBatchTasks, splitCleanup, type Task, type TaskResult,  } from '../../src'
import type { TemplateTask } from '../../src/batch'
import { ApiResourceClient } from '../../src/init'
import { initialize } from '../../test/common'


const resourceType = 'skus'



beforeAll(async () => {
	await initialize(skus)
})

afterEach(() => {
	vi.resetAllMocks()
})



describe('sdk-utils.cleanups suite', () => {

	test('cleanups.split', async () => {

		const cleanupMaxSize = 30
		const resourceCount = await ApiResourceClient(resourceType).count()
		const expectedCleanups = Math.ceil(resourceCount / cleanupMaxSize)
		
		const clpCreate = {
			resource_type: resourceType
		}

		const cleanups = await splitCleanup(clpCreate, { size: cleanupMaxSize, delay: 700 })

		expect(cleanups.length).toBe(expectedCleanups)

		for (let i = 0; i < cleanups.length; i++) {
			const clp = cleanups[i]
			expect(clp.filters).toBeDefined()
			if (!clp.filters) clp.filters = {}
			if (i === 0) {
				expect(clp.filters.id_gt).toBeUndefined()
				expect(clp.filters.id_lteq).toBeDefined()
			} else {
				if (i < cleanups.length-1) {
					const clpPre = cleanups[i-1]
					if (!clpPre.filters) clpPre.filters = {}
					expect(clp.filters.id_gt).toBe(clpPre.filters.id_lteq)
					expect(clp.filters.id_gt).not.toBe(clp.filters.id_lteq)
				} else
				if (i === cleanups.length-1) {
					const clpPre = cleanups[i-1]
					if (!clpPre.filters) clpPre.filters = {}
					expect(clp.filters.id_gt).toBe(clpPre.filters.id_lteq)
					expect(clp.filters.id_lteq).toBeUndefined()
				}
			}
		}

	})


	test('cleanups.toBatchTasks', async () => {

		const cleanups: CleanupCreate[] = [
			{ resource_type: resourceType },
			{ resource_type: resourceType },
			{ resource_type: resourceType }
		]

		const task: TemplateTask = {
			onSuccess: {
				callback: (_output: TaskResult, _task: Task): void => {}
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
