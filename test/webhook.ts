import { CommerceLayer } from "@commercelayer/sdk/bundle"
import { CommerceLayerUtils, webhooks } from "../lib"

import dotenv from 'dotenv'
dotenv.config()



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOmZhbHNlfSwiYXBwbGljYXRpb24iOnsiaWQiOiJWcERYV2lxa0JwIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZX0sInRlc3QiOnRydWUsImV4cCI6MTcwODUzOTgzMSwicmFuZCI6MC45MjI0MDM4MzAxMTc4OTcyfQ.fMyvLWn2PNg6XLCwoMIUGAjUHH7jMJLwJgJaCo0MHfJtMChK7091NcLwAuc3XnEp3H8GmoIyPlJ7WC-7PrWkkQ'

const SECRET = process.env.WEBHOOK_SECRET_CUSTOMER_CREATE || ''
const HEADERS = {
	'x-commercelayer-signature': 'DO/Gqc6yf2jXAl41IV01cbT3jhbpq7AGoyrz3zDmSM4=',
	'x-commercelayer-topic': 'customers.create'
}
const BODY = '{"data":{"id":"OeRyhjDlje","type":"customers","links":{"self":"/api/customers/OeRyhjDlje"},"attributes":{"email":"user1708533429604@sdk-test.org","status":"prospect","has_password":false,"total_orders_count":0,"created_at":"2024-02-21T16:37:09.750Z","updated_at":"2024-02-21T16:37:09.750Z","reference":null,"reference_origin":null,"metadata":{}},"relationships":{"customer_group":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_group","related":"/api/customers/OeRyhjDlje/customer_group"}},"customer_addresses":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_addresses","related":"/api/customers/OeRyhjDlje/customer_addresses"}},"customer_payment_sources":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_payment_sources","related":"/api/customers/OeRyhjDlje/customer_payment_sources"}},"customer_subscriptions":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/customer_subscriptions","related":"/api/customers/OeRyhjDlje/customer_subscriptions"}},"orders":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/orders","related":"/api/customers/OeRyhjDlje/orders"}},"order_subscriptions":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/order_subscriptions","related":"/api/customers/OeRyhjDlje/order_subscriptions"}},"returns":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/returns","related":"/api/customers/OeRyhjDlje/returns"}},"sku_lists":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/sku_lists","related":"/api/customers/OeRyhjDlje/sku_lists"}},"attachments":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/attachments","related":"/api/customers/OeRyhjDlje/attachments"}},"events":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/events","related":"/api/customers/OeRyhjDlje/events"}},"tags":{"links":{"self":"/api/customers/OeRyhjDlje/relationships/tags","related":"/api/customers/OeRyhjDlje/tags"}}},"meta":{"mode":"test","organization_id":"wRPpEFOElR"}}}'



const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (param: string): Promise<void> => {

	if (param === 'setup') {

		const webhookName = 'sdkUtilWebhookTest'

		let wh = (await cl.webhooks.list({ filters: { name_eq: webhookName } })).first()

		if (!wh) {
			wh = await cl.webhooks.create({
				name: webhookName,
				topic: 'customers.create',
				callback_url: 'https://webhook.site/707b8062-5427-4830-a59d-6b7db3ec640c'
			})
			console.log(`Created webhook ${webhookName}`)
			console.log(wh)
		}

		const c = await cl.customers.create({ email: `user${Date.now()}@sdk-test.org` })
		console.log(`Created new customer ${c.email}`)
		console.log(c)

	}


	if (param === 'check') {
		const checkStatus = webhooks.checkSignature(BODY, HEADERS, SECRET)
		console.log(checkStatus)
		if (checkStatus.ok) {
			const customer = webhooks.parse.customers(BODY)
			console.log(customer)
		}
	}


}


void test(process.argv[2])
