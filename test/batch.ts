import { CommerceLayer } from "@commercelayer/sdk/bundle"
import CommerceLayerUtils, { type Batch, type InvalidTokenError, type Task, type TaskResult, executeBatch } from '../src'
import type { CustomerCreate } from "@commercelayer/sdk"

const organization = 'cli-test-org'
const accessToken = 'pippo'
const refreshedAccessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJ3UlBwRUZPRWxSIiwic2x1ZyI6InNkay10ZXN0LW9yZyIsImVudGVycHJpc2UiOmZhbHNlfSwiYXBwbGljYXRpb24iOnsiaWQiOiJWcERYV2lxa0JwIiwia2luZCI6ImludGVncmF0aW9uIiwicHVibGljIjpmYWxzZX0sInRlc3QiOnRydWUsImV4cCI6MTY5NTg5NTYwMCwicmFuZCI6MC42NTUyMTM3NzE2NzgyNzU1fQ.w3QctexjFmF3wz6G9pY_3AoVUirVcjWqgKB44WzWcCtPegE3LaPhiJGd7uM4f6tqkXTUuXh1lCskhxxhdK39xg'

const cl = CommerceLayer({ organization, accessToken })

const utils = CommerceLayerUtils(cl)


const testCreate = async (): Promise<void> => {

  async function print(res: TaskResult, task: Task): Promise<void> {
    console.log('SUCCESS')
    if (!res) console.log('No output')
    else
      if (Array.isArray(res)) for (const r of res) console.log('Creato customer ' + r.id)
      else console.log('Creato customer ' + res.id)
  }

  async function handler(error: Error, task: Task): Promise<boolean> {
    console.log('ERROR')
    console.log(error.message)
    return false
  }

  async function refreshAccessToken(error: InvalidTokenError, task: Task): Promise<string> {
    console.log('Refreshed access token')
    return refreshedAccessToken
  }


  const tasks: Task[] = []


  const NUM_REQUESTS = 5
  const NUM_TEST = 15

  for (let i = 0; i < NUM_REQUESTS; i++) {
    const task: Task = {
      resourceType: "customers",
      operation: "create",
      resource: {
        email: `batchuser_longtask_${String(NUM_TEST).padStart(2, '0')}_${i}@cli-test.org`
      } as CustomerCreate,
      onSuccess: { callback: print },
      onFailure: { errorHandler: handler }
    }
    tasks.push(task)
  }

  const b: Batch = {
    tasks,
    options: {
      refreshToken: refreshAccessToken
    }
  }

  try {
    await executeBatch(b)
  } catch (error: any) {
    console.log(error.message)
  }

}



const testList = async (): Promise<void> => {

  async function print(res: TaskResult, task: Task): Promise<void> {
    if (!res) console.log('No output')
    else
      if (Array.isArray(res)) for (const r of res) console.log('Creato customer ' + r.id)
      else console.log('Creato customer ' + res.id)
  }

  async function handler(error: Error, task: Task): Promise<boolean> {
    console.log(error)
    return false
  }

  const tasks: Task[] = []


  const NUM_REQUESTS = 100
  const NUM_TEST = 11

  for (let i = 0; i < NUM_REQUESTS; i++) {
    const task: Task = {
      resourceType: "customers",
      operation: "create",
      resource: {
        email: `batchuser_longtask_${String(NUM_TEST).padStart(2, '0')}_${i}@cli-test.org`
      } as CustomerCreate,
      onSuccess: { callback: print },
      onFailure: { errorHandler: handler }
    }
    tasks.push(task)
  }

  const b: Batch = {
    tasks
  }

  try {
    await executeBatch(b)
  } catch (error: any) {
    console.log(error.message)
  }

}


void testCreate()
