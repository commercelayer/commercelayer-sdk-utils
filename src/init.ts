import { type ApiResource, CommerceLayerStatic, type Resource, type ResourceTypeLock } from "@commercelayer/sdk"
// Base class of both SDK v8 clients: the bundled one (default entry) extends it,
// and the single-client one (`@commercelayer/sdk/single-client`) is it.
import type { CommerceLayerSingleClient as CommerceLayerClient } from "@commercelayer/sdk/single-client"


/** The client's own instance of a resource: only a bundled client has one */
const clientResource = (cl: CommerceLayerClient, type: ResourceTypeLock): ApiResource<Resource> | undefined => {
	const field = CommerceLayerStatic.isSingleton(type)? type.slice(0, -1) : type
	const res = (cl as any)[field] as ApiResource<Resource> | undefined
	return (res?.type && (res.type() === type))? res : undefined
}


class CommerceLayerUtilsConfig {

	readonly #sdk?: CommerceLayerClient
	#api: Partial<Record<ResourceTypeLock, ApiResource<Resource>>> = {}



	constructor(cl: CommerceLayerClient, resources?: Array<ApiResource<Resource>>) {
		
		if ((cl === undefined) || (cl === null)) throw Error('Invalid Commerce Layer client provided')
		this.#sdk = cl

		if (resources && (resources.length > 0)) this.addApiResources(...resources)

	}


	get sdk(): CommerceLayerClient {
		if (!this.#sdk) throw Error('CommerceLayer Utils not initialized')
		return this.#sdk
	}

	addApiResources(...resources: Array<ApiResource<Resource>>): this {
		if (!resources || (resources.length === 0)) throw Error('Invalid resources array provided')
		resources.forEach(r => {
			this.addApiResource(r)
		})
		return this
	}

	addApiResource(resource: ApiResource<Resource>): this {
		const type = resource.type()
		if (!CommerceLayerStatic.resources().includes(type)) throw Error(`Invalid resource: [${type}]`)
		// A standalone resource sends its requests through the last single client
		// created, not necessarily this one: prefer the client's own instance if any
		this.#api[type] = (this.#sdk && clientResource(this.#sdk, type)) || resource
		return this
	}

	api<A extends ApiResource<Resource>>(resourceType: ResourceTypeLock): A {
		if (!this.#api) throw Error('CommerceLayer Utils API resources not initialized')
		const res = this.#api[resourceType]
		if (!res) throw Error(`Resource [${resourceType}] not available`)
		return res as A
	}

}


let clUtilsConfig: CommerceLayerUtilsConfig


function CommerceLayerUtils(cl?: CommerceLayerClient, resources?: Array<ApiResource<Resource>>): CommerceLayerUtilsConfig {

	if (cl) {

		const resList: Array<ApiResource<Resource>> = resources || []
		if (resList.length === 0) {
			for (const res of cl.resources()) {
				const resApi = clientResource(cl, res as ResourceTypeLock)
				if (resApi && CommerceLayerStatic.resources().includes(resApi.type())) resList.push(resApi)
			}
		}
		
		clUtilsConfig = new CommerceLayerUtilsConfig(cl, resList)
		
	} else if (resources) throw new Error('CommerceLayer SDK is required to initialize resources')
	
	return clUtilsConfig

}


function ApiResourceClient<A extends ApiResource<Resource>>(resourceType: ResourceTypeLock): A {
	return CommerceLayerUtils().api<A>(resourceType)
}

function ApiSdkUtils(): CommerceLayerClient {
	return CommerceLayerUtils().sdk
}



export default CommerceLayerUtils

export { ApiResourceClient, ApiSdkUtils, CommerceLayerUtils, type CommerceLayerUtilsConfig }
