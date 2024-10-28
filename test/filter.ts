import { Filter, type OrderFilter } from "../src"

const helper = Filter.new<OrderFilter>()

const f = helper.orders

const filter: string = f.id.or.customer.email.or.mumber.matches_all('a', 'b')

console.log(filter)
