import crypto from 'node:crypto'
import type { Address, Authorization, AvalaraAccount, Bundle, BuyXPayYPromotion, Capture, Cleanup, Coupon, Customer, CustomerAddress, CustomerPasswordReset, CustomerSubscription, Export, ExternalPromotion, FixedAmountPromotion, FixedPricePromotion, FreeGiftPromotion, FreeShippingPromotion, GiftCard, Import, InStockSubscription, LineItem, LineItemOption, Order, OrderCopy, OrderSubscription, Parcel, PercentageDiscountPromotion, PriceFrequencyTier, PriceVolumeTier, Promotion, RecurringOrderCopy, Refund, Resource, Return, Shipment, ShippingWeightTier, Sku, SkuOption, StockTransfer, Transaction, Void } from "@commercelayer/sdk"
import { CommerceLayerStatic } from '@commercelayer/sdk'
import type { DocWithData } from 'jsonapi-typescript'
import { config } from "../config"
import { denormalizeResponse } from '../jsonapi'



const checkPayload = (payload: string): DocWithData => {

	let resource: any

	// Check JSON
	try { resource = JSON.parse(payload) }
	catch (error: any) { throw new Error(`Error parsing payload [${error.message}]`) }

	// Check resource type
	if (!CommerceLayerStatic.resources().includes(resource.data?.type as string)) throw new Error(`Invalid resource type [${resource.data?.type}]`)

	return resource

}



export const denormalizePayload = <R extends Resource>(payload: string): R | R[] => {
	const resource = checkPayload(payload)
	const denormalizedResource = denormalizeResponse<R>(resource)
	return denormalizedResource
}



const generateHMAC = (payload: string, sharedSecret: string): string => {
	const { algorithm, digest } = config.webhooks.signature
	return crypto.createHmac(algorithm, sharedSecret).update(payload).digest(digest)
}


type CheckStatus = {
	ok: boolean,
	topic?: string,
	message?: string
}

/**
 * 
 * @param body the webhook body
 * @param headers all headers map or value of the signature header
 * @param secret the shared secret string
 * @returns 
 */
export const checkSignature = (body: string, headers: Record<string, string> | string, secret: string): CheckStatus => {

	const status: CheckStatus = {
		ok: false
	}

	try {

		const topic = (typeof headers === 'string') ? undefined : headers[config.webhooks.topic]
		const signature = (typeof headers === 'string') ? headers : headers[config.webhooks.signature.header]

		if (!secret) return { ...status, message: 'Missing shared secret' }
		if (!signature) return { ...status, message: 'Missing webhook signature' }

		const hash = generateHMAC(body, secret)

		status.topic = topic

		if (signature === hash) {
			status.ok = true
			status.message = 'Signature successfully checked'
		}
		else status.message = 'Payload signature verification failed'

	}
	catch (err) {
		status.ok = false
		status.message = (err as Error).message
	}


	return status

}

/*
export const sign = (body: string, secret: string, headers?: Record<string, string>): string => {
	const hash = generateHMAC(body, secret)
	if (headers) headers[config.webhooks.signature.header] = hash
	return hash
}
*/

class ParseError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'ParseError'
	}
}


const parse = <R extends Resource>(payload: string, type: string): R/* | R[] */ => {
	try {
		const res = denormalizePayload<R>(payload) as R
		// if (Array.isArray(res) && (res.length === 0)) return res
		// const resType = Array.isArray(res)? res[0].type : res.type
		const resType = res.type
		if (resType !== type) throw new ParseError(`Invalid resource type [${resType}]`)
		return res
	} catch (error: any) {
		throw new ParseError(`Payload parse error [${error.message}]`)
	}
}


const parsers = {
	addresses(payload: string): Address {
		return parse<Address>(payload, 'addresses')
	},
	authorizations(payload: string): Authorization {
		return parse<Authorization>(payload, 'authorizations')
	},
	avalara_accounts(payload: string): AvalaraAccount {
		return parse<AvalaraAccount>(payload, 'avalara_accounts')
	},
	bundles(payload: string): Bundle {
		return parse<Bundle>(payload, 'bundles')
	},
	buy_x_pay_y_promotions(payload: string): BuyXPayYPromotion {
		return parse<BuyXPayYPromotion>(payload, 'buy_x_pay_y_promotions')
	},
	captures(payload: string): Capture {
		return parse<Capture>(payload, 'captures')
	},
	cleanups(payload: string): Cleanup {
		return parse<Cleanup>(payload, 'cleanups')
	},
	coupons(payload: string): Coupon {
		return parse<Coupon>(payload, 'coupons')
	},
	customer_addresses(payload: string): CustomerAddress {
		return parse<CustomerAddress>(payload, 'customer_addresses')
	},
	customer_password_resets(payload: string): CustomerPasswordReset {
		return parse<CustomerPasswordReset>(payload, 'customer_password_resets')
	},
	customer_subscriptions(payload: string): CustomerSubscription {
		return parse<CustomerSubscription>(payload, 'customer_subscriptions')
	},
	customers(payload: string): Customer {
		return parse<Customer>(payload, 'customers')
	},
	exports(payload: string): Export {
		return parse<Export>(payload, 'exports')
	},
	external_promotions(payload: string): ExternalPromotion {
		return parse<ExternalPromotion>(payload, 'external_promotions')
	},
	fixed_amount_promotions(payload: string): FixedAmountPromotion {
		return parse<FixedAmountPromotion>(payload, 'fixed_amount_promotions')
	},
	fixed_price_promotions(payload: string): FixedPricePromotion {
		return parse<FixedPricePromotion>(payload, 'fixed_price_promotions')
	},
	free_gift_promotions(payload: string): FreeGiftPromotion {
		return parse<FreeGiftPromotion>(payload, 'free_gift_promotions')
	},
	free_shipping_promotions(payload: string): FreeShippingPromotion {
		return parse<FreeShippingPromotion>(payload, 'free_shipping_promotions')
	},
	gift_cards(payload: string): GiftCard {
		return parse<GiftCard>(payload, 'gift_cards')
	},
	imports(payload: string): Import {
		return parse<Import>(payload, 'imports')
	},
	in_stock_subscriptions(payload: string): InStockSubscription {
		return parse<InStockSubscription>(payload, 'in_stock_subscriptions')
	},
	line_items(payload: string): LineItem {
		return parse<LineItem>(payload, 'line_items')
	},
	line_items_options(payload: string): LineItemOption {
		return parse<LineItemOption>(payload, 'line_items_options')
	},
	orders(payload: string): Order {
		return parse<Order>(payload, 'orders')
	},
	order_copies(payload: string): OrderCopy {
		return parse<OrderCopy>(payload, 'order_copies')
	},
	order_subscriptions(payload: string): OrderSubscription {
		return parse<OrderSubscription>(payload, 'order_subscriptions')
	},
	parcels(payload: string): Parcel | Parcel[] {
		return parse<Parcel>(payload, 'parcels')
	},
	percentage_discount_promotions(payload: string): PercentageDiscountPromotion {
		return parse<PercentageDiscountPromotion>(payload, 'percentage_discount_promotions')
	},
	price_frequency_tiers(payload: string): PriceFrequencyTier {
		return parse<PriceFrequencyTier>(payload, 'price_frequency_tiers')
	},
	price_volume_tiers(payload: string): PriceVolumeTier {
		return parse<PriceVolumeTier>(payload, 'price_volume_tiers')
	},
	promotions(payload: string): Promotion {
		return parse<Promotion>(payload, 'promotions')
	},
	recurring_order_copies(payload: string): RecurringOrderCopy {
		return parse<RecurringOrderCopy>(payload, 'recurring_order_copies')
	},
	refunds(payload: string): Refund {
		return parse<Refund>(payload, 'refunds')
	},
	returns(payload: string): Return {
		return parse<Return>(payload, 'returns')
	},
	shipments(payload: string): Shipment {
		return parse<Shipment>(payload, 'shipments')
	},
	shipping_weight_tiers(payload: string): ShippingWeightTier {
		return parse<ShippingWeightTier>(payload, 'shipping_weight_tiers')
	},
	skus(payload: string): Sku {
		return parse<Sku>(payload, 'skus')
	},
	sku_options(payload: string): SkuOption {
		return parse<SkuOption>(payload, 'sku_options')
	},
	stock_transfers(payload: string): StockTransfer {
		return parse<StockTransfer>(payload, 'stock_transfers')
	},
	transactions(payload: string): Transaction {
		return parse<Transaction>(payload, 'transactions')
	},
	voids(payload: string): Void {
		return parse<Void>(payload, 'voids')
	}
}



export const webhooks = {
	denormalizePayload,
	checkSignature,
	parse: parsers
}
