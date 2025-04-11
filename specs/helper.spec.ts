
import { expect, test, beforeAll, afterEach, describe } from 'vitest'
import type { QueryParamsList, QueryInclude, QueryParams, QueryFilter } from '@commercelayer/sdk'
import { initialize, cl } from '../test/common'
import { buildFilter, Filter } from '../lib/helpers/filter'
import { buildInclude, Include } from '../lib/helpers/include'




beforeAll(async () => {
  await initialize()
})

afterEach(() => {
  vi.resetAllMocks()
})



describe('sdk-utils.helper suite', () => {

  test('helper.include', async () => {

    const order = (await cl.orders.list({ include: buildInclude(Include.orders.customer, Include.orders.market) })).first()

    expect(order).toBeDefined()
    expect(order?.market).toBeDefined()
    expect(order?.market?.id).not.toBeNull()
    expect(order?.customer).toBeDefined()
    expect(order?.customer?.id).not.toBeNull()

  })


  test('helper.include.variants', async () => {

   const include: QueryInclude = [ 'market', 'customer', 'customer.customer_group' ]

   const io = Include.orders
   const includeBuild: QueryInclude = [ io.market.build(), io.customer.build(), io.customer.customer_group.build() ]

   const includeInstance: QueryInclude = [ Include.orders.market.build(), Include.orders.customer.build(), Include.orders.customer.customer_group.build() ]

   const includeBuildAll: QueryInclude = buildInclude(Include.orders.market, Include.orders.customer, Include.orders.customer.customer_group)

   const includeAddTo: QueryParams = {}
   io.market.addTo(includeAddTo)
   io.customer.addTo(includeAddTo)
   io.customer.customer_group.addTo(includeAddTo)

    expect(include).toEqual(includeBuild)
    expect(includeBuild).toEqual(includeInstance)
    expect(includeInstance).toEqual(includeBuildAll)
    expect(includeBuildAll).toEqual(includeAddTo.include)

  })


  test('helper.filter', async () => {

    const reference = String(Date.now())
    const reference_origin = 'sdk-utils-specs'

    const params: QueryParamsList = {
      filters: { customer_group_id_not_null: true },
      pageSize: 1
    }
    
    Include.customers.customer_group.addTo(params)

    const customer = (await cl.customers.list(params)).first()
    if (customer && customer.customer_group) {
      await cl.customers.update({ id: customer.id, reference, reference_origin })
      await cl.customer_groups.update({ id: customer.customer_group.id, reference, reference_origin })
    }

    const fc = Filter.customers

    const c = (await cl.customers.list({ filters: buildFilter(
      fc.reference.eq(reference),
      fc.customer_group.reference.eq(reference),
      fc.reference_origin.not_null()
    ), include: [Include.customers.customer_group.build()] } )).first()

    expect(c).toBeDefined()
    expect(c?.reference).toBe(reference)
    expect(c?.reference_origin).toBe(reference_origin)
    expect(c?.customer_group?.reference).toBe(reference)

  })


  test('helper.filter.variants', async () => {

    const filter: QueryFilter = {
      number_eq: 'pippo',
      market_reference_eq: 'pluto',
      number_or_reference_or_customer_customer_group_reference_eq: 'paperino',
      status_in: 'draft,approved,cancelled',
      reference_origin_not_null: 'true'
    }

    const of = Filter.orders
    const filterSpread: QueryFilter = {
      ...of.number.eq('pippo'),
      ...of.market.reference.eq('pluto'),
      ...of.number.or.reference.or.customer.customer_group.reference.eq('paperino'),
      ...of.status.in('draft', 'approved', 'cancelled'),
      ...of.reference_origin.not_null()
    }

    const filterInstance: QueryFilter = {
      ...Filter.orders.number.eq('pippo'),
      ...Filter.orders.market.reference.eq('pluto'),
      ...Filter.orders.number.or.reference.or.customer.customer_group.reference.eq('paperino'),
      ...Filter.orders.status.in('draft', 'approved', 'cancelled'),
      ...Filter.orders.reference_origin.not_null()
    }

    const filterBuildAll: QueryFilter = buildFilter(
      of.number.eq('pippo'),
      of.market.reference.eq('pluto'),
      of.number.or.reference.or.customer.customer_group.reference.eq('paperino'),
      of.status.in('draft', 'approved', 'cancelled'),
      of.reference_origin.not_null()
    )

    expect(filter).toEqual(filterSpread)
    expect(filterSpread).toEqual(filterInstance)
    expect(filterInstance).toEqual(filterBuildAll)

  })

})
