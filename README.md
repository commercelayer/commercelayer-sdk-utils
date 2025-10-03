# Commerce Layer SDK Utils

[![Version](https://img.shields.io/npm/v/@commercelayer/sdk-utils.svg)](https://npmjs.org/package/@commercelayer/sdk-utils)
[![Downloads/week](https://img.shields.io/npm/dw/@commercelayer/sdk-utils.svg)](https://npmjs.org/package/@commercelayer/sdk-utils)
[![License](https://img.shields.io/npm/l/@commercelayer/sdk-utils.svg)](https://github.com/commercelayer/commercelayer-sdk-utils/blob/master/package.json)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Release](https://github.com/commercelayer/commercelayer-sdk-utils/actions/workflows/semantic-release.yml/badge.svg)](https://github.com/commercelayer/commercelayer-sdk-utils/actions/workflows/semantic-release.yml)
[![CodeQL](https://github.com/commercelayer/commercelayer-cli/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/commercelayer/commercelayer-cli/actions/workflows/codeql-analysis.yml)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript%205-%230074c1.svg)](https://www.typescriptlang.org/)

A JavaScript Library that makes even more easier to interact with [Commerce Layer API](https://docs.commercelayer.io/developers) using the official [JavaScript SDK](https://github.com/commercelayer/commercelayer-sdk).

## Installation and usage

#### SDK v6.x

```ts
import CommerceLayer from "@commercelayer/sdk"
import CommerceLayerUtils, { executeBatch } from '@commercelayer/sdk-utils'

const cl = CommerceLayer({ organization, accessToken })
CommerceLayerUtils(cl)

await executeBatch(batch)
```

#### SDK v7.x

Starting from SDK v7 you can take advantage of the tree shaking using only the resources that you really need.

```ts
import CommerceLayer, { orders, customers } from "@commercelayer/sdk"
import CommerceLayerUtils, { retrieveAll } from '@commercelayer/sdk-utils'

const cl = CommerceLayer({ organization, accessToken })
CommerceLayerUtils(cl, [ orders, customers ])

const skus = await retrieveAll<Sku>('skus')
```

Resources can also be added later to CommerceLayerUtils configuration.

```ts
import CommerceLayer, { orders, customers, skus } from "@commercelayer/sdk"
import CommerceLayerUtils from '@commercelayer/sdk-utils'

const cl = CommerceLayer({ organization, accessToken })
const utilsConfig = CommerceLayerUtils(cl)

utilsConfig.addResources(orders, customer)
utilsConfig.addResource(skus)
```

It is always possible to load the resources all together as with SDK v6 using the special bundle client implementation.

```ts
import  { CommerceLayer } from "@commercelayer/sdk/bundle"
import CommerceLayerUtils from '@commercelayer/sdk-utils'

const cl = CommerceLayer({ organization, accessToken })
const utilsConfig = CommerceLayerUtils(cl)
```

---

## Table of helpers

Common functions

- [executeBatch](#executebatch) - execute a list of prepared API requests
- [retrieveAll](#retrieveall) - fetch all existing resources
- [updateAll](#updateall) - apply changes to a set of resources
- [deleteAll](#deleteall) - delete a set of resources
- [retrievePage](#retrievepage) - retrieve a custom page of resources

Cleanups

- [splitCleanup](#splitcleanup) - split a large cleanup in multiple small cleanups
- [executeCleanup](#executecleanup) - split a large cleanup in multiple small cleanups and execute them
- [cleanupsToBatchTasks](#cleanupstobatchtasks) - translate a list of cleanups in executable batch tasks

Exports

- [splitExport](#splitexport) - split a large export in multiple small exports
- [executeExport](#executeexport) - split a large export in multiple small exports and execute them
- [exportsToBatchTasks](#exportstobatchtasks) - translate a list of exports in executable batch tasks

Imports

- [splitImport](#splitimport) - split a large import in multiple small imports
- [executeImport](#executeimport) - split a large import in multiple small imports and execute them
- [importsToBatchTasks](#importstobatchtasks) - translate a list of imports in executable batch tasks

Webhooks

- [denormalizePayload](#denormalizepayload) - parse a webhook payload and transform it in the appropriate SDK object


---

### Common functions

##### executeBatch

This function allows to prepare and then execute a number of API calls without having to worry about current rate limits.

```ts
for (const emailAddress of emailList) {
    const task: Task = {
      resourceType: "customers",
      operation: "create",
      resource: { email: emailAddress } as CustomerCreate,
      onSuccess: { callback: sendEmail },
      onFailure: { errorHandler: handleError }
    }
    tasks.push(task)
  }

  const batch: Batch = {
    tasks,
    options: { refreshToken: refreshAccessToken }
  }


await executeBatch(batch)
```

In the example above the `onSuccess` and `onFailure` callbacks have been used to handle the task result in case of success or failure of the execution.

It's also possible to fill the resource attributes taking values from the result of the previous batch step. In the following example we are updating a resource taking its id from a previous `retrieve` or `create` task:

```ts
const task: Task = {
    resourceType: "customers",
    operation: "update",
    prepareResource: (res: TaskResourceParam, last: TaskResourceResult): TaskResourceParam => {
        return {
          ...res,
          id: last.id,
          reference: 'new-reference'
        }
      }
  }
```

##### retrieveAll

This function allows to fetch all existing resources of a specific type executing all necessary API requests respecting current API rate limits.
The `limit` option can be used to retrieve only a limited number of resources.

```ts
const skus = await retrieveAll<Sku>('skus', { limit: 100 })
```

##### updateAll

This function allows to modify a set of resources of a specific type, using a filter to identify them.

```ts
const skuData = { reference_origin: 'legacy-system-0' }

const filters = { created_at_lt: '2023-01-01' }

const updateResult = await updateAll('skus', skuData, { filters })
```

##### deleteAll

This function allows to delete a set of resources of a specific type, using a filter to identify them.

```ts

const filters = { created_at_lt: '2023-01-01', reference_origin_eq: 'legacy-system-0' }

const deleteResult = await deleteAll('skus', { filters })
```

##### retrievePage

This function allows to fetch a specific subset of resources defining page attributes that are not permitted by the API and using all the standard common filters.
An error will be thrown if the page parameters are not compatible with the number of existing resources.

```ts
 const skus = await retrievePage<Sku>('skus', { pageNumber: 16, pageSize: 139, sort: ['code'] })
```

---

### Cleanups

##### splitCleanup

Split cleanup in multiple cleanups respecting the maximum limit of resources included

```ts
const clp: CleanupCreate = {
 resource_type: 'customers',
 filters: { created_at_gt: '2020-01-01'}
}

const splitClp: CleanupCreate[] = await splitCleanup(clp)
```

##### executeCleanup

Split cleanup in multiple cleanups respecting the maximum limit of resources included and execute them

```ts
const clp: CleanupCreate = {
 resource_type: 'customers',
 filters: { created_at_gt: '2020-01-01'}
}

const execClp: CleanupResult[] = await executeCleanup(clp)
```

##### cleanupsToBatchTasks

Convert a list of cleanups generated by `splitCleanup` to a list of tasks that can be executed by the function `executeBatch`


```ts
const clps = await splitCleanup(clp)

const tasks = cleanupsToBatchTasks(clps)
```

---

### Exports

##### splitExport

Split an export in multiple exports respecting the maximum limit of resources included

```ts
const exp: ExportCreate = {
 resource_type: 'customers',
 filters: { created_at_gt: '2020-01-01'}
}

const splitExp: ExportCreate[] = await splitExport(exp)
```

##### executeExport

Split an export in multiple exports respecting the maximum limit of resources included and execute them

```ts
const exp: ExportCreate = {
 resource_type: 'customers',
 filters: { created_at_gt: '2020-01-01'}
}

const execExp: ExportResult[] = await executeExport(exp)
```

##### exportsToBatchTasks

Convert a list of exports generated by `splitExport` to a list of tasks that can be executed by the function `executeBatch`

```ts
const exps = await splitExport(exp)

const tasks = exportsToBatchTasks(exps)
```

---

### Imports

##### splitImport

Split an import in multiple imports respecting the maximum limit of inputs included

```ts
const exp: ImportCreate = {
 resource_type: 'customers',
 inputs: [
  { ... },
  { ... },
  ...
  { ... }
 ]
}

const splitImp: ImportCreate[] = await splitImport(imp)
```

##### executeImport

Split an import in multiple imports respecting the maximum limit of inputs included and execute them

```ts
const exp: ImportCreate = {
 resource_type: 'customers',
 inputs: [
  { ... },
  { ... },
  ...
  { ... }
 ]
}

const execImp: ImportResult[] = await executeImport(imp)
```

##### importsToBatchTasks

Convert a list of imports generated by `splitImport` to a list of tasks that can be executed by the function `executeBatch`


```ts
const imps = await splitImport(imp)

const tasks = importsToBatchTasks(imps)
```

---


### Webhooks

##### denormalizePayload

This function takes in input the payload of a webhook in JSON format and transform it in the appropriate typed resource to be used with the official Typescript SDK.

```ts
const shipment = denormalizePayload<Shipment>(webhookPayload)
```
