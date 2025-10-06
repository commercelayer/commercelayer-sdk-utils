
import { expect, test, beforeAll, afterEach, describe } from 'vitest'
import { Customer, customers, Customers } from '@commercelayer/sdk'
import { initialize, cl } from '../test/common'
import { retrievePage } from '../src'
import { sleep } from '../src/common'
import { currentTokenData } from '../src/util'
import { ApiResourceClient } from '../src/init'



beforeAll(async () => {
  await initialize(customers)
})

afterEach(() => {
  vi.resetAllMocks()
})



describe('sdk-utils.page suite', () => {

  test('page.retrievePage', async () => {

    process.env.CL_SDK_TEST = 'on'

    await sleep(12000)  // await to avoid rate limit due to concurrent requests

    const tokenData = currentTokenData(cl.currentAccessToken)
    const maxPageSizeApi = tokenData.test ? 475 : 950 // Test requires more api requests

    const pageNumberTest = 0
    const pageNumberMaxTest = 0
    const pageSizeTest = 0

    let pageNumber, pageSize, pageNumberMax, pageSizeMax

    const recordCount = await ApiResourceClient('customers').count()

    if (pageNumberTest || pageNumberMaxTest || pageSizeTest) {
      pageNumber = pageNumberTest
      pageNumberMax = pageNumberMaxTest
      pageSize = Math.min(pageSizeTest, maxPageSizeApi)
    }
    else
    do {

      pageSizeMax = Math.floor(recordCount / 2)
      pageSize = Math.min(maxPageSizeApi, Math.floor(Math.random() * pageSizeMax))

      pageNumberMax = Math.ceil(recordCount / pageSize)
      pageNumber = Math.ceil(Math.random() * pageNumberMax)

    } while ((pageNumber > pageNumberMax) || (pageSize > pageSizeMax))

    const customers = await retrievePage<Customer>('customers', { pageNumber, pageSize, sort: ['email'] })

    const startRecord = (pageSize * (pageNumber - 1)) + 1
    const endRecord = Math.min(recordCount, startRecord + pageSize - 1)

    const startResource = (await ApiResourceClient<Customers>('customers').list({ pageNumber: startRecord, pageSize: 1, sort: ['email'] })).first()
    const endResource = (await ApiResourceClient<Customers>('customers').list({ pageNumber: endRecord, pageSize: 1, sort: ['email'] })).first()

    const firstRetrieved = customers.first()
    const lastRetrieved = customers.last()

    const modPageSize = (pageNumber === pageNumberMax)? (recordCount % pageSize) || pageSize : pageSize

    expect(customers.length).toBe(modPageSize)
    expect(startResource?.id).toBe(firstRetrieved?.id)
    expect(endResource?.id).toBe(lastRetrieved?.id)

  }, 0)

})
