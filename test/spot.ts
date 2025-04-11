import { CommerceLayer } from "@commercelayer/sdk/bundle"
import { CommerceLayerUtils, denormalizePayload, retrieveAll, retrievePage, updateAll, executeExport } from "../lib"
import type { Order } from "@commercelayer/sdk"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjliN2JiZmVlMzQzZDVkNDQ5ZGFkODhmMjg0MGEyZTM3YzhkZWFlZTg5NjM4MGQ1ODA2YTc4NWVkMWQ1OTc5ZjAifQ.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOnRydWUsInJlZ2lvbiI6ImV1LXdlc3QtMSJ9LCJhcHBsaWNhdGlvbiI6eyJpZCI6IlZwRFhXaXFrQnAiLCJraW5kIjoiaW50ZWdyYXRpb24iLCJwdWJsaWMiOmZhbHNlfSwic2NvcGUiOiJtYXJrZXQ6YWxsIiwiZXhwIjoxNzIzNjI4ODEzLCJ0ZXN0Ijp0cnVlLCJyYW5kIjowLjkwMTM4MTM0ODU2ODk3OTIsImlhdCI6MTcyMzYyMTYxMywiaXNzIjoiaHR0cHM6Ly9jb21tZXJjZWxheWVyLmlvIn0.EbmDqbvopfdsFa2qyqSXkwMbPbq7c5Mw7EUXu8fzHVjAg8yTAPGKLmWgMJ8n5Zb1-AMHOrwP4Gx7IIS4Aqbk3wKvkrgZsixDIe_lefILQaU1ZOvNYj2i6Esfu5GLa7wUPAW4ZdFypb9TMnEAgpvzSEy3E4EOkXiuIQ2bhM-dx3Mx_MYWn0bcveCtSAEdknpdase5KvdNSFZStXScBHh73ToPwnumaSnHkkQRrKjC8kA3bzYmxKYAb6OIUaU0orDqeftfHxTFTHrM8ZyLk5VJ9kmAisrs6DNiXICfuzyTZgcWKc6E9O5CinLL2dg9wYv0V47HCRQRmoLZrwckRW4nkQ0k-6CVXsNVxTIMxphImLsZ_aWdN7Ty8sDzu1pk5BFCb9Utz5RD1x5e7p8D0PZhQztH2jxxNXtC8BDu0SXhs-3mQ1Fly2_XwUQVIytHYifqtugPRiNp2UMmyr42c5xnKSz9-fFRlH3JHe3jLEHZ0DxXCcG_OHasxZYpVdRL74KTSe_gLNm6Z9VVXkJ78H8l7UN6gbDzIXBwv6YuJhoZe-uHFxLAMLGfXq4Wn8WFzg5Uqob3wPgCJgm3js9PSXdJZ4IHTF3LPyKVw_WnCYE9m06nH6iq2-Fp39XoQnMeu-quUM1O4Y9ETnKVIaEKU2WsGH3v_8kqC-31UxKTOqerip4'
const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (): Promise<void> => {
/*
  const pageSize = 500
  const pageNumber = 4

  // const records = await retrievePage('customers', { pageSize, pageNumber })
  const records = await retrieveAll('customers', { limit: 103 })

  console.log(records)
  console.log(records.length)
*/

const order = denormalizePayload<Order>('<order-webhook-payload>')

}


void test()
