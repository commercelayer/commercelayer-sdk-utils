import { CommerceLayer } from "@commercelayer/sdk/bundle"
import { CommerceLayerUtils, retrieveAll, retrievePage } from "../src"
import type { Order } from "@commercelayer/sdk"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjliN2JiZmVlMzQzZDVkNDQ5ZGFkODhmMjg0MGEyZTM3YzhkZWFlZTg5NjM4MGQ1ODA2YTc4NWVkMWQ1OTc5ZjAifQ.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOnRydWUsInJlZ2lvbiI6ImV1LXdlc3QtMSJ9LCJhcHBsaWNhdGlvbiI6eyJpZCI6IlZwRFhXaXFrQnAiLCJjbGllbnRfaWQiOiJ5T0lKMXMzZXotaGkxVmhJbFZrMzBGZTdFSzE1Mml4bmZHTjF6RWtpWDBJIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZSwiY29uZmlkZW50aWFsIjp0cnVlfSwic2NvcGUiOiJtYXJrZXQ6YWxsIiwiZXhwIjoxNzU5NzQ1NDI2LCJ0ZXN0Ijp0cnVlLCJyYW5kIjowLjEzMDIxMjg3ODM4Mzg5MDE3LCJpYXQiOjE3NTk3MzgyMjYsImlzcyI6Imh0dHBzOi8vYXV0aC5jb21tZXJjZWxheWVyLmlvIn0.c-q5S6m3LeVXPGHRaFQKopMrC93awNR3mVHBYOZmbEF6k3v2qtFGPDZ5WeqRk6QpKVJGGDH9BQZ04DUr7s9pPZJYHYP04k4BPxiNqlej7g4Sppg7sE89hkKVqfYyKHSAULTtRwpR8GOeUEZRPcRBu9xuq69AASVPdTy-iSpVPXHgDv_iS8pmZpZWFSZh5w0qx6iCQlmyFn7TsU1QjDzJhhiixS_0YYtcH-38kgz5OU7jLMzvYULe_bxg6SCk83lhAkgjNRwpFMCHe4Rgq-I7I5nusGDcdgePKELYPR1v9LxzOejrPjmDW8z8LGnCIdjVz3JHE_81qg6Jfd5WjrwJTUOBFQ7EsLL-SxJXr0Gc_ywOObLFifzG1uGjmvMjwOapII2hTMBdtFUmer9ko00x_qf4miMBfMklUw_pQqJBsOnqMEL7wL8SbjfbM5Tul9se5uda8fC0_f5U0W9PXQneBtGDvZxrT8AJyOporOBaLq4CIbJ7k8Ksijf5DLiLpxB7ggefEGC-OPyfvaobyhwv1tSEKGdGFGsrocOZQahST8VAd1alaTN8RKyhQ-fpKA69dnfldR_9XPayddTFRPjxM3mrX_mrwtbsEdIOjzba_sLzxsbk7GRlAa0jYHf6llnboXNnw7xmHtkPcBWP3AOsHm8AYbDQ2j7pps49duu3gIw'
const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (): Promise<void> => {

  const pageSize = 500
  const pageNumber = 4

  // const records = await retrievePage('customers', { pageSize, pageNumber })
  const records = await retrieveAll('customers', { limit: 103 })

  console.log(records)
  console.log(records.length)

  // const order = denormalizePayload<Order>('<order-webhook-payload>')

}


void test()
