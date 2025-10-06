/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ResourceInclude } from './base'



class AddressInclude extends ResourceInclude {
	get geocoder(): GeocoderInclude { return new GeocoderInclude(this.include('geocoder'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class AdjustmentInclude extends ResourceInclude {
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class AdyenGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get adyen_payments(): AdyenPaymentInclude { return new AdyenPaymentInclude(this.include('adyen_payments'))}
}


class AdyenPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ApplicationInclude extends ResourceInclude {
}


class AttachmentInclude extends ResourceInclude {
}


class AuthorizationInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get captures(): CaptureInclude { return new CaptureInclude(this.include('captures'))}
	get voids(): VoidInclude { return new VoidInclude(this.include('voids'))}
}


class AvalaraAccountInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get tax_categories(): TaxCategoryInclude { return new TaxCategoryInclude(this.include('tax_categories'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class AxerveGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get axerve_payments(): AxervePaymentInclude { return new AxervePaymentInclude(this.include('axerve_payments'))}
}


class AxervePaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class BillingInfoValidationRuleInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class BingGeocoderInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get addresses(): AddressInclude { return new AddressInclude(this.include('addresses'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
}


class BraintreeGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get braintree_payments(): BraintreePaymentInclude { return new BraintreePaymentInclude(this.include('braintree_payments'))}
}


class BraintreePaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class BundleInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class BuyXPayYPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class CaptureInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get reference_authorization(): AuthorizationInclude { return new AuthorizationInclude(this.include('reference_authorization'))}
	get refunds(): RefundInclude { return new RefundInclude(this.include('refunds'))}
	get return(): ReturnInclude { return new ReturnInclude(this.include('return'))}
}


class CarrierAccountInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CheckoutComGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get checkout_com_payments(): CheckoutComPaymentInclude { return new CheckoutComPaymentInclude(this.include('checkout_com_payments'))}
}


class CheckoutComPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CleanupInclude extends ResourceInclude {
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CouponInclude extends ResourceInclude {
	get promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('promotion_rule'))}
	get coupon_recipient(): CouponRecipientInclude { return new CouponRecipientInclude(this.include('coupon_recipient'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CouponCodesPromotionRuleInclude extends ResourceInclude {
	get promotion(): PromotionInclude { return new PromotionInclude(this.include('promotion'))} // polymorphic
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
}


class CouponRecipientInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CreditCardInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CustomPromotionRuleInclude extends ResourceInclude {
	get promotion(): PromotionInclude { return new PromotionInclude(this.include('promotion'))} // polymorphic
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CustomerInclude extends ResourceInclude {
	get customer_group(): CustomerGroupInclude { return new CustomerGroupInclude(this.include('customer_group'))}
	get customer_addresses(): CustomerAddressInclude { return new CustomerAddressInclude(this.include('customer_addresses'))}
	get customer_payment_sources(): CustomerPaymentSourceInclude { return new CustomerPaymentSourceInclude(this.include('customer_payment_sources'))}
	get customer_subscriptions(): CustomerSubscriptionInclude { return new CustomerSubscriptionInclude(this.include('customer_subscriptions'))}
	get orders(): OrderInclude { return new OrderInclude(this.include('orders'))}
	get order_subscriptions(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscriptions'))}
	get returns(): ReturnInclude { return new ReturnInclude(this.include('returns'))}
	get sku_lists(): SkuListInclude { return new SkuListInclude(this.include('sku_lists'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
}


class CustomerAddressInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get address(): AddressInclude { return new AddressInclude(this.include('address'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CustomerGroupInclude extends ResourceInclude {
	get customers(): CustomerInclude { return new CustomerInclude(this.include('customers'))}
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CustomerPasswordResetInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class CustomerPaymentSourceInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get payment_method(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_method'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class CustomerSubscriptionInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class DeliveryLeadTimeInclude extends ResourceInclude {
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get shipping_method(): ShippingMethodInclude { return new ShippingMethodInclude(this.include('shipping_method'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class DiscountEngineInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get discount_engine_items(): DiscountEngineItemInclude { return new DiscountEngineItemInclude(this.include('discount_engine_items'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class DiscountEngineItemInclude extends ResourceInclude {
	get discount_engine(): DiscountEngineInclude { return new DiscountEngineInclude(this.include('discount_engine'))}
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
}


class EventInclude extends ResourceInclude {
	get webhooks(): WebhookInclude { return new WebhookInclude(this.include('webhooks'))}
	get last_event_callbacks(): EventCallbackInclude { return new EventCallbackInclude(this.include('last_event_callbacks'))}
}


class EventCallbackInclude extends ResourceInclude {
	get webhook(): WebhookInclude { return new WebhookInclude(this.include('webhook'))}
}


class ExportInclude extends ResourceInclude {
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class ExternalGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get external_payments(): ExternalPaymentInclude { return new ExternalPaymentInclude(this.include('external_payments'))}
}


class ExternalPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get wallet(): CustomerPaymentSourceInclude { return new CustomerPaymentSourceInclude(this.include('wallet'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ExternalPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class ExternalTaxCalculatorInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class FixedAmountPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class FixedPricePromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class FlexPromotionInclude extends ResourceInclude {
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class FreeGiftPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class FreeShippingPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class GeocoderInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get addresses(): AddressInclude { return new AddressInclude(this.include('addresses'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
}


class GiftCardInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get gift_card_recipient(): GiftCardRecipientInclude { return new GiftCardRecipientInclude(this.include('gift_card_recipient'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class GiftCardRecipientInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class GoogleGeocoderInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get addresses(): AddressInclude { return new AddressInclude(this.include('addresses'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
}


class ImportInclude extends ResourceInclude {
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class InStockSubscriptionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class InventoryModelInclude extends ResourceInclude {
	get inventory_stock_locations(): InventoryStockLocationInclude { return new InventoryStockLocationInclude(this.include('inventory_stock_locations'))}
	get inventory_return_locations(): InventoryReturnLocationInclude { return new InventoryReturnLocationInclude(this.include('inventory_return_locations'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class InventoryReturnLocationInclude extends ResourceInclude {
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get inventory_model(): InventoryModelInclude { return new InventoryModelInclude(this.include('inventory_model'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class InventoryStockLocationInclude extends ResourceInclude {
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get inventory_model(): InventoryModelInclude { return new InventoryModelInclude(this.include('inventory_model'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class KlarnaGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get klarna_payments(): KlarnaPaymentInclude { return new KlarnaPaymentInclude(this.include('klarna_payments'))}
}


class KlarnaPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class LineItemInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))} // polymorphic
	get bundle(): BundleInclude { return new BundleInclude(this.include('bundle'))} // polymorphic
	get adjustment(): AdjustmentInclude { return new AdjustmentInclude(this.include('adjustment'))} // polymorphic
	get gift_card(): GiftCardInclude { return new GiftCardInclude(this.include('gift_card'))} // polymorphic
	get shipment(): ShipmentInclude { return new ShipmentInclude(this.include('shipment'))} // polymorphic
	get payment_method(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_method'))} // polymorphic
	get line_item_options(): LineItemOptionInclude { return new LineItemOptionInclude(this.include('line_item_options'))}
	get return_line_items(): ReturnLineItemInclude { return new ReturnLineItemInclude(this.include('return_line_items'))}
	get shipment_line_items(): ShipmentLineItemInclude { return new ShipmentLineItemInclude(this.include('shipment_line_items'))}
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservations'))}
	get stock_line_items(): StockLineItemInclude { return new StockLineItemInclude(this.include('stock_line_items'))}
	get stock_transfers(): StockTransferInclude { return new StockTransferInclude(this.include('stock_transfers'))}
	get notifications(): NotificationInclude { return new NotificationInclude(this.include('notifications'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
}


class LineItemOptionInclude extends ResourceInclude {
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
	get sku_option(): SkuOptionInclude { return new SkuOptionInclude(this.include('sku_option'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
}


class LinkInclude extends ResourceInclude {
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class ManualGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ManualTaxCalculatorInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get tax_rules(): TaxRuleInclude { return new TaxRuleInclude(this.include('tax_rules'))}
}


class MarketInclude extends ResourceInclude {
	get merchant(): MerchantInclude { return new MerchantInclude(this.include('merchant'))}
	get price_list(): PriceListInclude { return new PriceListInclude(this.include('price_list'))}
	get base_price_list(): PriceListInclude { return new PriceListInclude(this.include('base_price_list'))}
	get inventory_model(): InventoryModelInclude { return new InventoryModelInclude(this.include('inventory_model'))}
	get subscription_model(): SubscriptionModelInclude { return new SubscriptionModelInclude(this.include('subscription_model'))}
	get discount_engine(): DiscountEngineInclude { return new DiscountEngineInclude(this.include('discount_engine'))}
	get tax_calculator(): TaxCalculatorInclude { return new TaxCalculatorInclude(this.include('tax_calculator'))}
	get customer_group(): CustomerGroupInclude { return new CustomerGroupInclude(this.include('customer_group'))}
	get geocoder(): GeocoderInclude { return new GeocoderInclude(this.include('geocoder'))}
	get stores(): StoreInclude { return new StoreInclude(this.include('stores'))}
	get price_list_schedulers(): PriceListSchedulerInclude { return new PriceListSchedulerInclude(this.include('price_list_schedulers'))}
	get order_validation_rules(): OrderValidationRuleInclude { return new OrderValidationRuleInclude(this.include('order_validation_rules'))} // polymorphic
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class MerchantInclude extends ResourceInclude {
	get address(): AddressInclude { return new AddressInclude(this.include('address'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class NotificationInclude extends ResourceInclude {
}


class OrderInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get shipping_address(): AddressInclude { return new AddressInclude(this.include('shipping_address'))}
	get billing_address(): AddressInclude { return new AddressInclude(this.include('billing_address'))}
	get store(): StoreInclude { return new StoreInclude(this.include('store'))}
	get available_payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('available_payment_methods'))}
	get available_customer_payment_sources(): CustomerPaymentSourceInclude { return new CustomerPaymentSourceInclude(this.include('available_customer_payment_sources'))}
	get available_free_skus(): SkuInclude { return new SkuInclude(this.include('available_free_skus'))}
	get available_free_bundles(): BundleInclude { return new BundleInclude(this.include('available_free_bundles'))}
	get payment_method(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_method'))}
	get discount_engine_item(): DiscountEngineItemInclude { return new DiscountEngineItemInclude(this.include('discount_engine_item'))}
	get line_items(): LineItemInclude { return new LineItemInclude(this.include('line_items'))}
	get line_item_options(): LineItemOptionInclude { return new LineItemOptionInclude(this.include('line_item_options'))}
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservations'))}
	get stock_line_items(): StockLineItemInclude { return new StockLineItemInclude(this.include('stock_line_items'))}
	get stock_transfers(): StockTransferInclude { return new StockTransferInclude(this.include('stock_transfers'))}
	get shipments(): ShipmentInclude { return new ShipmentInclude(this.include('shipments'))}
	get payment_options(): PaymentOptionInclude { return new PaymentOptionInclude(this.include('payment_options'))}
	get transactions(): TransactionInclude { return new TransactionInclude(this.include('transactions'))} // polymorphic
	get authorizations(): AuthorizationInclude { return new AuthorizationInclude(this.include('authorizations'))}
	get captures(): CaptureInclude { return new CaptureInclude(this.include('captures'))}
	get voids(): VoidInclude { return new VoidInclude(this.include('voids'))}
	get refunds(): RefundInclude { return new RefundInclude(this.include('refunds'))}
	get returns(): ReturnInclude { return new ReturnInclude(this.include('returns'))}
	get order_subscription(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscription'))}
	get order_subscriptions(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscriptions'))}
	get order_factories(): OrderFactoryInclude { return new OrderFactoryInclude(this.include('order_factories'))}
	get order_copies(): OrderCopyInclude { return new OrderCopyInclude(this.include('order_copies'))}
	get recurring_order_copies(): RecurringOrderCopyInclude { return new RecurringOrderCopyInclude(this.include('recurring_order_copies'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get notifications(): NotificationInclude { return new NotificationInclude(this.include('notifications'))}
	get links(): LinkInclude { return new LinkInclude(this.include('links'))}
	get resource_errors(): ResourceErrorInclude { return new ResourceErrorInclude(this.include('resource_errors'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class OrderAmountPromotionRuleInclude extends ResourceInclude {
	get promotion(): PromotionInclude { return new PromotionInclude(this.include('promotion'))} // polymorphic
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class OrderCopyInclude extends ResourceInclude {
	get source_order(): OrderInclude { return new OrderInclude(this.include('source_order'))}
	get target_order(): OrderInclude { return new OrderInclude(this.include('target_order'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get order_subscription(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscription'))}
}


class OrderFactoryInclude extends ResourceInclude {
	get source_order(): OrderInclude { return new OrderInclude(this.include('source_order'))}
	get target_order(): OrderInclude { return new OrderInclude(this.include('target_order'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class OrderSubscriptionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get subscription_model(): SubscriptionModelInclude { return new SubscriptionModelInclude(this.include('subscription_model'))}
	get source_order(): OrderInclude { return new OrderInclude(this.include('source_order'))}
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get customer_payment_source(): CustomerPaymentSourceInclude { return new CustomerPaymentSourceInclude(this.include('customer_payment_source'))}
	get order_subscription_items(): OrderSubscriptionItemInclude { return new OrderSubscriptionItemInclude(this.include('order_subscription_items'))}
	get order_factories(): OrderFactoryInclude { return new OrderFactoryInclude(this.include('order_factories'))}
	get order_copies(): OrderCopyInclude { return new OrderCopyInclude(this.include('order_copies'))}
	get recurring_order_copies(): RecurringOrderCopyInclude { return new RecurringOrderCopyInclude(this.include('recurring_order_copies'))}
	get orders(): OrderInclude { return new OrderInclude(this.include('orders'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class OrderSubscriptionItemInclude extends ResourceInclude {
	get order_subscription(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscription'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))} // polymorphic
	get bundle(): BundleInclude { return new BundleInclude(this.include('bundle'))} // polymorphic
	get adjustment(): AdjustmentInclude { return new AdjustmentInclude(this.include('adjustment'))} // polymorphic
	get source_line_item(): LineItemInclude { return new LineItemInclude(this.include('source_line_item'))}
}


class OrderValidationRuleInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class OrganizationInclude extends ResourceInclude {
}


class PackageInclude extends ResourceInclude {
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get parcels(): ParcelInclude { return new ParcelInclude(this.include('parcels'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ParcelInclude extends ResourceInclude {
	get shipment(): ShipmentInclude { return new ShipmentInclude(this.include('shipment'))}
	get package(): PackageInclude { return new PackageInclude(this.include('package'))}
	get parcel_line_items(): ParcelLineItemInclude { return new ParcelLineItemInclude(this.include('parcel_line_items'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ParcelLineItemInclude extends ResourceInclude {
	get parcel(): ParcelInclude { return new ParcelInclude(this.include('parcel'))}
	get stock_line_item(): StockLineItemInclude { return new StockLineItemInclude(this.include('stock_line_item'))}
	get shipment_line_item(): ShipmentLineItemInclude { return new ShipmentLineItemInclude(this.include('shipment_line_item'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PaymentGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PaymentMethodInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get store(): StoreInclude { return new StoreInclude(this.include('store'))}
	get orders(): OrderInclude { return new OrderInclude(this.include('orders'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PaymentOptionInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
}


class PaypalGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get paypal_payments(): PaypalPaymentInclude { return new PaypalPaymentInclude(this.include('paypal_payments'))}
}


class PaypalPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PercentageDiscountPromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class PriceInclude extends ResourceInclude {
	get price_list(): PriceListInclude { return new PriceListInclude(this.include('price_list'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get price_tiers(): PriceTierInclude { return new PriceTierInclude(this.include('price_tiers'))}
	get price_volume_tiers(): PriceVolumeTierInclude { return new PriceVolumeTierInclude(this.include('price_volume_tiers'))}
	get price_frequency_tiers(): PriceFrequencyTierInclude { return new PriceFrequencyTierInclude(this.include('price_frequency_tiers'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get jwt_customer(): CustomerInclude { return new CustomerInclude(this.include('jwt_customer'))}
	get jwt_markets(): MarketInclude { return new MarketInclude(this.include('jwt_markets'))}
	get jwt_stock_locations(): StockLocationInclude { return new StockLocationInclude(this.include('jwt_stock_locations'))}
}


class PriceFrequencyTierInclude extends ResourceInclude {
	get price(): PriceInclude { return new PriceInclude(this.include('price'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class PriceListInclude extends ResourceInclude {
	get prices(): PriceInclude { return new PriceInclude(this.include('prices'))}
	get price_list_schedulers(): PriceListSchedulerInclude { return new PriceListSchedulerInclude(this.include('price_list_schedulers'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PriceListSchedulerInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get price_list(): PriceListInclude { return new PriceListInclude(this.include('price_list'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PriceTierInclude extends ResourceInclude {
	get price(): PriceInclude { return new PriceInclude(this.include('price'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PriceVolumeTierInclude extends ResourceInclude {
	get price(): PriceInclude { return new PriceInclude(this.include('price'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
}


class PromotionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude(this.include('promotion_rules'))} // polymorphic
	get order_amount_promotion_rule(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude(this.include('order_amount_promotion_rule'))}
	get sku_list_promotion_rule(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude(this.include('sku_list_promotion_rule'))}
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude(this.include('coupon_codes_promotion_rule'))}
	get custom_promotion_rule(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude(this.include('custom_promotion_rule'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get coupons(): CouponInclude { return new CouponInclude(this.include('coupons'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class PromotionRuleInclude extends ResourceInclude {
	get promotion(): PromotionInclude { return new PromotionInclude(this.include('promotion'))} // polymorphic
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class RecurringOrderCopyInclude extends ResourceInclude {
	get source_order(): OrderInclude { return new OrderInclude(this.include('source_order'))}
	get target_order(): OrderInclude { return new OrderInclude(this.include('target_order'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get order_subscription(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscription'))}
}


class RefundInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get reference_capture(): CaptureInclude { return new CaptureInclude(this.include('reference_capture'))}
	get return(): ReturnInclude { return new ReturnInclude(this.include('return'))}
}


class ReservedStockInclude extends ResourceInclude {
	get stock_item(): StockItemInclude { return new StockItemInclude(this.include('stock_item'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservations'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ResourceErrorInclude extends ResourceInclude {
}


class ReturnInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get origin_address(): AddressInclude { return new AddressInclude(this.include('origin_address'))}
	get destination_address(): AddressInclude { return new AddressInclude(this.include('destination_address'))}
	get reference_capture(): CaptureInclude { return new CaptureInclude(this.include('reference_capture'))}
	get reference_refund(): RefundInclude { return new RefundInclude(this.include('reference_refund'))}
	get return_line_items(): ReturnLineItemInclude { return new ReturnLineItemInclude(this.include('return_line_items'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get resource_errors(): ResourceErrorInclude { return new ResourceErrorInclude(this.include('resource_errors'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ReturnLineItemInclude extends ResourceInclude {
	get return(): ReturnInclude { return new ReturnInclude(this.include('return'))}
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
}


class SatispayGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get satispay_payments(): SatispayPaymentInclude { return new SatispayPaymentInclude(this.include('satispay_payments'))}
}


class SatispayPaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShipmentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get shipping_category(): ShippingCategoryInclude { return new ShippingCategoryInclude(this.include('shipping_category'))}
	get inventory_stock_location(): InventoryStockLocationInclude { return new InventoryStockLocationInclude(this.include('inventory_stock_location'))}
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get origin_address(): AddressInclude { return new AddressInclude(this.include('origin_address'))}
	get shipping_address(): AddressInclude { return new AddressInclude(this.include('shipping_address'))}
	get shipping_method(): ShippingMethodInclude { return new ShippingMethodInclude(this.include('shipping_method'))}
	get delivery_lead_time(): DeliveryLeadTimeInclude { return new DeliveryLeadTimeInclude(this.include('delivery_lead_time'))}
	get shipment_line_items(): ShipmentLineItemInclude { return new ShipmentLineItemInclude(this.include('shipment_line_items'))}
	get stock_line_items(): StockLineItemInclude { return new StockLineItemInclude(this.include('stock_line_items'))}
	get stock_transfers(): StockTransferInclude { return new StockTransferInclude(this.include('stock_transfers'))}
	get line_items(): LineItemInclude { return new LineItemInclude(this.include('line_items'))}
	get available_shipping_methods(): ShippingMethodInclude { return new ShippingMethodInclude(this.include('available_shipping_methods'))}
	get carrier_accounts(): CarrierAccountInclude { return new CarrierAccountInclude(this.include('carrier_accounts'))}
	get parcels(): ParcelInclude { return new ParcelInclude(this.include('parcels'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShipmentLineItemInclude extends ResourceInclude {
	get shipment(): ShipmentInclude { return new ShipmentInclude(this.include('shipment'))}
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
	get stock_item(): StockItemInclude { return new StockItemInclude(this.include('stock_item'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get stock_reservation(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservation'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShippingCategoryInclude extends ResourceInclude {
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShippingMethodInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get shipping_zone(): ShippingZoneInclude { return new ShippingZoneInclude(this.include('shipping_zone'))}
	get shipping_category(): ShippingCategoryInclude { return new ShippingCategoryInclude(this.include('shipping_category'))}
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get delivery_lead_time_for_shipment(): DeliveryLeadTimeInclude { return new DeliveryLeadTimeInclude(this.include('delivery_lead_time_for_shipment'))}
	get shipping_method_tiers(): ShippingMethodTierInclude { return new ShippingMethodTierInclude(this.include('shipping_method_tiers'))}
	get shipping_weight_tiers(): ShippingWeightTierInclude { return new ShippingWeightTierInclude(this.include('shipping_weight_tiers'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShippingMethodTierInclude extends ResourceInclude {
	get shipping_method(): ShippingMethodInclude { return new ShippingMethodInclude(this.include('shipping_method'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShippingWeightTierInclude extends ResourceInclude {
	get shipping_method(): ShippingMethodInclude { return new ShippingMethodInclude(this.include('shipping_method'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class ShippingZoneInclude extends ResourceInclude {
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class SkuInclude extends ResourceInclude {
	get shipping_category(): ShippingCategoryInclude { return new ShippingCategoryInclude(this.include('shipping_category'))}
	get prices(): PriceInclude { return new PriceInclude(this.include('prices'))}
	get stock_items(): StockItemInclude { return new StockItemInclude(this.include('stock_items'))}
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservations'))}
	get delivery_lead_times(): DeliveryLeadTimeInclude { return new DeliveryLeadTimeInclude(this.include('delivery_lead_times'))}
	get sku_options(): SkuOptionInclude { return new SkuOptionInclude(this.include('sku_options'))}
	get sku_list_items(): SkuListItemInclude { return new SkuListItemInclude(this.include('sku_list_items'))}
	get sku_lists(): SkuListInclude { return new SkuListInclude(this.include('sku_lists'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get links(): LinkInclude { return new LinkInclude(this.include('links'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get jwt_customer(): CustomerInclude { return new CustomerInclude(this.include('jwt_customer'))}
	get jwt_markets(): MarketInclude { return new MarketInclude(this.include('jwt_markets'))}
	get jwt_stock_locations(): StockLocationInclude { return new StockLocationInclude(this.include('jwt_stock_locations'))}
}


class SkuListInclude extends ResourceInclude {
	get customer(): CustomerInclude { return new CustomerInclude(this.include('customer'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
	get sku_list_items(): SkuListItemInclude { return new SkuListItemInclude(this.include('sku_list_items'))}
	get bundles(): BundleInclude { return new BundleInclude(this.include('bundles'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get links(): LinkInclude { return new LinkInclude(this.include('links'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class SkuListItemInclude extends ResourceInclude {
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class SkuListPromotionRuleInclude extends ResourceInclude {
	get promotion(): PromotionInclude { return new PromotionInclude(this.include('promotion'))} // polymorphic
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get sku_list(): SkuListInclude { return new SkuListInclude(this.include('sku_list'))}
	get skus(): SkuInclude { return new SkuInclude(this.include('skus'))}
}


class SkuOptionInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get tags(): TagInclude { return new TagInclude(this.include('tags'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class SpreedlyGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StockItemInclude extends ResourceInclude {
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get reserved_stock(): ReservedStockInclude { return new ReservedStockInclude(this.include('reserved_stock'))}
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservations'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StockLineItemInclude extends ResourceInclude {
	get shipment(): ShipmentInclude { return new ShipmentInclude(this.include('shipment'))}
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
	get stock_item(): StockItemInclude { return new StockItemInclude(this.include('stock_item'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get stock_reservation(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservation'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StockLocationInclude extends ResourceInclude {
	get address(): AddressInclude { return new AddressInclude(this.include('address'))}
	get inventory_stock_locations(): InventoryStockLocationInclude { return new InventoryStockLocationInclude(this.include('inventory_stock_locations'))}
	get inventory_return_locations(): InventoryReturnLocationInclude { return new InventoryReturnLocationInclude(this.include('inventory_return_locations'))}
	get stock_items(): StockItemInclude { return new StockItemInclude(this.include('stock_items'))}
	get stock_transfers(): StockTransferInclude { return new StockTransferInclude(this.include('stock_transfers'))}
	get stores(): StoreInclude { return new StoreInclude(this.include('stores'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StockReservationInclude extends ResourceInclude {
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get stock_line_item(): StockLineItemInclude { return new StockLineItemInclude(this.include('stock_line_item'))}
	get stock_transfer(): StockTransferInclude { return new StockTransferInclude(this.include('stock_transfer'))}
	get stock_item(): StockItemInclude { return new StockItemInclude(this.include('stock_item'))}
	get reserved_stock(): ReservedStockInclude { return new ReservedStockInclude(this.include('reserved_stock'))}
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
}


class StockTransferInclude extends ResourceInclude {
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get origin_stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('origin_stock_location'))}
	get destination_stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('destination_stock_location'))}
	get shipment(): ShipmentInclude { return new ShipmentInclude(this.include('shipment'))}
	get line_item(): LineItemInclude { return new LineItemInclude(this.include('line_item'))}
	get stock_reservation(): StockReservationInclude { return new StockReservationInclude(this.include('stock_reservation'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StoreInclude extends ResourceInclude {
	get market(): MarketInclude { return new MarketInclude(this.include('market'))}
	get merchant(): MerchantInclude { return new MerchantInclude(this.include('merchant'))}
	get stock_location(): StockLocationInclude { return new StockLocationInclude(this.include('stock_location'))}
	get orders(): OrderInclude { return new OrderInclude(this.include('orders'))}
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class StripeGatewayInclude extends ResourceInclude {
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude(this.include('payment_methods'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get stripe_payments(): StripePaymentInclude { return new StripePaymentInclude(this.include('stripe_payments'))}
}


class StripePaymentInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get payment_gateway(): PaymentGatewayInclude { return new PaymentGatewayInclude(this.include('payment_gateway'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class SubscriptionModelInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get order_subscriptions(): OrderSubscriptionInclude { return new OrderSubscriptionInclude(this.include('order_subscriptions'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
}


class TagInclude extends ResourceInclude {
}


class TalonOneAccountInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get discount_engine_items(): DiscountEngineItemInclude { return new DiscountEngineItemInclude(this.include('discount_engine_items'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class TaxCalculatorInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class TaxCategoryInclude extends ResourceInclude {
	get sku(): SkuInclude { return new SkuInclude(this.include('sku'))}
	get tax_calculator(): TaxCalculatorInclude { return new TaxCalculatorInclude(this.include('tax_calculator'))} // polymorphic
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class TaxRuleInclude extends ResourceInclude {
	get manual_tax_calculator(): ManualTaxCalculatorInclude { return new ManualTaxCalculatorInclude(this.include('manual_tax_calculator'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class TaxjarAccountInclude extends ResourceInclude {
	get markets(): MarketInclude { return new MarketInclude(this.include('markets'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get tax_categories(): TaxCategoryInclude { return new TaxCategoryInclude(this.include('tax_categories'))}
}


class TransactionInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class VersionInclude extends ResourceInclude {
}


class VoidInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get attachments(): AttachmentInclude { return new AttachmentInclude(this.include('attachments'))}
	get events(): EventInclude { return new EventInclude(this.include('events'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
	get reference_authorization(): AuthorizationInclude { return new AuthorizationInclude(this.include('reference_authorization'))}
}


class WebhookInclude extends ResourceInclude {
	get last_event_callbacks(): EventCallbackInclude { return new EventCallbackInclude(this.include('last_event_callbacks'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}


class WireTransferInclude extends ResourceInclude {
	get order(): OrderInclude { return new OrderInclude(this.include('order'))}
	get versions(): VersionInclude { return new VersionInclude(this.include('versions'))}
}



export class IncludeHelper {
	get addresses(): AddressInclude { return new AddressInclude() }
	get adjustments(): AdjustmentInclude { return new AdjustmentInclude() }
	get adyen_gateways(): AdyenGatewayInclude { return new AdyenGatewayInclude() }
	get adyen_payments(): AdyenPaymentInclude { return new AdyenPaymentInclude() }
	get applications(): ApplicationInclude { return new ApplicationInclude() }
	get attachments(): AttachmentInclude { return new AttachmentInclude() }
	get authorizations(): AuthorizationInclude { return new AuthorizationInclude() }
	get avalara_accounts(): AvalaraAccountInclude { return new AvalaraAccountInclude() }
	get axerve_gateways(): AxerveGatewayInclude { return new AxerveGatewayInclude() }
	get axerve_payments(): AxervePaymentInclude { return new AxervePaymentInclude() }
	get billing_info_validation_rules(): BillingInfoValidationRuleInclude { return new BillingInfoValidationRuleInclude() }
	get bing_geocoders(): BingGeocoderInclude { return new BingGeocoderInclude() }
	get braintree_gateways(): BraintreeGatewayInclude { return new BraintreeGatewayInclude() }
	get braintree_payments(): BraintreePaymentInclude { return new BraintreePaymentInclude() }
	get bundles(): BundleInclude { return new BundleInclude() }
	get buy_x_pay_y_promotions(): BuyXPayYPromotionInclude { return new BuyXPayYPromotionInclude() }
	get captures(): CaptureInclude { return new CaptureInclude() }
	get carrier_accounts(): CarrierAccountInclude { return new CarrierAccountInclude() }
	get checkout_com_gateways(): CheckoutComGatewayInclude { return new CheckoutComGatewayInclude() }
	get checkout_com_payments(): CheckoutComPaymentInclude { return new CheckoutComPaymentInclude() }
	get cleanups(): CleanupInclude { return new CleanupInclude() }
	get coupons(): CouponInclude { return new CouponInclude() }
	get coupon_codes_promotion_rules(): CouponCodesPromotionRuleInclude { return new CouponCodesPromotionRuleInclude() }
	get coupon_recipients(): CouponRecipientInclude { return new CouponRecipientInclude() }
	get credit_cards(): CreditCardInclude { return new CreditCardInclude() }
	get custom_promotion_rules(): CustomPromotionRuleInclude { return new CustomPromotionRuleInclude() }
	get customers(): CustomerInclude { return new CustomerInclude() }
	get customer_addresses(): CustomerAddressInclude { return new CustomerAddressInclude() }
	get customer_groups(): CustomerGroupInclude { return new CustomerGroupInclude() }
	get customer_password_resets(): CustomerPasswordResetInclude { return new CustomerPasswordResetInclude() }
	get customer_payment_sources(): CustomerPaymentSourceInclude { return new CustomerPaymentSourceInclude() }
	get customer_subscriptions(): CustomerSubscriptionInclude { return new CustomerSubscriptionInclude() }
	get delivery_lead_times(): DeliveryLeadTimeInclude { return new DeliveryLeadTimeInclude() }
	get discount_engines(): DiscountEngineInclude { return new DiscountEngineInclude() }
	get discount_engine_items(): DiscountEngineItemInclude { return new DiscountEngineItemInclude() }
	get events(): EventInclude { return new EventInclude() }
	get event_callbacks(): EventCallbackInclude { return new EventCallbackInclude() }
	get exports(): ExportInclude { return new ExportInclude() }
	get external_gateways(): ExternalGatewayInclude { return new ExternalGatewayInclude() }
	get external_payments(): ExternalPaymentInclude { return new ExternalPaymentInclude() }
	get external_promotions(): ExternalPromotionInclude { return new ExternalPromotionInclude() }
	get external_tax_calculators(): ExternalTaxCalculatorInclude { return new ExternalTaxCalculatorInclude() }
	get fixed_amount_promotions(): FixedAmountPromotionInclude { return new FixedAmountPromotionInclude() }
	get fixed_price_promotions(): FixedPricePromotionInclude { return new FixedPricePromotionInclude() }
	get flex_promotions(): FlexPromotionInclude { return new FlexPromotionInclude() }
	get free_gift_promotions(): FreeGiftPromotionInclude { return new FreeGiftPromotionInclude() }
	get free_shipping_promotions(): FreeShippingPromotionInclude { return new FreeShippingPromotionInclude() }
	get geocoders(): GeocoderInclude { return new GeocoderInclude() }
	get gift_cards(): GiftCardInclude { return new GiftCardInclude() }
	get gift_card_recipients(): GiftCardRecipientInclude { return new GiftCardRecipientInclude() }
	get google_geocoders(): GoogleGeocoderInclude { return new GoogleGeocoderInclude() }
	get imports(): ImportInclude { return new ImportInclude() }
	get in_stock_subscriptions(): InStockSubscriptionInclude { return new InStockSubscriptionInclude() }
	get inventory_models(): InventoryModelInclude { return new InventoryModelInclude() }
	get inventory_return_locations(): InventoryReturnLocationInclude { return new InventoryReturnLocationInclude() }
	get inventory_stock_locations(): InventoryStockLocationInclude { return new InventoryStockLocationInclude() }
	get klarna_gateways(): KlarnaGatewayInclude { return new KlarnaGatewayInclude() }
	get klarna_payments(): KlarnaPaymentInclude { return new KlarnaPaymentInclude() }
	get line_items(): LineItemInclude { return new LineItemInclude() }
	get line_item_options(): LineItemOptionInclude { return new LineItemOptionInclude() }
	get links(): LinkInclude { return new LinkInclude() }
	get manual_gateways(): ManualGatewayInclude { return new ManualGatewayInclude() }
	get manual_tax_calculators(): ManualTaxCalculatorInclude { return new ManualTaxCalculatorInclude() }
	get markets(): MarketInclude { return new MarketInclude() }
	get merchants(): MerchantInclude { return new MerchantInclude() }
	get notifications(): NotificationInclude { return new NotificationInclude() }
	get orders(): OrderInclude { return new OrderInclude() }
	get order_amount_promotion_rules(): OrderAmountPromotionRuleInclude { return new OrderAmountPromotionRuleInclude() }
	get order_copies(): OrderCopyInclude { return new OrderCopyInclude() }
	get order_factories(): OrderFactoryInclude { return new OrderFactoryInclude() }
	get order_subscriptions(): OrderSubscriptionInclude { return new OrderSubscriptionInclude() }
	get order_subscription_items(): OrderSubscriptionItemInclude { return new OrderSubscriptionItemInclude() }
	get order_validation_rules(): OrderValidationRuleInclude { return new OrderValidationRuleInclude() }
	get organizations(): OrganizationInclude { return new OrganizationInclude() }
	get packages(): PackageInclude { return new PackageInclude() }
	get parcels(): ParcelInclude { return new ParcelInclude() }
	get parcel_line_items(): ParcelLineItemInclude { return new ParcelLineItemInclude() }
	get payment_gateways(): PaymentGatewayInclude { return new PaymentGatewayInclude() }
	get payment_methods(): PaymentMethodInclude { return new PaymentMethodInclude() }
	get payment_options(): PaymentOptionInclude { return new PaymentOptionInclude() }
	get paypal_gateways(): PaypalGatewayInclude { return new PaypalGatewayInclude() }
	get paypal_payments(): PaypalPaymentInclude { return new PaypalPaymentInclude() }
	get percentage_discount_promotions(): PercentageDiscountPromotionInclude { return new PercentageDiscountPromotionInclude() }
	get prices(): PriceInclude { return new PriceInclude() }
	get price_frequency_tiers(): PriceFrequencyTierInclude { return new PriceFrequencyTierInclude() }
	get price_lists(): PriceListInclude { return new PriceListInclude() }
	get price_list_schedulers(): PriceListSchedulerInclude { return new PriceListSchedulerInclude() }
	get price_tiers(): PriceTierInclude { return new PriceTierInclude() }
	get price_volume_tiers(): PriceVolumeTierInclude { return new PriceVolumeTierInclude() }
	get promotions(): PromotionInclude { return new PromotionInclude() }
	get promotion_rules(): PromotionRuleInclude { return new PromotionRuleInclude() }
	get recurring_order_copies(): RecurringOrderCopyInclude { return new RecurringOrderCopyInclude() }
	get refunds(): RefundInclude { return new RefundInclude() }
	get reserved_stocks(): ReservedStockInclude { return new ReservedStockInclude() }
	get resource_errors(): ResourceErrorInclude { return new ResourceErrorInclude() }
	get returns(): ReturnInclude { return new ReturnInclude() }
	get return_line_items(): ReturnLineItemInclude { return new ReturnLineItemInclude() }
	get satispay_gateways(): SatispayGatewayInclude { return new SatispayGatewayInclude() }
	get satispay_payments(): SatispayPaymentInclude { return new SatispayPaymentInclude() }
	get shipments(): ShipmentInclude { return new ShipmentInclude() }
	get shipment_line_items(): ShipmentLineItemInclude { return new ShipmentLineItemInclude() }
	get shipping_categories(): ShippingCategoryInclude { return new ShippingCategoryInclude() }
	get shipping_methods(): ShippingMethodInclude { return new ShippingMethodInclude() }
	get shipping_method_tiers(): ShippingMethodTierInclude { return new ShippingMethodTierInclude() }
	get shipping_weight_tiers(): ShippingWeightTierInclude { return new ShippingWeightTierInclude() }
	get shipping_zones(): ShippingZoneInclude { return new ShippingZoneInclude() }
	get skus(): SkuInclude { return new SkuInclude() }
	get sku_lists(): SkuListInclude { return new SkuListInclude() }
	get sku_list_items(): SkuListItemInclude { return new SkuListItemInclude() }
	get sku_list_promotion_rules(): SkuListPromotionRuleInclude { return new SkuListPromotionRuleInclude() }
	get sku_options(): SkuOptionInclude { return new SkuOptionInclude() }
	get spreedly_gateways(): SpreedlyGatewayInclude { return new SpreedlyGatewayInclude() }
	get stock_items(): StockItemInclude { return new StockItemInclude() }
	get stock_line_items(): StockLineItemInclude { return new StockLineItemInclude() }
	get stock_locations(): StockLocationInclude { return new StockLocationInclude() }
	get stock_reservations(): StockReservationInclude { return new StockReservationInclude() }
	get stock_transfers(): StockTransferInclude { return new StockTransferInclude() }
	get stores(): StoreInclude { return new StoreInclude() }
	get stripe_gateways(): StripeGatewayInclude { return new StripeGatewayInclude() }
	get stripe_payments(): StripePaymentInclude { return new StripePaymentInclude() }
	get subscription_models(): SubscriptionModelInclude { return new SubscriptionModelInclude() }
	get tags(): TagInclude { return new TagInclude() }
	get talon_one_accounts(): TalonOneAccountInclude { return new TalonOneAccountInclude() }
	get tax_calculators(): TaxCalculatorInclude { return new TaxCalculatorInclude() }
	get tax_categories(): TaxCategoryInclude { return new TaxCategoryInclude() }
	get tax_rules(): TaxRuleInclude { return new TaxRuleInclude() }
	get taxjar_accounts(): TaxjarAccountInclude { return new TaxjarAccountInclude() }
	get transactions(): TransactionInclude { return new TransactionInclude() }
	get versions(): VersionInclude { return new VersionInclude() }
	get voids(): VoidInclude { return new VoidInclude() }
	get webhooks(): WebhookInclude { return new WebhookInclude() }
	get wire_transfers(): WireTransferInclude { return new WireTransferInclude() }
}
