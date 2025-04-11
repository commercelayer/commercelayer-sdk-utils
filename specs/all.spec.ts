
import { expect, test, beforeAll, afterEach, describe } from 'vitest'
import type { ShippingCategory, Sku, SkuCreate } from '@commercelayer/sdk'
import { retrieveAll, updateAll, deleteAll } from '../lib'
import { initialize, cl } from '../test/common'



beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	vi.resetAllMocks()
})



describe('sdk-utils.all suite', () => {

	test('all.retrieveAll', async () => {

		const skus = await retrieveAll<Sku>('skus')

		const skusCount = await cl.skus.count()

		expect(skus.meta.recordCount).toBe(skusCount)
		expect(skus.length).toBe(skusCount)

	})


	test('all.updateAll', async () => {

		const reference_origin = String(Date.now())
		const sku = { reference_origin }

		const updRes = await updateAll('skus', sku, { filters: { reference_eq: 'sdk-test-org' } })

		if (updRes.errors > 0) expect(updRes.processed + updRes.errors).toBe(updRes.total)
		else expect(updRes.processed).toBe(updRes.total)

		const skus = await cl.skus.list({ filters: { reference_origin_eq: reference_origin }})
		expect(skus.recordCount).toBe(updRes.total)

	})


	test('all.deleteAll', async () => {

		let codName = ''
		const referenceOrigin = String(Date.now())

		const shipCat = (await cl.shipping_categories.list({ pageSize: 1 })).first() as ShippingCategory
		const shippingCategory = cl.shipping_categories.relationship(shipCat)
		
		const sku: SkuCreate = {
			code: codName,
			name: codName,
			reference_origin: referenceOrigin,
			shipping_category: shippingCategory
		}

		const numNewRec = Math.ceil(Math.random() * 10)

		for (let idx = 0; idx < numNewRec; idx++) {
			codName = `${referenceOrigin}-}${Math.floor(Math.random() * 1000)}`
			sku.code = codName
			sku.name = codName
			await cl.skus.create(sku)
		}

		let skus = await cl.skus.list({ filters: { reference_origin_eq: referenceOrigin }})
		expect(skus.recordCount).toBe(numNewRec)
		expect(skus.length).toBe(numNewRec)

		const delRes = await deleteAll('skus',{ filters: { reference_origin_eq: referenceOrigin } })

		if (delRes.errors > 0) expect(delRes.processed + delRes.errors).toBe(delRes.total)
		else expect(delRes.processed).toBe(delRes.total)

		skus = await cl.skus.list({ filters: { reference_origin_eq: referenceOrigin }})
		expect(skus.recordCount).toBe(0)
		expect(skus.length).toBe(0)

	})


	test('all.limit', async () => {

		const LIMIT = Math.floor(Math.random() * 100)

		const skus = await retrieveAll<Sku>('skus', { limit: LIMIT })

		const skusCount = await cl.skus.count()

		expect(skus.meta.recordCount).toBe(skusCount)
		expect(skus.length).toBe(LIMIT)
		expect(skus.length).toBeLessThanOrEqual(skusCount)

	})

})
