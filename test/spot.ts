import CommerceLayer, { CleanupCreate, ImportCreate } from "@commercelayer/sdk"
import { CommerceLayerUtils, retrieveAll, retrievePage, updateAll } from "../src"
import { executeExport } from "../src/resources/exports"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjliN2JiZmVlMzQzZDVkNDQ5ZGFkODhmMjg0MGEyZTM3YzhkZWFlZTg5NjM4MGQ1ODA2YTc4NWVkMWQ1OTc5ZjAifQ.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOnRydWUsInJlZ2lvbiI6ImV1LXdlc3QtMSJ9LCJhcHBsaWNhdGlvbiI6eyJpZCI6IlZwRFhXaXFrQnAiLCJraW5kIjoiaW50ZWdyYXRpb24iLCJwdWJsaWMiOmZhbHNlfSwic2NvcGUiOiJtYXJrZXQ6YWxsIiwiZXhwIjoxNzIyMDAwMTM0LCJ0ZXN0Ijp0cnVlLCJyYW5kIjowLjQ5MDcyOTY0NjE2NTM4OTUsImlhdCI6MTcyMTk5MjkzNCwiaXNzIjoiaHR0cHM6Ly9jb21tZXJjZWxheWVyLmlvIn0.FwMTXvOHzdq_HmMtmVQPj-QUrBvWVA1IWGmocdiOmzLeyjOF8l1IpAGPeF2lDgPpe1T42eK79sfeYKOClzQXu6ZO0tlDKqoxTDv7VZd0PXeuuSy3HKEeLS2JYzNTmUTxQXIX7RuredjtS03dXT_3DtXaoYlEH-YRr8tb4MwEcVn4U-lDdJkp9laHk0CJenPCKFWICI3t4REdoUHDFnOqFl_onOpzoRnkRjPvsfdytEE2y71eAZStRHEq-71-mzWMk3tqTlJ446b8S54mg2IpRmuUCQRh-7pY5w6tKP4fwu2o5QzyGi01minxI95BxzPS_Qcqn_O7F8CGHA_qjRl0FRn-itimGPjJQoxS26jizssJPkLMxOyAe0RLSP7o1mbm_yxCWVsVKF8XngPJuk839PJJNlQ6KvePjci9V7R7SBM3T31ZZHZxDHFQlAPVjvun5BGPyaiAhkCZ4l8HxkdX_DzWO2yq81eHFTwiqCzWsh3BJ94RnehpTvXpnDVqI5YAn7lK5ViQiBsY3J69FGdUaQKcEXydpck9IYv7bZl562XE0qdMaliOg0MWsTu5hkiTnDwoCuk8zXLLrNUwlNOVWFlwqCzAVGm52227xKDmlXCwWMlK6ldc1mIKp20yqcQCiUQFEPqMUc607ImgB53iqtx_b81M2XL6a2XKNHRUrqo'
const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (): Promise<void> => {

  const pageSize = 500
  const pageNumber = 4

  // const records = await retrievePage('customers', { pageSize, pageNumber })
  const records = await retrieveAll('customers', { limit: 103 })

  console.log(records)

}


void test()
