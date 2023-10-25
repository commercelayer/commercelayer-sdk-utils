import CommerceLayer, { CleanupCreate, ImportCreate } from "@commercelayer/sdk"
import { CommerceLayerUtils, updateAll } from "../src"
import { executeExport } from "../src/resources/exports"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOmZhbHNlfSwiYXBwbGljYXRpb24iOnsiaWQiOiJWcERYV2lxa0JwIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZX0sInRlc3QiOnRydWUsImV4cCI6MTY5ODIzMTkxMCwicmFuZCI6MC4wNzk0MzUxNzg1NTQ4NDAyOH0.kNrDZLfqr-c2bNLY6zL-Rd27-cpbunwItTmtIhzchiVIqxYmBUuxDpAMPzHwA5lhGbrfnNjNhBYhTUOdeKcyLw'

const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (): Promise<void> => {

  const exports = await executeExport({ resource_type: 'skus' }, { size: 5 })
  console.log(exports)

}


void test()
