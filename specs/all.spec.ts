
import type { Sku } from '@commercelayer/sdk'
import { retrieveAll, updateAll } from '../src'
import { initialize, cl } from '../test/common'



beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	jest.resetAllMocks()
})



describe('sdk-utils.all suite', () => {

	it('exports.retrieveAll', async () => {

		const skus = await retrieveAll<Sku>('skus')

		const skusCount = await cl.skus.count()

		expect(skus.meta.recordCount).toBe(skusCount)
		expect(skus.length).toBe(skusCount)

	})


	it('exports.updateAll', async () => {

		const reference_origin = String(Date.now())
		const sku = { reference_origin }

		const updRes = await updateAll('skus', sku, { filters: { reference_eq: 'sdk-test-org' } })

		if (updRes.errors > 0) expect(updRes.processed + updRes.errors).toBe(updRes.total)
		else expect(updRes.processed).toBe(updRes.total)

		const skus = await cl.skus.list({ filters: { reference_origin_eq: reference_origin }})
		expect(skus.recordCount).toBe(updRes.total)

	})


	it('all.limit', async () => {

		const LIMIT = Math.floor(Math.random() * 100)

		const skus = await retrieveAll<Sku>('skus', { limit: LIMIT })

		const skusCount = await cl.skus.count()

		expect(skus.meta.recordCount).toBe(skusCount)
		expect(skus.length).toBe(LIMIT)
		expect(skus.length).toBeLessThanOrEqual(skusCount)

	})

})
