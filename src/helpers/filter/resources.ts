
import type * as Types from './base'
import { ResourceFilterFields } from './base'



class AddressFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get business(): Types.FilterOperator<M> { return this.addField('business') }
	get first_name(): Types.FilterOperator<M> { return this.addField('first_name') }
	get last_name(): Types.FilterOperator<M> { return this.addField('last_name') }
	get company(): Types.FilterOperator<M> { return this.addField('company') }
	get line_1(): Types.FilterOperator<M> { return this.addField('line_1') }
	get line_2(): Types.FilterOperator<M> { return this.addField('line_2') }
	get city(): Types.FilterOperator<M> { return this.addField('city') }
	get zip_code(): Types.FilterOperator<M> { return this.addField('zip_code') }
	get state_code(): Types.FilterOperator<M> { return this.addField('state_code') }
	get country_code(): Types.FilterOperator<M> { return this.addField('country_code') }
	get phone(): Types.FilterOperator<M> { return this.addField('phone') }
	get email(): Types.FilterOperator<M> { return this.addField('email') }
	get notes(): Types.FilterOperator<M> { return this.addField('notes') }
	get lat(): Types.FilterOperator<M> { return this.addField('lat') }
	get lng(): Types.FilterOperator<M> { return this.addField('lng') }
	get billing_info(): Types.FilterOperator<M> { return this.addField('billing_info') }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type AddressFilter = AddressFilterFields<AddressFilter>


class AdjustmentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
}

export type AdjustmentFilter = AdjustmentFilterFields<AdjustmentFilter>


class AdyenGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get adyen_payments(): AdyenPaymentFilterFields<M> { return new AdyenPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('adyen_payments')) }
}

export type AdyenGatewayFilter = AdyenGatewayFilterFields<AdyenGatewayFilter>


class AdyenPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type AdyenPaymentFilter = AdyenPaymentFilterFields<AdyenPaymentFilter>


class AttachmentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get description(): Types.FilterOperator<M> { return this.addField('description') }
}

export type AttachmentFilter = AttachmentFilterFields<AttachmentFilter>


class AuthorizationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get succeeded(): Types.FilterOperator<M> { return this.addField('succeeded') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get error_code(): Types.FilterOperator<M> { return this.addField('error_code') }
	get error_detail(): Types.FilterOperator<M> { return this.addField('error_detail') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get gateway_transaction_id(): Types.FilterOperator<M> { return this.addField('gateway_transaction_id') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type AuthorizationFilter = AuthorizationFilterFields<AuthorizationFilter>


class AvalaraAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tax_categories(): TaxCategoryFilterFields<M> { return new TaxCategoryFilterFields<M>(this.master, this.operator, this.addRelationship('tax_categories')) }
}

export type AvalaraAccountFilter = AvalaraAccountFilterFields<AvalaraAccountFilter>


class AxerveGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get axerve_payments(): AxervePaymentFilterFields<M> { return new AxervePaymentFilterFields<M>(this.master, this.operator, this.addRelationship('axerve_payments')) }
}

export type AxerveGatewayFilter = AxerveGatewayFilterFields<AxerveGatewayFilter>


class AxervePaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type AxervePaymentFilter = AxervePaymentFilterFields<AxervePaymentFilter>


class BillingInfoValidationRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type BillingInfoValidationRuleFilter = BillingInfoValidationRuleFilterFields<BillingInfoValidationRuleFilter>


class BingGeocoderFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type BingGeocoderFilter = BingGeocoderFilterFields<BingGeocoderFilter>


class BraintreeGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get braintree_payments(): BraintreePaymentFilterFields<M> { return new BraintreePaymentFilterFields<M>(this.master, this.operator, this.addRelationship('braintree_payments')) }
}

export type BraintreeGatewayFilter = BraintreeGatewayFilterFields<BraintreeGatewayFilter>


class BraintreePaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type BraintreePaymentFilter = BraintreePaymentFilterFields<BraintreePaymentFilter>


class BundleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get description(): Types.FilterOperator<M> { return this.addField('description') }
	get image_url(): Types.FilterOperator<M> { return this.addField('image_url') }
	get do_not_ship(): Types.FilterOperator<M> { return this.addField('do_not_ship') }
	get do_not_track(): Types.FilterOperator<M> { return this.addField('do_not_track') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get compare_at_amount_cents(): Types.FilterOperator<M> { return this.addField('compare_at_amount_cents') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type BundleFilter = BundleFilterFields<BundleFilter>


class BuyXPayYPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get x(): Types.FilterOperator<M> { return this.addField('x') }
	get y(): Types.FilterOperator<M> { return this.addField('y') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type BuyXPayYPromotionFilter = BuyXPayYPromotionFilterFields<BuyXPayYPromotionFilter>


class CaptureFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get succeeded(): Types.FilterOperator<M> { return this.addField('succeeded') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get error_code(): Types.FilterOperator<M> { return this.addField('error_code') }
	get error_detail(): Types.FilterOperator<M> { return this.addField('error_detail') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get gateway_transaction_id(): Types.FilterOperator<M> { return this.addField('gateway_transaction_id') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get return(): ReturnFilterFields<M> { return new ReturnFilterFields<M>(this.master, this.operator, this.addRelationship('return')) }
}

export type CaptureFilter = CaptureFilterFields<CaptureFilter>


class CarrierAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get easypost_type(): Types.FilterOperator<M> { return this.addField('easypost_type') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type CarrierAccountFilter = CarrierAccountFilterFields<CarrierAccountFilter>


class CheckoutComGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get checkout_com_payments(): CheckoutComPaymentFilterFields<M> { return new CheckoutComPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('checkout_com_payments')) }
}

export type CheckoutComGatewayFilter = CheckoutComGatewayFilterFields<CheckoutComGatewayFilter>


class CheckoutComPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type CheckoutComPaymentFilter = CheckoutComPaymentFilterFields<CheckoutComPaymentFilter>


class CleanupFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get resource_type(): Types.FilterOperator<M> { return this.addField('resource_type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get interrupted_at(): Types.FilterOperator<M> { return this.addField('interrupted_at') }
	get records_count(): Types.FilterOperator<M> { return this.addField('records_count') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get processed_count(): Types.FilterOperator<M> { return this.addField('processed_count') }
	get errors_log(): Types.FilterOperator<M> { return this.addField('errors_log') }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type CleanupFilter = CleanupFilterFields<CleanupFilter>


class CouponFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get customer_single_use(): Types.FilterOperator<M> { return this.addField('customer_single_use') }
	get usage_limit(): Types.FilterOperator<M> { return this.addField('usage_limit') }
	get usage_count(): Types.FilterOperator<M> { return this.addField('usage_count') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rule')) }
	get coupon_recipient(): CouponRecipientFilterFields<M> { return new CouponRecipientFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_recipient')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type CouponFilter = CouponFilterFields<CouponFilter>


class CouponCodesPromotionRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get promotion(): PromotionFilterFields<M> { return new PromotionFilterFields<M>(this.master, this.operator, this.addRelationship('promotion')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
}

export type CouponCodesPromotionRuleFilter = CouponCodesPromotionRuleFilterFields<CouponCodesPromotionRuleFilter>


class CouponRecipientFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get email(): Types.FilterOperator<M> { return this.addField('email') }
	get first_name(): Types.FilterOperator<M> { return this.addField('first_name') }
	get last_name(): Types.FilterOperator<M> { return this.addField('last_name') }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type CouponRecipientFilter = CouponRecipientFilterFields<CouponRecipientFilter>


class CustomPromotionRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get promotion(): PromotionFilterFields<M> { return new PromotionFilterFields<M>(this.master, this.operator, this.addRelationship('promotion')) }
}

export type CustomPromotionRuleFilter = CustomPromotionRuleFilterFields<CustomPromotionRuleFilter>


class CustomerFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get email(): Types.FilterOperator<M> { return this.addField('email') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get total_orders_count(): Types.FilterOperator<M> { return this.addField('total_orders_count') }
	get anonymization_status(): Types.FilterOperator<M> { return this.addField('anonymization_status') }
	get customer_group(): CustomerGroupFilterFields<M> { return new CustomerGroupFilterFields<M>(this.master, this.operator, this.addRelationship('customer_group')) }
	get customer_addresses(): CustomerAddressFilterFields<M> { return new CustomerAddressFilterFields<M>(this.master, this.operator, this.addRelationship('customer_addresses')) }
	get customer_payment_sources(): CustomerPaymentSourceFilterFields<M> { return new CustomerPaymentSourceFilterFields<M>(this.master, this.operator, this.addRelationship('customer_payment_sources')) }
	get customer_subscriptions(): CustomerSubscriptionFilterFields<M> { return new CustomerSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('customer_subscriptions')) }
	get order_subscriptions(): OrderSubscriptionFilterFields<M> { return new OrderSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('order_subscriptions')) }
	get returns(): ReturnFilterFields<M> { return new ReturnFilterFields<M>(this.master, this.operator, this.addRelationship('returns')) }
	get sku_lists(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_lists')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type CustomerFilter = CustomerFilterFields<CustomerFilter>


class CustomerAddressFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('address')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type CustomerAddressFilter = CustomerAddressFilterFields<CustomerAddressFilter>


class CustomerGroupFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type CustomerGroupFilter = CustomerGroupFilterFields<CustomerGroupFilter>


class CustomerPasswordResetFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get reset_password_token(): Types.FilterOperator<M> { return this.addField('reset_password_token') }
	get reset_password_at(): Types.FilterOperator<M> { return this.addField('reset_password_at') }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type CustomerPasswordResetFilter = CustomerPasswordResetFilterFields<CustomerPasswordResetFilter>


class CustomerPaymentSourceFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_source_token(): Types.FilterOperator<M> { return this.addField('payment_source_token') }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get payment_method(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_method')) }
}

export type CustomerPaymentSourceFilter = CustomerPaymentSourceFilterFields<CustomerPaymentSourceFilter>


class CustomerSubscriptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type CustomerSubscriptionFilter = CustomerSubscriptionFilterFields<CustomerSubscriptionFilter>


class DeliveryLeadTimeFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get min_hours(): Types.FilterOperator<M> { return this.addField('min_hours') }
	get max_hours(): Types.FilterOperator<M> { return this.addField('max_hours') }
	get min_days(): Types.FilterOperator<M> { return this.addField('min_days') }
	get max_days(): Types.FilterOperator<M> { return this.addField('max_days') }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get shipping_method(): ShippingMethodFilterFields<M> { return new ShippingMethodFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_method')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type DeliveryLeadTimeFilter = DeliveryLeadTimeFilterFields<DeliveryLeadTimeFilter>


class DiscountEngineFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type DiscountEngineFilter = DiscountEngineFilterFields<DiscountEngineFilter>


class DiscountEngineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get body(): Types.FilterOperator<M> { return this.addField('body') }
	get discount_engine(): DiscountEngineFilterFields<M> { return new DiscountEngineFilterFields<M>(this.master, this.operator, this.addRelationship('discount_engine')) }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type DiscountEngineItemFilter = DiscountEngineItemFilterFields<DiscountEngineItemFilter>


class EasypostPickupFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get min_datetime(): Types.FilterOperator<M> { return this.addField('min_datetime') }
	get max_datetime(): Types.FilterOperator<M> { return this.addField('max_datetime') }
	get purchase_started_at(): Types.FilterOperator<M> { return this.addField('purchase_started_at') }
	get purchase_completed_at(): Types.FilterOperator<M> { return this.addField('purchase_completed_at') }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get parcels(): ParcelFilterFields<M> { return new ParcelFilterFields<M>(this.master, this.operator, this.addRelationship('parcels')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type EasypostPickupFilter = EasypostPickupFilterFields<EasypostPickupFilter>


class EventFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
}

export type EventFilter = EventFilterFields<EventFilter>


class EventCallbackFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get callback_url(): Types.FilterOperator<M> { return this.addField('callback_url') }
	get response_code(): Types.FilterOperator<M> { return this.addField('response_code') }
	get response_message(): Types.FilterOperator<M> { return this.addField('response_message') }
	get webhook(): WebhookFilterFields<M> { return new WebhookFilterFields<M>(this.master, this.operator, this.addRelationship('webhook')) }
}

export type EventCallbackFilter = EventCallbackFilterFields<EventCallbackFilter>


class EventStoreFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
}

export type EventStoreFilter = EventStoreFilterFields<EventStoreFilter>


class ExportFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get resource_type(): Types.FilterOperator<M> { return this.addField('resource_type') }
	get format(): Types.FilterOperator<M> { return this.addField('format') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get interrupted_at(): Types.FilterOperator<M> { return this.addField('interrupted_at') }
	get records_count(): Types.FilterOperator<M> { return this.addField('records_count') }
	get attachment_url(): Types.FilterOperator<M> { return this.addField('attachment_url') }
	get errors_log(): Types.FilterOperator<M> { return this.addField('errors_log') }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type ExportFilter = ExportFilterFields<ExportFilter>


class ExternalGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get external_payments(): ExternalPaymentFilterFields<M> { return new ExternalPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('external_payments')) }
}

export type ExternalGatewayFilter = ExternalGatewayFilterFields<ExternalGatewayFilter>


class ExternalPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get payment_source_token(): Types.FilterOperator<M> { return this.addField('payment_source_token') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type ExternalPaymentFilter = ExternalPaymentFilterFields<ExternalPaymentFilter>


class ExternalPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type ExternalPromotionFilter = ExternalPromotionFilterFields<ExternalPromotionFilter>


class ExternalTaxCalculatorFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type ExternalTaxCalculatorFilter = ExternalTaxCalculatorFilterFields<ExternalTaxCalculatorFilter>


class FixedAmountPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type FixedAmountPromotionFilter = FixedAmountPromotionFilterFields<FixedAmountPromotionFilter>


class FixedPricePromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type FixedPricePromotionFilter = FixedPricePromotionFilterFields<FixedPricePromotionFilter>


class FlexPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get rules(): Types.FilterOperator<M> { return this.addField('rules') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type FlexPromotionFilter = FlexPromotionFilterFields<FlexPromotionFilter>


class FreeGiftPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type FreeGiftPromotionFilter = FreeGiftPromotionFilterFields<FreeGiftPromotionFilter>


class FreeShippingPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type FreeShippingPromotionFilter = FreeShippingPromotionFilterFields<FreeShippingPromotionFilter>


class GeocoderFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type GeocoderFilter = GeocoderFilterFields<GeocoderFilter>


class GiftCardFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get balance_cents(): Types.FilterOperator<M> { return this.addField('balance_cents') }
	get balance_max_cents(): Types.FilterOperator<M> { return this.addField('balance_max_cents') }
	get single_use(): Types.FilterOperator<M> { return this.addField('single_use') }
	get rechargeable(): Types.FilterOperator<M> { return this.addField('rechargeable') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get gift_card_recipient(): GiftCardRecipientFilterFields<M> { return new GiftCardRecipientFilterFields<M>(this.master, this.operator, this.addRelationship('gift_card_recipient')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type GiftCardFilter = GiftCardFilterFields<GiftCardFilter>


class GiftCardRecipientFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get email(): Types.FilterOperator<M> { return this.addField('email') }
	get first_name(): Types.FilterOperator<M> { return this.addField('first_name') }
	get last_name(): Types.FilterOperator<M> { return this.addField('last_name') }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type GiftCardRecipientFilter = GiftCardRecipientFilterFields<GiftCardRecipientFilter>


class GoogleGeocoderFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type GoogleGeocoderFilter = GoogleGeocoderFilterFields<GoogleGeocoderFilter>


class ImportFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get resource_type(): Types.FilterOperator<M> { return this.addField('resource_type') }
	get format(): Types.FilterOperator<M> { return this.addField('format') }
	get parent_resource_id(): Types.FilterOperator<M> { return this.addField('parent_resource_id') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get interrupted_at(): Types.FilterOperator<M> { return this.addField('interrupted_at') }
	get inputs_size(): Types.FilterOperator<M> { return this.addField('inputs_size') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get warnings_count(): Types.FilterOperator<M> { return this.addField('warnings_count') }
	get destroyed_count(): Types.FilterOperator<M> { return this.addField('destroyed_count') }
	get processed_count(): Types.FilterOperator<M> { return this.addField('processed_count') }
	get errors_log(): Types.FilterOperator<M> { return this.addField('errors_log') }
	get warnings_log(): Types.FilterOperator<M> { return this.addField('warnings_log') }
	get attachment_url(): Types.FilterOperator<M> { return this.addField('attachment_url') }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type ImportFilter = ImportFilterFields<ImportFilter>


class InStockSubscriptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get stock_threshold(): Types.FilterOperator<M> { return this.addField('stock_threshold') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type InStockSubscriptionFilter = InStockSubscriptionFilterFields<InStockSubscriptionFilter>


class InventoryModelFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get strategy(): Types.FilterOperator<M> { return this.addField('strategy') }
	get stock_locations_cutoff(): Types.FilterOperator<M> { return this.addField('stock_locations_cutoff') }
	get stock_reservation_cutoff(): Types.FilterOperator<M> { return this.addField('stock_reservation_cutoff') }
	get inventory_stock_locations(): InventoryStockLocationFilterFields<M> { return new InventoryStockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_stock_locations')) }
	get inventory_return_locations(): InventoryReturnLocationFilterFields<M> { return new InventoryReturnLocationFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_return_locations')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type InventoryModelFilter = InventoryModelFilterFields<InventoryModelFilter>


class InventoryReturnLocationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get inventory_model(): InventoryModelFilterFields<M> { return new InventoryModelFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_model')) }
}

export type InventoryReturnLocationFilter = InventoryReturnLocationFilterFields<InventoryReturnLocationFilter>


class InventoryStockLocationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get on_hold(): Types.FilterOperator<M> { return this.addField('on_hold') }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get inventory_model(): InventoryModelFilterFields<M> { return new InventoryModelFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_model')) }
}

export type InventoryStockLocationFilter = InventoryStockLocationFilterFields<InventoryStockLocationFilter>


class KlarnaGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get klarna_payments(): KlarnaPaymentFilterFields<M> { return new KlarnaPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('klarna_payments')) }
}

export type KlarnaGatewayFilter = KlarnaGatewayFilterFields<KlarnaGatewayFilter>


class KlarnaPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get mismatched_amounts(): Types.FilterOperator<M> { return this.addField('mismatched_amounts') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type KlarnaPaymentFilter = KlarnaPaymentFilterFields<KlarnaPaymentFilter>


class LineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get sku_code(): Types.FilterOperator<M> { return this.addField('sku_code') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get unit_amount_cents(): Types.FilterOperator<M> { return this.addField('unit_amount_cents') }
	get compare_at_amount_cents(): Types.FilterOperator<M> { return this.addField('compare_at_amount_cents') }
	get options_amount_cents(): Types.FilterOperator<M> { return this.addField('options_amount_cents') }
	get discount_cents(): Types.FilterOperator<M> { return this.addField('discount_cents') }
	get total_amount_cents(): Types.FilterOperator<M> { return this.addField('total_amount_cents') }
	get tax_amount_cents(): Types.FilterOperator<M> { return this.addField('tax_amount_cents') }
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get image_url(): Types.FilterOperator<M> { return this.addField('image_url') }
	get item_type(): Types.FilterOperator<M> { return this.addField('item_type') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get bundle(): BundleFilterFields<M> { return new BundleFilterFields<M>(this.master, this.operator, this.addRelationship('bundle')) }
	get adjustment(): AdjustmentFilterFields<M> { return new AdjustmentFilterFields<M>(this.master, this.operator, this.addRelationship('adjustment')) }
	get gift_card(): GiftCardFilterFields<M> { return new GiftCardFilterFields<M>(this.master, this.operator, this.addRelationship('gift_card')) }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get payment_method(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_method')) }
	get line_item_options(): LineItemOptionFilterFields<M> { return new LineItemOptionFilterFields<M>(this.master, this.operator, this.addRelationship('line_item_options')) }
	get return_line_items(): ReturnLineItemFilterFields<M> { return new ReturnLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('return_line_items')) }
	get stock_reservations(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservations')) }
	get stock_line_items(): StockLineItemFilterFields<M> { return new StockLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_line_items')) }
	get stock_transfers(): StockTransferFilterFields<M> { return new StockTransferFilterFields<M>(this.master, this.operator, this.addRelationship('stock_transfers')) }
	get notifications(): NotificationFilterFields<M> { return new NotificationFilterFields<M>(this.master, this.operator, this.addRelationship('notifications')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type LineItemFilter = LineItemFilterFields<LineItemFilter>


class LineItemOptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get unit_amount_cents(): Types.FilterOperator<M> { return this.addField('unit_amount_cents') }
	get delay_hours(): Types.FilterOperator<M> { return this.addField('delay_hours') }
	get delay_days(): Types.FilterOperator<M> { return this.addField('delay_days') }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
	get sku_option(): SkuOptionFilterFields<M> { return new SkuOptionFilterFields<M>(this.master, this.operator, this.addRelationship('sku_option')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type LineItemOptionFilter = LineItemOptionFilterFields<LineItemOptionFilter>


class LinkFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get client_id(): Types.FilterOperator<M> { return this.addField('client_id') }
	get scope(): Types.FilterOperator<M> { return this.addField('scope') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get item_type(): Types.FilterOperator<M> { return this.addField('item_type') }
	get params(): Types.FilterOperator<M> { return this.addField('params') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type LinkFilter = LinkFilterFields<LinkFilter>


class ManualGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
}

export type ManualGatewayFilter = ManualGatewayFilterFields<ManualGatewayFilter>


class ManualTaxCalculatorFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tax_rules(): TaxRuleFilterFields<M> { return new TaxRuleFilterFields<M>(this.master, this.operator, this.addRelationship('tax_rules')) }
}

export type ManualTaxCalculatorFilter = ManualTaxCalculatorFilterFields<ManualTaxCalculatorFilter>


class MarketFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get merchant(): MerchantFilterFields<M> { return new MerchantFilterFields<M>(this.master, this.operator, this.addRelationship('merchant')) }
	get price_list(): PriceListFilterFields<M> { return new PriceListFilterFields<M>(this.master, this.operator, this.addRelationship('price_list')) }
	get inventory_model(): InventoryModelFilterFields<M> { return new InventoryModelFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_model')) }
	get subscription_model(): SubscriptionModelFilterFields<M> { return new SubscriptionModelFilterFields<M>(this.master, this.operator, this.addRelationship('subscription_model')) }
	get discount_engine(): DiscountEngineFilterFields<M> { return new DiscountEngineFilterFields<M>(this.master, this.operator, this.addRelationship('discount_engine')) }
	get tax_calculator(): TaxCalculatorFilterFields<M> { return new TaxCalculatorFilterFields<M>(this.master, this.operator, this.addRelationship('tax_calculator')) }
	get customer_group(): CustomerGroupFilterFields<M> { return new CustomerGroupFilterFields<M>(this.master, this.operator, this.addRelationship('customer_group')) }
	get geocoder(): GeocoderFilterFields<M> { return new GeocoderFilterFields<M>(this.master, this.operator, this.addRelationship('geocoder')) }
	get default_shipping_method(): ShippingMethodFilterFields<M> { return new ShippingMethodFilterFields<M>(this.master, this.operator, this.addRelationship('default_shipping_method')) }
	get default_payment_method(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('default_payment_method')) }
	get stores(): StoreFilterFields<M> { return new StoreFilterFields<M>(this.master, this.operator, this.addRelationship('stores')) }
	get price_list_schedulers(): PriceListSchedulerFilterFields<M> { return new PriceListSchedulerFilterFields<M>(this.master, this.operator, this.addRelationship('price_list_schedulers')) }
	get order_validation_rules(): OrderValidationRuleFilterFields<M> { return new OrderValidationRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_validation_rules')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type MarketFilter = MarketFilterFields<MarketFilter>


class MerchantFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('address')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type MerchantFilter = MerchantFilterFields<MerchantFilter>


class NotificationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get flash(): Types.FilterOperator<M> { return this.addField('flash') }
}

export type NotificationFilter = NotificationFilterFields<NotificationFilter>


class OrderFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get affiliate_code(): Types.FilterOperator<M> { return this.addField('affiliate_code') }
	get place_async(): Types.FilterOperator<M> { return this.addField('place_async') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get payment_status(): Types.FilterOperator<M> { return this.addField('payment_status') }
	get fulfillment_status(): Types.FilterOperator<M> { return this.addField('fulfillment_status') }
	get guest(): Types.FilterOperator<M> { return this.addField('guest') }
	get customer_email(): Types.FilterOperator<M> { return this.addField('customer_email') }
	get language_code(): Types.FilterOperator<M> { return this.addField('language_code') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get tax_included(): Types.FilterOperator<M> { return this.addField('tax_included') }
	get tax_rate(): Types.FilterOperator<M> { return this.addField('tax_rate') }
	get country_code(): Types.FilterOperator<M> { return this.addField('country_code') }
	get coupon_code(): Types.FilterOperator<M> { return this.addField('coupon_code') }
	get gift_card_code(): Types.FilterOperator<M> { return this.addField('gift_card_code') }
	get subtotal_amount_cents(): Types.FilterOperator<M> { return this.addField('subtotal_amount_cents') }
	get shipping_amount_cents(): Types.FilterOperator<M> { return this.addField('shipping_amount_cents') }
	get payment_method_amount_cents(): Types.FilterOperator<M> { return this.addField('payment_method_amount_cents') }
	get discount_amount_cents(): Types.FilterOperator<M> { return this.addField('discount_amount_cents') }
	get adjustment_amount_cents(): Types.FilterOperator<M> { return this.addField('adjustment_amount_cents') }
	get gift_card_amount_cents(): Types.FilterOperator<M> { return this.addField('gift_card_amount_cents') }
	get total_tax_amount_cents(): Types.FilterOperator<M> { return this.addField('total_tax_amount_cents') }
	get subtotal_tax_amount_cents(): Types.FilterOperator<M> { return this.addField('subtotal_tax_amount_cents') }
	get total_amount_cents(): Types.FilterOperator<M> { return this.addField('total_amount_cents') }
	get fees_amount_cents(): Types.FilterOperator<M> { return this.addField('fees_amount_cents') }
	get duty_amount_cents(): Types.FilterOperator<M> { return this.addField('duty_amount_cents') }
	get payment_source_details(): Types.FilterOperator<M> { return this.addField('payment_source_details') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get placed_at(): Types.FilterOperator<M> { return this.addField('placed_at') }
	get approved_at(): Types.FilterOperator<M> { return this.addField('approved_at') }
	get cancelled_at(): Types.FilterOperator<M> { return this.addField('cancelled_at') }
	get payment_updated_at(): Types.FilterOperator<M> { return this.addField('payment_updated_at') }
	get fulfillment_updated_at(): Types.FilterOperator<M> { return this.addField('fulfillment_updated_at') }
	get refreshed_at(): Types.FilterOperator<M> { return this.addField('refreshed_at') }
	get archived_at(): Types.FilterOperator<M> { return this.addField('archived_at') }
	get subscription_created_at(): Types.FilterOperator<M> { return this.addField('subscription_created_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get shipping_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_address')) }
	get billing_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('billing_address')) }
	get store(): StoreFilterFields<M> { return new StoreFilterFields<M>(this.master, this.operator, this.addRelationship('store')) }
	get payment_method(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_method')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get discount_engine_item(): DiscountEngineItemFilterFields<M> { return new DiscountEngineItemFilterFields<M>(this.master, this.operator, this.addRelationship('discount_engine_item')) }
	get line_items(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_items')) }
	get line_item_options(): LineItemOptionFilterFields<M> { return new LineItemOptionFilterFields<M>(this.master, this.operator, this.addRelationship('line_item_options')) }
	get stock_reservations(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservations')) }
	get stock_line_items(): StockLineItemFilterFields<M> { return new StockLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_line_items')) }
	get stock_transfers(): StockTransferFilterFields<M> { return new StockTransferFilterFields<M>(this.master, this.operator, this.addRelationship('stock_transfers')) }
	get shipments(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipments')) }
	get payment_options(): PaymentOptionFilterFields<M> { return new PaymentOptionFilterFields<M>(this.master, this.operator, this.addRelationship('payment_options')) }
	get transactions(): TransactionFilterFields<M> { return new TransactionFilterFields<M>(this.master, this.operator, this.addRelationship('transactions')) }
	get authorizations(): AuthorizationFilterFields<M> { return new AuthorizationFilterFields<M>(this.master, this.operator, this.addRelationship('authorizations')) }
	get captures(): CaptureFilterFields<M> { return new CaptureFilterFields<M>(this.master, this.operator, this.addRelationship('captures')) }
	get voids(): VoidFilterFields<M> { return new VoidFilterFields<M>(this.master, this.operator, this.addRelationship('voids')) }
	get refunds(): RefundFilterFields<M> { return new RefundFilterFields<M>(this.master, this.operator, this.addRelationship('refunds')) }
	get returns(): ReturnFilterFields<M> { return new ReturnFilterFields<M>(this.master, this.operator, this.addRelationship('returns')) }
	get order_subscription(): OrderSubscriptionFilterFields<M> { return new OrderSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('order_subscription')) }
	get order_subscriptions(): OrderSubscriptionFilterFields<M> { return new OrderSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('order_subscriptions')) }
	get order_copies(): OrderCopyFilterFields<M> { return new OrderCopyFilterFields<M>(this.master, this.operator, this.addRelationship('order_copies')) }
	get recurring_order_copies(): RecurringOrderCopyFilterFields<M> { return new RecurringOrderCopyFilterFields<M>(this.master, this.operator, this.addRelationship('recurring_order_copies')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get notifications(): NotificationFilterFields<M> { return new NotificationFilterFields<M>(this.master, this.operator, this.addRelationship('notifications')) }
	get links(): LinkFilterFields<M> { return new LinkFilterFields<M>(this.master, this.operator, this.addRelationship('links')) }
	get resource_errors(): ResourceErrorFilterFields<M> { return new ResourceErrorFilterFields<M>(this.master, this.operator, this.addRelationship('resource_errors')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type OrderFilter = OrderFilterFields<OrderFilter>


class OrderAmountPromotionRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get promotion(): PromotionFilterFields<M> { return new PromotionFilterFields<M>(this.master, this.operator, this.addRelationship('promotion')) }
}

export type OrderAmountPromotionRuleFilter = OrderAmountPromotionRuleFilterFields<OrderAmountPromotionRuleFilter>


class OrderCopyFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get failed_at(): Types.FilterOperator<M> { return this.addField('failed_at') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get source_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('source_order')) }
	get target_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('target_order')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type OrderCopyFilter = OrderCopyFilterFields<OrderCopyFilter>


class OrderFactoryFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get failed_at(): Types.FilterOperator<M> { return this.addField('failed_at') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get source_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('source_order')) }
	get target_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('target_order')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type OrderFactoryFilter = OrderFactoryFilterFields<OrderFactoryFilter>


class OrderSubscriptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get frequency(): Types.FilterOperator<M> { return this.addField('frequency') }
	get customer_email(): Types.FilterOperator<M> { return this.addField('customer_email') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get last_run_at(): Types.FilterOperator<M> { return this.addField('last_run_at') }
	get next_run_at(): Types.FilterOperator<M> { return this.addField('next_run_at') }
	get occurrencies(): Types.FilterOperator<M> { return this.addField('occurrencies') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get succeeded_on_last_run(): Types.FilterOperator<M> { return this.addField('succeeded_on_last_run') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get subscription_model(): SubscriptionModelFilterFields<M> { return new SubscriptionModelFilterFields<M>(this.master, this.operator, this.addRelationship('subscription_model')) }
	get source_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('source_order')) }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get customer_payment_source(): CustomerPaymentSourceFilterFields<M> { return new CustomerPaymentSourceFilterFields<M>(this.master, this.operator, this.addRelationship('customer_payment_source')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type OrderSubscriptionFilter = OrderSubscriptionFilterFields<OrderSubscriptionFilter>


class OrderSubscriptionItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get unit_amount_cents(): Types.FilterOperator<M> { return this.addField('unit_amount_cents') }
	get order_subscription(): OrderSubscriptionFilterFields<M> { return new OrderSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('order_subscription')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get bundle(): BundleFilterFields<M> { return new BundleFilterFields<M>(this.master, this.operator, this.addRelationship('bundle')) }
	get adjustment(): AdjustmentFilterFields<M> { return new AdjustmentFilterFields<M>(this.master, this.operator, this.addRelationship('adjustment')) }
	get source_line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('source_line_item')) }
}

export type OrderSubscriptionItemFilter = OrderSubscriptionItemFilterFields<OrderSubscriptionItemFilter>


class OrderValidationRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type OrderValidationRuleFilter = OrderValidationRuleFilterFields<OrderValidationRuleFilter>


class PackageFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get length(): Types.FilterOperator<M> { return this.addField('length') }
	get width(): Types.FilterOperator<M> { return this.addField('width') }
	get height(): Types.FilterOperator<M> { return this.addField('height') }
	get unit_of_length(): Types.FilterOperator<M> { return this.addField('unit_of_length') }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get parcels(): ParcelFilterFields<M> { return new ParcelFilterFields<M>(this.master, this.operator, this.addRelationship('parcels')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PackageFilter = PackageFilterFields<PackageFilter>


class ParcelFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get weight(): Types.FilterOperator<M> { return this.addField('weight') }
	get contents_explanation(): Types.FilterOperator<M> { return this.addField('contents_explanation') }
	get shipping_label_url(): Types.FilterOperator<M> { return this.addField('shipping_label_url') }
	get shipping_label_file_type(): Types.FilterOperator<M> { return this.addField('shipping_label_file_type') }
	get shipping_label_size(): Types.FilterOperator<M> { return this.addField('shipping_label_size') }
	get shipping_label_resolution(): Types.FilterOperator<M> { return this.addField('shipping_label_resolution') }
	get tracking_number(): Types.FilterOperator<M> { return this.addField('tracking_number') }
	get tracking_status(): Types.FilterOperator<M> { return this.addField('tracking_status') }
	get tracking_status_detail(): Types.FilterOperator<M> { return this.addField('tracking_status_detail') }
	get tracking_status_updated_at(): Types.FilterOperator<M> { return this.addField('tracking_status_updated_at') }
	get carrier_weight_oz(): Types.FilterOperator<M> { return this.addField('carrier_weight_oz') }
	get incoterm(): Types.FilterOperator<M> { return this.addField('incoterm') }
	get delivery_confirmation(): Types.FilterOperator<M> { return this.addField('delivery_confirmation') }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get package(): PackageFilterFields<M> { return new PackageFilterFields<M>(this.master, this.operator, this.addRelationship('package')) }
	get parcel_line_items(): ParcelLineItemFilterFields<M> { return new ParcelLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('parcel_line_items')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type ParcelFilter = ParcelFilterFields<ParcelFilter>


class ParcelLineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get parcel(): ParcelFilterFields<M> { return new ParcelFilterFields<M>(this.master, this.operator, this.addRelationship('parcel')) }
	get stock_line_item(): StockLineItemFilterFields<M> { return new StockLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_line_item')) }
}

export type ParcelLineItemFilter = ParcelLineItemFilterFields<ParcelLineItemFilter>


class PaymentGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
}

export type PaymentGatewayFilter = PaymentGatewayFilterFields<PaymentGatewayFilter>


class PaymentMethodFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_source_type(): Types.FilterOperator<M> { return this.addField('payment_source_type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get payment_gateway(): PaymentGatewayFilterFields<M> { return new PaymentGatewayFilterFields<M>(this.master, this.operator, this.addRelationship('payment_gateway')) }
	get store(): StoreFilterFields<M> { return new StoreFilterFields<M>(this.master, this.operator, this.addRelationship('store')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PaymentMethodFilter = PaymentMethodFilterFields<PaymentMethodFilter>


class PaymentOptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_source_type(): Types.FilterOperator<M> { return this.addField('payment_source_type') }
	get data(): Types.FilterOperator<M> { return this.addField('data') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PaymentOptionFilter = PaymentOptionFilterFields<PaymentOptionFilter>


class PaypalGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get paypal_payments(): PaypalPaymentFilterFields<M> { return new PaypalPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('paypal_payments')) }
}

export type PaypalGatewayFilter = PaypalGatewayFilterFields<PaypalGatewayFilter>


class PaypalPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_gateway(): PaymentGatewayFilterFields<M> { return new PaymentGatewayFilterFields<M>(this.master, this.operator, this.addRelationship('payment_gateway')) }
}

export type PaypalPaymentFilter = PaypalPaymentFilterFields<PaypalPaymentFilter>


class PercentageDiscountPromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type PercentageDiscountPromotionFilter = PercentageDiscountPromotionFilterFields<PercentageDiscountPromotionFilter>


class PickupFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get parcels(): ParcelFilterFields<M> { return new ParcelFilterFields<M>(this.master, this.operator, this.addRelationship('parcels')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type PickupFilter = PickupFilterFields<PickupFilter>


class PriceFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get compare_at_amount_cents(): Types.FilterOperator<M> { return this.addField('compare_at_amount_cents') }
	get rules(): Types.FilterOperator<M> { return this.addField('rules') }
	get price_list(): PriceListFilterFields<M> { return new PriceListFilterFields<M>(this.master, this.operator, this.addRelationship('price_list')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get price_tiers(): PriceTierFilterFields<M> { return new PriceTierFilterFields<M>(this.master, this.operator, this.addRelationship('price_tiers')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PriceFilter = PriceFilterFields<PriceFilter>


class PriceFrequencyTierFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get up_to(): Types.FilterOperator<M> { return this.addField('up_to') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get price(): PriceFilterFields<M> { return new PriceFilterFields<M>(this.master, this.operator, this.addRelationship('price')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type PriceFrequencyTierFilter = PriceFrequencyTierFilterFields<PriceFrequencyTierFilter>


class PriceListFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get tax_included(): Types.FilterOperator<M> { return this.addField('tax_included') }
	get rules(): Types.FilterOperator<M> { return this.addField('rules') }
	get prices(): PriceFilterFields<M> { return new PriceFilterFields<M>(this.master, this.operator, this.addRelationship('prices')) }
	get price_list_schedulers(): PriceListSchedulerFilterFields<M> { return new PriceListSchedulerFilterFields<M>(this.master, this.operator, this.addRelationship('price_list_schedulers')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PriceListFilter = PriceListFilterFields<PriceListFilter>


class PriceListSchedulerFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get price_list(): PriceListFilterFields<M> { return new PriceListFilterFields<M>(this.master, this.operator, this.addRelationship('price_list')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type PriceListSchedulerFilter = PriceListSchedulerFilterFields<PriceListSchedulerFilter>


class PriceTierFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get up_to(): Types.FilterOperator<M> { return this.addField('up_to') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get price(): PriceFilterFields<M> { return new PriceFilterFields<M>(this.master, this.operator, this.addRelationship('price')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type PriceTierFilter = PriceTierFilterFields<PriceTierFilter>


class PriceVolumeTierFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get up_to(): Types.FilterOperator<M> { return this.addField('up_to') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get price(): PriceFilterFields<M> { return new PriceFilterFields<M>(this.master, this.operator, this.addRelationship('price')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type PriceVolumeTierFilter = PriceVolumeTierFilterFields<PriceVolumeTierFilter>


class PromotionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get exclusive(): Types.FilterOperator<M> { return this.addField('exclusive') }
	get priority(): Types.FilterOperator<M> { return this.addField('priority') }
	get starts_at(): Types.FilterOperator<M> { return this.addField('starts_at') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get total_usage_limit(): Types.FilterOperator<M> { return this.addField('total_usage_limit') }
	get total_usage_count(): Types.FilterOperator<M> { return this.addField('total_usage_count') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get promotion_rules(): PromotionRuleFilterFields<M> { return new PromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('promotion_rules')) }
	get order_amount_promotion_rule(): OrderAmountPromotionRuleFilterFields<M> { return new OrderAmountPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('order_amount_promotion_rule')) }
	get sku_list_promotion_rule(): SkuListPromotionRuleFilterFields<M> { return new SkuListPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_promotion_rule')) }
	get coupon_codes_promotion_rule(): CouponCodesPromotionRuleFilterFields<M> { return new CouponCodesPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('coupon_codes_promotion_rule')) }
	get custom_promotion_rule(): CustomPromotionRuleFilterFields<M> { return new CustomPromotionRuleFilterFields<M>(this.master, this.operator, this.addRelationship('custom_promotion_rule')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get coupons(): CouponFilterFields<M> { return new CouponFilterFields<M>(this.master, this.operator, this.addRelationship('coupons')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type PromotionFilter = PromotionFilterFields<PromotionFilter>


class PromotionRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get promotion(): PromotionFilterFields<M> { return new PromotionFilterFields<M>(this.master, this.operator, this.addRelationship('promotion')) }
}

export type PromotionRuleFilter = PromotionRuleFilterFields<PromotionRuleFilter>


class RecurringOrderCopyFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get started_at(): Types.FilterOperator<M> { return this.addField('started_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get failed_at(): Types.FilterOperator<M> { return this.addField('failed_at') }
	get errors_count(): Types.FilterOperator<M> { return this.addField('errors_count') }
	get source_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('source_order')) }
	get target_order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('target_order')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get order_subscription(): OrderSubscriptionFilterFields<M> { return new OrderSubscriptionFilterFields<M>(this.master, this.operator, this.addRelationship('order_subscription')) }
}

export type RecurringOrderCopyFilter = RecurringOrderCopyFilterFields<RecurringOrderCopyFilter>


class RefundFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get succeeded(): Types.FilterOperator<M> { return this.addField('succeeded') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get error_code(): Types.FilterOperator<M> { return this.addField('error_code') }
	get error_detail(): Types.FilterOperator<M> { return this.addField('error_detail') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get gateway_transaction_id(): Types.FilterOperator<M> { return this.addField('gateway_transaction_id') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get reference_capture(): CaptureFilterFields<M> { return new CaptureFilterFields<M>(this.master, this.operator, this.addRelationship('reference_capture')) }
	get return(): ReturnFilterFields<M> { return new ReturnFilterFields<M>(this.master, this.operator, this.addRelationship('return')) }
}

export type RefundFilter = RefundFilterFields<RefundFilter>


class ReservedStockFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get stock_item(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_item')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
}

export type ReservedStockFilter = ReservedStockFilterFields<ReservedStockFilter>


class ResourceErrorFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get resource(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('resource')) } // polymorphic
}

export type ResourceErrorFilter = ResourceErrorFilterFields<ResourceErrorFilter>


class ReturnFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get skus_count(): Types.FilterOperator<M> { return this.addField('skus_count') }
	get approved_at(): Types.FilterOperator<M> { return this.addField('approved_at') }
	get cancelled_at(): Types.FilterOperator<M> { return this.addField('cancelled_at') }
	get shipped_at(): Types.FilterOperator<M> { return this.addField('shipped_at') }
	get rejected_at(): Types.FilterOperator<M> { return this.addField('rejected_at') }
	get received_at(): Types.FilterOperator<M> { return this.addField('received_at') }
	get refunded_at(): Types.FilterOperator<M> { return this.addField('refunded_at') }
	get archived_at(): Types.FilterOperator<M> { return this.addField('archived_at') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get origin_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('origin_address')) }
	get destination_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('destination_address')) }
	get reference_capture(): CaptureFilterFields<M> { return new CaptureFilterFields<M>(this.master, this.operator, this.addRelationship('reference_capture')) }
	get reference_refund(): RefundFilterFields<M> { return new RefundFilterFields<M>(this.master, this.operator, this.addRelationship('reference_refund')) }
	get return_line_items(): ReturnLineItemFilterFields<M> { return new ReturnLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('return_line_items')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get resource_errors(): ResourceErrorFilterFields<M> { return new ResourceErrorFilterFields<M>(this.master, this.operator, this.addRelationship('resource_errors')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type ReturnFilter = ReturnFilterFields<ReturnFilter>


class ReturnLineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get total_amount_cents(): Types.FilterOperator<M> { return this.addField('total_amount_cents') }
	get return_reason(): Types.FilterOperator<M> { return this.addField('return_reason') }
	get restocked_at(): Types.FilterOperator<M> { return this.addField('restocked_at') }
	get return(): ReturnFilterFields<M> { return new ReturnFilterFields<M>(this.master, this.operator, this.addRelationship('return')) }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
}

export type ReturnLineItemFilter = ReturnLineItemFilterFields<ReturnLineItemFilter>


class SatispayGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
	get satispay_payments(): SatispayPaymentFilterFields<M> { return new SatispayPaymentFilterFields<M>(this.master, this.operator, this.addRelationship('satispay_payments')) }
}

export type SatispayGatewayFilter = SatispayGatewayFilterFields<SatispayGatewayFilter>


class SatispayPaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get flow(): Types.FilterOperator<M> { return this.addField('flow') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_gateway(): PaymentGatewayFilterFields<M> { return new PaymentGatewayFilterFields<M>(this.master, this.operator, this.addRelationship('payment_gateway')) }
}

export type SatispayPaymentFilter = SatispayPaymentFilterFields<SatispayPaymentFilter>


class ShipmentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get cost_amount_cents(): Types.FilterOperator<M> { return this.addField('cost_amount_cents') }
	get get_rates_started_at(): Types.FilterOperator<M> { return this.addField('get_rates_started_at') }
	get get_rates_completed_at(): Types.FilterOperator<M> { return this.addField('get_rates_completed_at') }
	get purchase_started_at(): Types.FilterOperator<M> { return this.addField('purchase_started_at') }
	get purchase_completed_at(): Types.FilterOperator<M> { return this.addField('purchase_completed_at') }
	get purchase_failed_at(): Types.FilterOperator<M> { return this.addField('purchase_failed_at') }
	get on_hold_at(): Types.FilterOperator<M> { return this.addField('on_hold_at') }
	get picking_at(): Types.FilterOperator<M> { return this.addField('picking_at') }
	get packing_at(): Types.FilterOperator<M> { return this.addField('packing_at') }
	get ready_to_ship_at(): Types.FilterOperator<M> { return this.addField('ready_to_ship_at') }
	get shipped_at(): Types.FilterOperator<M> { return this.addField('shipped_at') }
	get delivered_at(): Types.FilterOperator<M> { return this.addField('delivered_at') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get shipping_category(): ShippingCategoryFilterFields<M> { return new ShippingCategoryFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_category')) }
	get inventory_stock_location(): InventoryStockLocationFilterFields<M> { return new InventoryStockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_stock_location')) }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get origin_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('origin_address')) }
	get shipping_address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_address')) }
	get shipping_method(): ShippingMethodFilterFields<M> { return new ShippingMethodFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_method')) }
	get stock_line_items(): StockLineItemFilterFields<M> { return new StockLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_line_items')) }
	get stock_transfers(): StockTransferFilterFields<M> { return new StockTransferFilterFields<M>(this.master, this.operator, this.addRelationship('stock_transfers')) }
	get parcels(): ParcelFilterFields<M> { return new ParcelFilterFields<M>(this.master, this.operator, this.addRelationship('parcels')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type ShipmentFilter = ShipmentFilterFields<ShipmentFilter>


class ShipmentLineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get sku_code(): Types.FilterOperator<M> { return this.addField('sku_code') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
	get stock_item(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_item')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get stock_reservation(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservation')) }
}

export type ShipmentLineItemFilter = ShipmentLineItemFilterFields<ShipmentLineItemFilter>


class ShippingCategoryFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get skus(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('skus')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type ShippingCategoryFilter = ShippingCategoryFilterFields<ShippingCategoryFilter>


class ShippingMethodFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get scheme(): Types.FilterOperator<M> { return this.addField('scheme') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get free_over_amount_cents(): Types.FilterOperator<M> { return this.addField('free_over_amount_cents') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get shipping_zone(): ShippingZoneFilterFields<M> { return new ShippingZoneFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_zone')) }
	get shipping_category(): ShippingCategoryFilterFields<M> { return new ShippingCategoryFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_category')) }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get shipping_method_tiers(): ShippingMethodTierFilterFields<M> { return new ShippingMethodTierFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_method_tiers')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get notifications(): NotificationFilterFields<M> { return new NotificationFilterFields<M>(this.master, this.operator, this.addRelationship('notifications')) }
}

export type ShippingMethodFilter = ShippingMethodFilterFields<ShippingMethodFilter>


class ShippingMethodTierFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get up_to(): Types.FilterOperator<M> { return this.addField('up_to') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get shipping_method(): ShippingMethodFilterFields<M> { return new ShippingMethodFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_method')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type ShippingMethodTierFilter = ShippingMethodTierFilterFields<ShippingMethodTierFilter>


class ShippingWeightTierFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get up_to(): Types.FilterOperator<M> { return this.addField('up_to') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get shipping_method(): ShippingMethodFilterFields<M> { return new ShippingMethodFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_method')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type ShippingWeightTierFilter = ShippingWeightTierFilterFields<ShippingWeightTierFilter>


class ShippingZoneFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type ShippingZoneFilter = ShippingZoneFilterFields<ShippingZoneFilter>


class SkuFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get description(): Types.FilterOperator<M> { return this.addField('description') }
	get image_url(): Types.FilterOperator<M> { return this.addField('image_url') }
	get do_not_ship(): Types.FilterOperator<M> { return this.addField('do_not_ship') }
	get do_not_track(): Types.FilterOperator<M> { return this.addField('do_not_track') }
	get shipping_category(): ShippingCategoryFilterFields<M> { return new ShippingCategoryFilterFields<M>(this.master, this.operator, this.addRelationship('shipping_category')) }
	get prices(): PriceFilterFields<M> { return new PriceFilterFields<M>(this.master, this.operator, this.addRelationship('prices')) }
	get stock_items(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_items')) }
	get stock_reservations(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservations')) }
	get delivery_lead_times(): DeliveryLeadTimeFilterFields<M> { return new DeliveryLeadTimeFilterFields<M>(this.master, this.operator, this.addRelationship('delivery_lead_times')) }
	get sku_list_items(): SkuListItemFilterFields<M> { return new SkuListItemFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_items')) }
	get sku_lists(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_lists')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get links(): LinkFilterFields<M> { return new LinkFilterFields<M>(this.master, this.operator, this.addRelationship('links')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type SkuFilter = SkuFilterFields<SkuFilter>


class SkuListFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get slug(): Types.FilterOperator<M> { return this.addField('slug') }
	get description(): Types.FilterOperator<M> { return this.addField('description') }
	get image_url(): Types.FilterOperator<M> { return this.addField('image_url') }
	get manual(): Types.FilterOperator<M> { return this.addField('manual') }
	get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
	get sku_list_items(): SkuListItemFilterFields<M> { return new SkuListItemFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list_items')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get links(): LinkFilterFields<M> { return new LinkFilterFields<M>(this.master, this.operator, this.addRelationship('links')) }
}

export type SkuListFilter = SkuListFilterFields<SkuListFilter>


class SkuListItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get position(): Types.FilterOperator<M> { return this.addField('position') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
}

export type SkuListItemFilter = SkuListItemFilterFields<SkuListItemFilter>


class SkuListPromotionRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get promotion(): PromotionFilterFields<M> { return new PromotionFilterFields<M>(this.master, this.operator, this.addRelationship('promotion')) }
	get sku_list(): SkuListFilterFields<M> { return new SkuListFilterFields<M>(this.master, this.operator, this.addRelationship('sku_list')) }
}

export type SkuListPromotionRuleFilter = SkuListPromotionRuleFilterFields<SkuListPromotionRuleFilter>


class SkuOptionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get description(): Types.FilterOperator<M> { return this.addField('description') }
	get price_amount_cents(): Types.FilterOperator<M> { return this.addField('price_amount_cents') }
	get delay_hours(): Types.FilterOperator<M> { return this.addField('delay_hours') }
	get delay_days(): Types.FilterOperator<M> { return this.addField('delay_days') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get tags(): TagFilterFields<M> { return new TagFilterFields<M>(this.master, this.operator, this.addRelationship('tags')) }
}

export type SkuOptionFilter = SkuOptionFilterFields<SkuOptionFilter>


class StockItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get reserved_stock(): ReservedStockFilterFields<M> { return new ReservedStockFilterFields<M>(this.master, this.operator, this.addRelationship('reserved_stock')) }
	get stock_reservations(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservations')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type StockItemFilter = StockItemFilterFields<StockItemFilter>


class StockLineItemFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get sku_code(): Types.FilterOperator<M> { return this.addField('sku_code') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
	get stock_item(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_item')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get stock_reservation(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservation')) }
}

export type StockLineItemFilter = StockLineItemFilterFields<StockLineItemFilter>


class StockLocationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get label_format(): Types.FilterOperator<M> { return this.addField('label_format') }
	get suppress_etd(): Types.FilterOperator<M> { return this.addField('suppress_etd') }
	get address(): AddressFilterFields<M> { return new AddressFilterFields<M>(this.master, this.operator, this.addRelationship('address')) }
	get inventory_stock_locations(): InventoryStockLocationFilterFields<M> { return new InventoryStockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_stock_locations')) }
	get inventory_return_locations(): InventoryReturnLocationFilterFields<M> { return new InventoryReturnLocationFilterFields<M>(this.master, this.operator, this.addRelationship('inventory_return_locations')) }
	get stock_items(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_items')) }
	get stock_transfers(): StockTransferFilterFields<M> { return new StockTransferFilterFields<M>(this.master, this.operator, this.addRelationship('stock_transfers')) }
	get stores(): StoreFilterFields<M> { return new StoreFilterFields<M>(this.master, this.operator, this.addRelationship('stores')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type StockLocationFilter = StockLocationFilterFields<StockLocationFilter>


class StockReservationFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get expires_at(): Types.FilterOperator<M> { return this.addField('expires_at') }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get stock_line_item(): StockLineItemFilterFields<M> { return new StockLineItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_line_item')) }
	get stock_transfer(): StockTransferFilterFields<M> { return new StockTransferFilterFields<M>(this.master, this.operator, this.addRelationship('stock_transfer')) }
	get stock_item(): StockItemFilterFields<M> { return new StockItemFilterFields<M>(this.master, this.operator, this.addRelationship('stock_item')) }
	get reserved_stock(): ReservedStockFilterFields<M> { return new ReservedStockFilterFields<M>(this.master, this.operator, this.addRelationship('reserved_stock')) }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
}

export type StockReservationFilter = StockReservationFilterFields<StockReservationFilter>


class StockTransferFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get status(): Types.FilterOperator<M> { return this.addField('status') }
	get quantity(): Types.FilterOperator<M> { return this.addField('quantity') }
	get on_hold_at(): Types.FilterOperator<M> { return this.addField('on_hold_at') }
	get picking_at(): Types.FilterOperator<M> { return this.addField('picking_at') }
	get in_transit_at(): Types.FilterOperator<M> { return this.addField('in_transit_at') }
	get completed_at(): Types.FilterOperator<M> { return this.addField('completed_at') }
	get cancelled_at(): Types.FilterOperator<M> { return this.addField('cancelled_at') }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get origin_stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('origin_stock_location')) }
	get destination_stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('destination_stock_location')) }
	get shipment(): ShipmentFilterFields<M> { return new ShipmentFilterFields<M>(this.master, this.operator, this.addRelationship('shipment')) }
	get line_item(): LineItemFilterFields<M> { return new LineItemFilterFields<M>(this.master, this.operator, this.addRelationship('line_item')) }
	get stock_reservation(): StockReservationFilterFields<M> { return new StockReservationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_reservation')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type StockTransferFilter = StockTransferFilterFields<StockTransferFilter>


class StoreFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get market(): MarketFilterFields<M> { return new MarketFilterFields<M>(this.master, this.operator, this.addRelationship('market')) }
	get merchant(): MerchantFilterFields<M> { return new MerchantFilterFields<M>(this.master, this.operator, this.addRelationship('merchant')) }
	get stock_location(): StockLocationFilterFields<M> { return new StockLocationFilterFields<M>(this.master, this.operator, this.addRelationship('stock_location')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type StoreFilter = StoreFilterFields<StoreFilter>


class StripeGatewayFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get payment_methods(): PaymentMethodFilterFields<M> { return new PaymentMethodFilterFields<M>(this.master, this.operator, this.addRelationship('payment_methods')) }
}

export type StripeGatewayFilter = StripeGatewayFilterFields<StripeGatewayFilter>


class StripePaymentFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
}

export type StripePaymentFilter = StripePaymentFilterFields<StripePaymentFilter>


class StripeTaxAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type StripeTaxAccountFilter = StripeTaxAccountFilterFields<StripeTaxAccountFilter>


class SubscriptionModelFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get strategy(): Types.FilterOperator<M> { return this.addField('strategy') }
	get auto_activate(): Types.FilterOperator<M> { return this.addField('auto_activate') }
	get auto_cancel(): Types.FilterOperator<M> { return this.addField('auto_cancel') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type SubscriptionModelFilter = SubscriptionModelFilterFields<SubscriptionModelFilter>


class TagFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
}

export type TagFilter = TagFilterFields<TagFilter>


class TalonOneAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type TalonOneAccountFilter = TalonOneAccountFilterFields<TalonOneAccountFilter>


class TaxCalculatorFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type TaxCalculatorFilter = TaxCalculatorFilterFields<TaxCalculatorFilter>


class TaxCategoryFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get code(): Types.FilterOperator<M> { return this.addField('code') }
	get sku(): SkuFilterFields<M> { return new SkuFilterFields<M>(this.master, this.operator, this.addRelationship('sku')) }
	get tax_calculator(): TaxCalculatorFilterFields<M> { return new TaxCalculatorFilterFields<M>(this.master, this.operator, this.addRelationship('tax_calculator')) }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
}

export type TaxCategoryFilter = TaxCategoryFilterFields<TaxCategoryFilter>


class TaxRuleFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get tax_rate(): Types.FilterOperator<M> { return this.addField('tax_rate') }
	get freight_taxable(): Types.FilterOperator<M> { return this.addField('freight_taxable') }
	get payment_method_taxable(): Types.FilterOperator<M> { return this.addField('payment_method_taxable') }
	get gift_card_taxable(): Types.FilterOperator<M> { return this.addField('gift_card_taxable') }
	get adjustment_taxable(): Types.FilterOperator<M> { return this.addField('adjustment_taxable') }
	get manual_tax_calculator(): ManualTaxCalculatorFilterFields<M> { return new ManualTaxCalculatorFilterFields<M>(this.master, this.operator, this.addRelationship('manual_tax_calculator')) }
}

export type TaxRuleFilter = TaxRuleFilterFields<TaxRuleFilter>


class TaxjarAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type TaxjarAccountFilter = TaxjarAccountFilterFields<TaxjarAccountFilter>


class TransactionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get succeeded(): Types.FilterOperator<M> { return this.addField('succeeded') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get error_code(): Types.FilterOperator<M> { return this.addField('error_code') }
	get error_detail(): Types.FilterOperator<M> { return this.addField('error_detail') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get gateway_transaction_id(): Types.FilterOperator<M> { return this.addField('gateway_transaction_id') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type TransactionFilter = TransactionFilterFields<TransactionFilter>


class VersionFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get resource_type(): Types.FilterOperator<M> { return this.addField('resource_type') }
	get resource_id(): Types.FilterOperator<M> { return this.addField('resource_id') }
}

export type VersionFilter = VersionFilterFields<VersionFilter>


class VertexAccountFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
}

export type VertexAccountFilter = VertexAccountFilterFields<VertexAccountFilter>


class VoidFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get number(): Types.FilterOperator<M> { return this.addField('number') }
	get type(): Types.FilterOperator<M> { return this.addField('type') }
	get currency_code(): Types.FilterOperator<M> { return this.addField('currency_code') }
	get amount_cents(): Types.FilterOperator<M> { return this.addField('amount_cents') }
	get succeeded(): Types.FilterOperator<M> { return this.addField('succeeded') }
	get message(): Types.FilterOperator<M> { return this.addField('message') }
	get error_code(): Types.FilterOperator<M> { return this.addField('error_code') }
	get error_detail(): Types.FilterOperator<M> { return this.addField('error_detail') }
	get token(): Types.FilterOperator<M> { return this.addField('token') }
	get gateway_transaction_id(): Types.FilterOperator<M> { return this.addField('gateway_transaction_id') }
	get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
	get payment_source(): ResourceFilterFields<M> { return new ResourceFilterFields<M>(this.master, this.operator, this.addRelationship('payment_source')) } // polymorphic
	get attachments(): AttachmentFilterFields<M> { return new AttachmentFilterFields<M>(this.master, this.operator, this.addRelationship('attachments')) }
	get events(): EventFilterFields<M> { return new EventFilterFields<M>(this.master, this.operator, this.addRelationship('events')) }
	get reference_authorization(): AuthorizationFilterFields<M> { return new AuthorizationFilterFields<M>(this.master, this.operator, this.addRelationship('reference_authorization')) }
}

export type VoidFilter = VoidFilterFields<VoidFilter>


class WebhookFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
	get name(): Types.FilterOperator<M> { return this.addField('name') }
	get topic(): Types.FilterOperator<M> { return this.addField('topic') }
	get disabled_at(): Types.FilterOperator<M> { return this.addField('disabled_at') }
	get circuit_state(): Types.FilterOperator<M> { return this.addField('circuit_state') }
	get circuit_failure_count(): Types.FilterOperator<M> { return this.addField('circuit_failure_count') }
}

export type WebhookFilter = WebhookFilterFields<WebhookFilter>


class WireTransferFilterFields<M extends Types.FilterMaster> extends ResourceFilterFields<M> {
}

export type WireTransferFilter = WireTransferFilterFields<WireTransferFilter>



export class FilterHelper {
	get addresses(): AddressFilter { return new AddressFilterFields<AddressFilter>() }
	get adjustments(): AdjustmentFilter { return new AdjustmentFilterFields<AdjustmentFilter>() }
	get adyen_gateways(): AdyenGatewayFilter { return new AdyenGatewayFilterFields<AdyenGatewayFilter>() }
	get adyen_payments(): AdyenPaymentFilter { return new AdyenPaymentFilterFields<AdyenPaymentFilter>() }
	get attachments(): AttachmentFilter { return new AttachmentFilterFields<AttachmentFilter>() }
	get authorizations(): AuthorizationFilter { return new AuthorizationFilterFields<AuthorizationFilter>() }
	get avalara_accounts(): AvalaraAccountFilter { return new AvalaraAccountFilterFields<AvalaraAccountFilter>() }
	get axerve_gateways(): AxerveGatewayFilter { return new AxerveGatewayFilterFields<AxerveGatewayFilter>() }
	get axerve_payments(): AxervePaymentFilter { return new AxervePaymentFilterFields<AxervePaymentFilter>() }
	get billing_info_validation_rules(): BillingInfoValidationRuleFilter { return new BillingInfoValidationRuleFilterFields<BillingInfoValidationRuleFilter>() }
	get bing_geocoders(): BingGeocoderFilter { return new BingGeocoderFilterFields<BingGeocoderFilter>() }
	get braintree_gateways(): BraintreeGatewayFilter { return new BraintreeGatewayFilterFields<BraintreeGatewayFilter>() }
	get braintree_payments(): BraintreePaymentFilter { return new BraintreePaymentFilterFields<BraintreePaymentFilter>() }
	get bundles(): BundleFilter { return new BundleFilterFields<BundleFilter>() }
	get buy_x_pay_y_promotions(): BuyXPayYPromotionFilter { return new BuyXPayYPromotionFilterFields<BuyXPayYPromotionFilter>() }
	get captures(): CaptureFilter { return new CaptureFilterFields<CaptureFilter>() }
	get carrier_accounts(): CarrierAccountFilter { return new CarrierAccountFilterFields<CarrierAccountFilter>() }
	get checkout_com_gateways(): CheckoutComGatewayFilter { return new CheckoutComGatewayFilterFields<CheckoutComGatewayFilter>() }
	get checkout_com_payments(): CheckoutComPaymentFilter { return new CheckoutComPaymentFilterFields<CheckoutComPaymentFilter>() }
	get cleanups(): CleanupFilter { return new CleanupFilterFields<CleanupFilter>() }
	get coupons(): CouponFilter { return new CouponFilterFields<CouponFilter>() }
	get coupon_codes_promotion_rules(): CouponCodesPromotionRuleFilter { return new CouponCodesPromotionRuleFilterFields<CouponCodesPromotionRuleFilter>() }
	get coupon_recipients(): CouponRecipientFilter { return new CouponRecipientFilterFields<CouponRecipientFilter>() }
	get custom_promotion_rules(): CustomPromotionRuleFilter { return new CustomPromotionRuleFilterFields<CustomPromotionRuleFilter>() }
	get customers(): CustomerFilter { return new CustomerFilterFields<CustomerFilter>() }
	get customer_addresses(): CustomerAddressFilter { return new CustomerAddressFilterFields<CustomerAddressFilter>() }
	get customer_groups(): CustomerGroupFilter { return new CustomerGroupFilterFields<CustomerGroupFilter>() }
	get customer_password_resets(): CustomerPasswordResetFilter { return new CustomerPasswordResetFilterFields<CustomerPasswordResetFilter>() }
	get customer_payment_sources(): CustomerPaymentSourceFilter { return new CustomerPaymentSourceFilterFields<CustomerPaymentSourceFilter>() }
	get customer_subscriptions(): CustomerSubscriptionFilter { return new CustomerSubscriptionFilterFields<CustomerSubscriptionFilter>() }
	get delivery_lead_times(): DeliveryLeadTimeFilter { return new DeliveryLeadTimeFilterFields<DeliveryLeadTimeFilter>() }
	get discount_engines(): DiscountEngineFilter { return new DiscountEngineFilterFields<DiscountEngineFilter>() }
	get discount_engine_items(): DiscountEngineItemFilter { return new DiscountEngineItemFilterFields<DiscountEngineItemFilter>() }
	get easypost_pickups(): EasypostPickupFilter { return new EasypostPickupFilterFields<EasypostPickupFilter>() }
	get events(): EventFilter { return new EventFilterFields<EventFilter>() }
	get event_callbacks(): EventCallbackFilter { return new EventCallbackFilterFields<EventCallbackFilter>() }
	get event_stores(): EventStoreFilter { return new EventStoreFilterFields<EventStoreFilter>() }
	get exports(): ExportFilter { return new ExportFilterFields<ExportFilter>() }
	get external_gateways(): ExternalGatewayFilter { return new ExternalGatewayFilterFields<ExternalGatewayFilter>() }
	get external_payments(): ExternalPaymentFilter { return new ExternalPaymentFilterFields<ExternalPaymentFilter>() }
	get external_promotions(): ExternalPromotionFilter { return new ExternalPromotionFilterFields<ExternalPromotionFilter>() }
	get external_tax_calculators(): ExternalTaxCalculatorFilter { return new ExternalTaxCalculatorFilterFields<ExternalTaxCalculatorFilter>() }
	get fixed_amount_promotions(): FixedAmountPromotionFilter { return new FixedAmountPromotionFilterFields<FixedAmountPromotionFilter>() }
	get fixed_price_promotions(): FixedPricePromotionFilter { return new FixedPricePromotionFilterFields<FixedPricePromotionFilter>() }
	get flex_promotions(): FlexPromotionFilter { return new FlexPromotionFilterFields<FlexPromotionFilter>() }
	get free_gift_promotions(): FreeGiftPromotionFilter { return new FreeGiftPromotionFilterFields<FreeGiftPromotionFilter>() }
	get free_shipping_promotions(): FreeShippingPromotionFilter { return new FreeShippingPromotionFilterFields<FreeShippingPromotionFilter>() }
	get geocoders(): GeocoderFilter { return new GeocoderFilterFields<GeocoderFilter>() }
	get gift_cards(): GiftCardFilter { return new GiftCardFilterFields<GiftCardFilter>() }
	get gift_card_recipients(): GiftCardRecipientFilter { return new GiftCardRecipientFilterFields<GiftCardRecipientFilter>() }
	get google_geocoders(): GoogleGeocoderFilter { return new GoogleGeocoderFilterFields<GoogleGeocoderFilter>() }
	get imports(): ImportFilter { return new ImportFilterFields<ImportFilter>() }
	get in_stock_subscriptions(): InStockSubscriptionFilter { return new InStockSubscriptionFilterFields<InStockSubscriptionFilter>() }
	get inventory_models(): InventoryModelFilter { return new InventoryModelFilterFields<InventoryModelFilter>() }
	get inventory_return_locations(): InventoryReturnLocationFilter { return new InventoryReturnLocationFilterFields<InventoryReturnLocationFilter>() }
	get inventory_stock_locations(): InventoryStockLocationFilter { return new InventoryStockLocationFilterFields<InventoryStockLocationFilter>() }
	get klarna_gateways(): KlarnaGatewayFilter { return new KlarnaGatewayFilterFields<KlarnaGatewayFilter>() }
	get klarna_payments(): KlarnaPaymentFilter { return new KlarnaPaymentFilterFields<KlarnaPaymentFilter>() }
	get line_items(): LineItemFilter { return new LineItemFilterFields<LineItemFilter>() }
	get line_item_options(): LineItemOptionFilter { return new LineItemOptionFilterFields<LineItemOptionFilter>() }
	get links(): LinkFilter { return new LinkFilterFields<LinkFilter>() }
	get manual_gateways(): ManualGatewayFilter { return new ManualGatewayFilterFields<ManualGatewayFilter>() }
	get manual_tax_calculators(): ManualTaxCalculatorFilter { return new ManualTaxCalculatorFilterFields<ManualTaxCalculatorFilter>() }
	get markets(): MarketFilter { return new MarketFilterFields<MarketFilter>() }
	get merchants(): MerchantFilter { return new MerchantFilterFields<MerchantFilter>() }
	get notifications(): NotificationFilter { return new NotificationFilterFields<NotificationFilter>() }
	get orders(): OrderFilter { return new OrderFilterFields<OrderFilter>() }
	get order_amount_promotion_rules(): OrderAmountPromotionRuleFilter { return new OrderAmountPromotionRuleFilterFields<OrderAmountPromotionRuleFilter>() }
	get order_copies(): OrderCopyFilter { return new OrderCopyFilterFields<OrderCopyFilter>() }
	get order_factories(): OrderFactoryFilter { return new OrderFactoryFilterFields<OrderFactoryFilter>() }
	get order_subscriptions(): OrderSubscriptionFilter { return new OrderSubscriptionFilterFields<OrderSubscriptionFilter>() }
	get order_subscription_items(): OrderSubscriptionItemFilter { return new OrderSubscriptionItemFilterFields<OrderSubscriptionItemFilter>() }
	get order_validation_rules(): OrderValidationRuleFilter { return new OrderValidationRuleFilterFields<OrderValidationRuleFilter>() }
	get packages(): PackageFilter { return new PackageFilterFields<PackageFilter>() }
	get parcels(): ParcelFilter { return new ParcelFilterFields<ParcelFilter>() }
	get parcel_line_items(): ParcelLineItemFilter { return new ParcelLineItemFilterFields<ParcelLineItemFilter>() }
	get payment_gateways(): PaymentGatewayFilter { return new PaymentGatewayFilterFields<PaymentGatewayFilter>() }
	get payment_methods(): PaymentMethodFilter { return new PaymentMethodFilterFields<PaymentMethodFilter>() }
	get payment_options(): PaymentOptionFilter { return new PaymentOptionFilterFields<PaymentOptionFilter>() }
	get paypal_gateways(): PaypalGatewayFilter { return new PaypalGatewayFilterFields<PaypalGatewayFilter>() }
	get paypal_payments(): PaypalPaymentFilter { return new PaypalPaymentFilterFields<PaypalPaymentFilter>() }
	get percentage_discount_promotions(): PercentageDiscountPromotionFilter { return new PercentageDiscountPromotionFilterFields<PercentageDiscountPromotionFilter>() }
	get pickups(): PickupFilter { return new PickupFilterFields<PickupFilter>() }
	get prices(): PriceFilter { return new PriceFilterFields<PriceFilter>() }
	get price_frequency_tiers(): PriceFrequencyTierFilter { return new PriceFrequencyTierFilterFields<PriceFrequencyTierFilter>() }
	get price_lists(): PriceListFilter { return new PriceListFilterFields<PriceListFilter>() }
	get price_list_schedulers(): PriceListSchedulerFilter { return new PriceListSchedulerFilterFields<PriceListSchedulerFilter>() }
	get price_tiers(): PriceTierFilter { return new PriceTierFilterFields<PriceTierFilter>() }
	get price_volume_tiers(): PriceVolumeTierFilter { return new PriceVolumeTierFilterFields<PriceVolumeTierFilter>() }
	get promotions(): PromotionFilter { return new PromotionFilterFields<PromotionFilter>() }
	get promotion_rules(): PromotionRuleFilter { return new PromotionRuleFilterFields<PromotionRuleFilter>() }
	get recurring_order_copies(): RecurringOrderCopyFilter { return new RecurringOrderCopyFilterFields<RecurringOrderCopyFilter>() }
	get refunds(): RefundFilter { return new RefundFilterFields<RefundFilter>() }
	get reserved_stocks(): ReservedStockFilter { return new ReservedStockFilterFields<ReservedStockFilter>() }
	get resource_errors(): ResourceErrorFilter { return new ResourceErrorFilterFields<ResourceErrorFilter>() }
	get returns(): ReturnFilter { return new ReturnFilterFields<ReturnFilter>() }
	get return_line_items(): ReturnLineItemFilter { return new ReturnLineItemFilterFields<ReturnLineItemFilter>() }
	get satispay_gateways(): SatispayGatewayFilter { return new SatispayGatewayFilterFields<SatispayGatewayFilter>() }
	get satispay_payments(): SatispayPaymentFilter { return new SatispayPaymentFilterFields<SatispayPaymentFilter>() }
	get shipments(): ShipmentFilter { return new ShipmentFilterFields<ShipmentFilter>() }
	get shipment_line_items(): ShipmentLineItemFilter { return new ShipmentLineItemFilterFields<ShipmentLineItemFilter>() }
	get shipping_categories(): ShippingCategoryFilter { return new ShippingCategoryFilterFields<ShippingCategoryFilter>() }
	get shipping_methods(): ShippingMethodFilter { return new ShippingMethodFilterFields<ShippingMethodFilter>() }
	get shipping_method_tiers(): ShippingMethodTierFilter { return new ShippingMethodTierFilterFields<ShippingMethodTierFilter>() }
	get shipping_weight_tiers(): ShippingWeightTierFilter { return new ShippingWeightTierFilterFields<ShippingWeightTierFilter>() }
	get shipping_zones(): ShippingZoneFilter { return new ShippingZoneFilterFields<ShippingZoneFilter>() }
	get skus(): SkuFilter { return new SkuFilterFields<SkuFilter>() }
	get sku_lists(): SkuListFilter { return new SkuListFilterFields<SkuListFilter>() }
	get sku_list_items(): SkuListItemFilter { return new SkuListItemFilterFields<SkuListItemFilter>() }
	get sku_list_promotion_rules(): SkuListPromotionRuleFilter { return new SkuListPromotionRuleFilterFields<SkuListPromotionRuleFilter>() }
	get sku_options(): SkuOptionFilter { return new SkuOptionFilterFields<SkuOptionFilter>() }
	get stock_items(): StockItemFilter { return new StockItemFilterFields<StockItemFilter>() }
	get stock_line_items(): StockLineItemFilter { return new StockLineItemFilterFields<StockLineItemFilter>() }
	get stock_locations(): StockLocationFilter { return new StockLocationFilterFields<StockLocationFilter>() }
	get stock_reservations(): StockReservationFilter { return new StockReservationFilterFields<StockReservationFilter>() }
	get stock_transfers(): StockTransferFilter { return new StockTransferFilterFields<StockTransferFilter>() }
	get stores(): StoreFilter { return new StoreFilterFields<StoreFilter>() }
	get stripe_gateways(): StripeGatewayFilter { return new StripeGatewayFilterFields<StripeGatewayFilter>() }
	get stripe_payments(): StripePaymentFilter { return new StripePaymentFilterFields<StripePaymentFilter>() }
	get stripe_tax_accounts(): StripeTaxAccountFilter { return new StripeTaxAccountFilterFields<StripeTaxAccountFilter>() }
	get subscription_models(): SubscriptionModelFilter { return new SubscriptionModelFilterFields<SubscriptionModelFilter>() }
	get tags(): TagFilter { return new TagFilterFields<TagFilter>() }
	get talon_one_accounts(): TalonOneAccountFilter { return new TalonOneAccountFilterFields<TalonOneAccountFilter>() }
	get tax_calculators(): TaxCalculatorFilter { return new TaxCalculatorFilterFields<TaxCalculatorFilter>() }
	get tax_categories(): TaxCategoryFilter { return new TaxCategoryFilterFields<TaxCategoryFilter>() }
	get tax_rules(): TaxRuleFilter { return new TaxRuleFilterFields<TaxRuleFilter>() }
	get taxjar_accounts(): TaxjarAccountFilter { return new TaxjarAccountFilterFields<TaxjarAccountFilter>() }
	get transactions(): TransactionFilter { return new TransactionFilterFields<TransactionFilter>() }
	get versions(): VersionFilter { return new VersionFilterFields<VersionFilter>() }
	get vertex_accounts(): VertexAccountFilter { return new VertexAccountFilterFields<VertexAccountFilter>() }
	get voids(): VoidFilter { return new VoidFilterFields<VoidFilter>() }
	get webhooks(): WebhookFilter { return new WebhookFilterFields<WebhookFilter>() }
	get wire_transfers(): WireTransferFilter { return new WireTransferFilterFields<WireTransferFilter>() }
}
