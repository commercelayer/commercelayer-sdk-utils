import type * as Types from "./base"
import { ResourceFilter } from './base'



class OrderFilterFields<M extends Types.FilterMaster> extends ResourceFilter<M> {
  get mumber(): Types.FilterOperator<M> { return this.addField('number') }
  get id(): Types.FilterOperator<M> { return this.addField('id') }
  get customer(): CustomerFilterFields<M> { return new CustomerFilterFields<M>(this.master, this.operator, this.addRelationship('customer')) }
}

export type OrderFilter = OrderFilterFields<OrderFilter> 


class CustomerFilterFields<M extends Types.FilterMaster> extends ResourceFilter<M> {
  get email(): Types.FilterOperator<M> { return this.addField('email') }
  get order(): OrderFilterFields<M> { return new OrderFilterFields<M>(this.master, this.operator, this.addRelationship('order')) }
}

export type CustomerFilter = CustomerFilterFields<CustomerFilter>



export class FilterHelper<M extends Types.FilterMaster> {
  static new<M extends Types.FilterMaster>(): FilterHelper<M> { return new FilterHelper<M>()}
  private constructor() {}
  get orders(): OrderFilterFields<M> { return new OrderFilterFields<M>() }
  get customers(): CustomerFilterFields<M> { return new CustomerFilterFields<M>() }
}
