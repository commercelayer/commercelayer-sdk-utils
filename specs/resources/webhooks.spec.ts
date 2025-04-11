
import { expect, test, describe } from 'vitest'
import type { Resource } from '@commercelayer/sdk'
import { denormalizePayload, webhooks } from '../../lib'


const PAYLOAD = '{"data":{"id":"OeRyhjDlje","type":"customers","links":{"self":"/api/customers/OeRyhjDlje"},"attributes":{"email":"user1708533429604@sdk-test.org","status":"prospect","has_password":false,"total_orders_count":0,"created_at":"2024-02-21T16:37:09.750Z","updated_at":"2024-02-21T16:37:09.750Z","reference":null,"reference_origin":null,"metadata":{}},"relationships":{"customer_group":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_group","related":"/api/customers/OeRyhjDlje/customer_group"}},"customer_addresses":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_addresses","related":"/api/customers/OeRyhjDlje/customer_addresses"}},"customer_payment_sources":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_payment_sources","related":"/api/customers/OeRyhjDlje/customer_payment_sources"}},"customer_subscriptions":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_subscriptions","related":"/api/customers/OeRyhjDlje/customer_subscriptions"}},"orders":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/orders","related":"/api/customers/OeRyhjDlje/orders"}},"order_subscriptions":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/order_subscriptions","related":"/api/customers/OeRyhjDlje/order_subscriptions"}},"returns":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/returns","related":"/api/customers/OeRyhjDlje/returns"}},"sku_lists":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/sku_lists","related":"/api/customers/OeRyhjDlje/sku_lists"}},"attachments":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/attachments","related":"/api/customers/OeRyhjDlje/attachments"}},"events":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/events","related":"/api/customers/OeRyhjDlje/events"}},"tags":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/tags","related":"/api/customers/OeRyhjDlje/tags"}}},"meta":{"mode":"test","organization_id":"wRPpEFOElR"}}}'



/*
beforeAll(async () => {
	await initialize()
})

afterEach(() => {
	jest.resetAllMocks()
})
*/



describe('sdk-utils.webhooks suite', () => {

	test('webhooks.parse', async () => {

		const type = 'shipments'
		const reference = 'myReferenceId'

		const payload = `
		{
			"data": {
			"id": "AbcdEfgHiL",
			"meta": {
			  "mode": "test",
			  "organization_id": "myOrgId"
			},
			"type": "${type}",
			"links": {
			  "self": "/api/${type}/AbcdEfgHiL"
			},
			"attributes": {
			  "metadata": {},
			  "reference": "${reference}",
			  "created_at": "2023-10-01T05:53:29.296Z",
			  "updated_at": "2023-10-10T08:52:13.251Z"
			}
		  }
		}
		`

		const res = denormalizePayload(payload) as Resource

		expect(res.type).toBe(type)
		expect(res.reference).toBe(reference)

	})


	test('webhooks.signature.ok', async () => {

		const payload = PAYLOAD
		const signature = 'DO/Gqc6yf2jXAl41IV01cbT3jhbpq7AGoyrz3zDmSM4='
		const secret = process.env.WEBHOOK_SECRET_CUSTOMER_CREATE || ''

		const status = webhooks.checkSignature(payload, signature, secret)
		expect(status.ok).toBeTruthy()

	})


	test('webhooks.signature.ko', async () => {

		const payload = PAYLOAD
		const signature = 'DO/Gqc6yf2jXAl41IV01cbT3jhbpq7AGoyrz3zDmSM4='
		const secret = process.env.WEBHOOK_SECRET_CUSTOMER_CREATE || ''

		let status = webhooks.checkSignature(payload + 'X', signature, secret)
		expect(status.ok).toBeFalsy()
		expect(status.message).toContain('failed')

		status = webhooks.checkSignature(payload, '', secret)
		expect(status.ok).toBeFalsy()
		expect(status.message).toContain('signature')

		status = webhooks.checkSignature(payload, signature, '')
		expect(status.ok).toBeFalsy()
		expect(status.message).toContain('secret')

	})


	test('webhooks.parse.payload', async () => {

		const payload = PAYLOAD
		
		const customer = webhooks.parse.customers(PAYLOAD)

		expect(customer).toBeDefined()
		expect(customer.type).toBe('customers')
		expect(customer.id).not.toBeNull()

	})

})
