import {
  CommerceLayer,
  type CommerceLayerClient,
  CommerceLayerStatic,
  type Customer,
  type ResourceTypeLock,
} from '@commercelayer/sdk'
import { customers, orders, CommerceLayer as SingleClient } from '@commercelayer/sdk/single-client'
import { beforeAll, describe, expect, test } from 'vitest'
import { CommerceLayerUtils, retrieveAll, retrievePage } from '../src'
import { ApiResourceClient } from '../src/init'
import { API_VERSION, domain, GLOBAL_TIMEOUT, organization } from '../test/common'
import getToken from '../test/token'

// The other specs use the single client from `@commercelayer/sdk/single-client`
// and pass their resources explicitly. Here the default entry's bundled client
// is passed alone, so every resource must be discovered from it.

let cl: CommerceLayerClient

beforeAll(async () => {
  const token = await getToken('integration')
  if (token === null) throw new Error('Unable to get access token')
  cl = CommerceLayer({ organization, accessToken: token.accessToken, domain, apiVersion: API_VERSION })
  cl.config({ timeout: GLOBAL_TIMEOUT })
  CommerceLayerUtils(cl)
})

describe('sdk-utils.bundle suite', () => {
  test('bundle.resources', () => {
    const resources = CommerceLayerStatic.resources() as ResourceTypeLock[]
    expect(resources.length).toBeGreaterThan(0)
    for (const type of resources) {
      const field = CommerceLayerStatic.isSingleton(type) ? type.slice(0, -1) : type
      expect(ApiResourceClient(type), type).toBe((cl as any)[field])
    }
  })

  test('bundle.retrieveAll', async () => {
    const limit = 30 // more than one page (page_max_size is 25)
    const customers = await retrieveAll<Customer>('customers', { limit })
    const count = await cl.customers.count()
    expect(customers.length).toBe(Math.min(limit, count))
    expect(customers.first()?.type).toBe('customers')
  })

  test('bundle.retrievePage', async () => {
    const pageSize = 5
    const page = await retrievePage<Customer>('customers', { pageSize, pageNumber: 1 })
    const list = await cl.customers.list({ pageSize, pageNumber: 1, sort: { id: 'asc' } })
    expect(page.length).toBe(list.length)
  })

  test('bundle.standalone-resources', async () => {
    // Standalone resources are bound to the last single client created, so the
    // bundled client's own instances must be registered in their place
    CommerceLayerUtils(cl, [customers, orders])
    expect(ApiResourceClient('customers')).toBe(cl.customers)
    expect(ApiResourceClient('orders')).toBe(cl.orders)
    // A single client for another organization would intercept the requests
    SingleClient({ organization: 'other-org', accessToken: 'fake-token', apiVersion: API_VERSION })
    const customerList = await retrieveAll<Customer>('customers', { limit: 1 })
    expect(customerList.first()?.type).toBe('customers')
    CommerceLayerUtils(cl)
  })
})
