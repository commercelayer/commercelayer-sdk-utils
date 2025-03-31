import CommerceLayer, { CleanupCreate, Customer, CustomerUpdate, ImportCreate } from "@commercelayer/sdk"
import { CommerceLayerUtils, updateAll } from "../src"
import { executeExport } from "../src/resources/exports"
import { Batch, executeBatch, resolvePlaceholders } from "../src/batch"
import { initialize } from "./common"



const test = async (): Promise<void> => {
/*
  const pageSize = 500
  const pageNumber = 4

  const utils = await initialize()
  const cl = utils.sdk

  const batch: Batch = {
    tasks: [
      {
        resourceType: 'customers',
        operation: 'list',
        params: { pageSize: 1 }
      },
      {
        resourceType: 'customers',
        operation: 'update',
        resource: {
          id: '{{id}}',
          email: 'x_{{email}}',
          reference: 'id:{{id}}_email:{{email}}',
          reference_origin: '{{pippo}}'
        }
      },
      {
        resourceType: 'customers',
        operation: 'retrieve',
        resource: {
          id: '{{id}}',
          type: 'customers'
        }
      }
    ]
  } 

  const result = await executeBatch(batch)
  console.log(result)

  console.log(batch.tasks[2].onSuccess?.result)

}


void test()
