
import type { SdkError, Resource, QueryParamsList } from '@commercelayer/sdk'
import { currentAccessToken, initClient, initialize, cl, utils } from '../test/common'
import { buildFilter, buildInclude, executeBatch, Filter, Include, OrderFilter } from '../src'
import type { Batch, CustomerFilter, InvalidTokenError, Task, TaskResult } from '../src'
import type { PrepareResourceResult, TaskResourceParam, TaskResourceResult } from '../src/batch'
import { sleep } from '../src/common'



beforeAll(async () => {
  await initialize()
})

afterEach(() => {
  jest.resetAllMocks()
})



describe('sdk-utils.helper suite', () => {

  it('helper.include', async () => {

    const helper = Include.new()

    const order = (await cl.orders.list({ include: buildInclude(helper.orders.customer, helper.orders.market) })).first()

    expect(order).toBeDefined()
    expect(order?.market).toBeDefined()
    expect(order?.market?.id).not.toBeNull()
    expect(order?.customer).toBeDefined()
    expect(order?.customer?.id).not.toBeNull()

  })


  it('helper.filter', async () => {

    const reference = String(Date.now())
    const reference_origin = 'sdk-utils-specs'

    const params: QueryParamsList = {
      filters: { customer_group_id_not_null: true },
      pageSize: 1
    }
    
    Include.new().customers.customer_group.addTo(params)

    const customer = (await cl.customers.list(params)).first()
    if (customer && customer.customer_group) {
      await cl.customers.update({ id: customer.id, reference, reference_origin })
      await cl.customer_groups.update({ id: customer.customer_group.id, reference, reference_origin })
    }

    const helper = Filter.new<CustomerFilter>()

    const c = (await cl.customers.list({ filters: buildFilter(
      helper.customers.reference.eq(reference),
      helper.customers.customer_group.reference.eq(reference),
      helper.customers.reference_origin.not_null()
    ), include: [Include.new().customers.customer_group.build()] } )).first()

    expect(c).toBeDefined()
    expect(c?.reference).toBe(reference)
    expect(c?.reference_origin).toBe(reference_origin)
    expect(c?.customer_group?.reference).toBe(reference)

  })

})
