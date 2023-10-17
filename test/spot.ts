import CommerceLayer, { ImportCreate } from "@commercelayer/sdk"
import { CommerceLayerUtils, splitImport, updateAll } from "../lib/cjs"



const organization = 'sdk-test-org'
const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOmZhbHNlfSwiYXBwbGljYXRpb24iOnsiaWQiOiJWcERYV2lxa0JwIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZX0sInRlc3QiOnRydWUsImV4cCI6MTY5Njg1MDc4NCwicmFuZCI6MC40Nzk0NTI1MDYzMDkwNDYxfQ.JEgRTn_R8epchLHYbnSf_LiidbZNwFi5UBGS4BTlthssm2b3RJb2SW6fsX-g2Oh5zgnD9rNVhqorfRahzVLhbw'

const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const test = async (): Promise<void> => {

  const inputs: Record<string, any>[] = []

  for (let i = 0; i < 1000; i++) {
    inputs.push({ attr: 'input_' + i })
  }

  const ic: ImportCreate = {
    resource_type: 'customers',
    inputs
  }

  const imports = splitImport(ic, 100)

  console.log(imports)

}


void test()
