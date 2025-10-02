import { CommerceLayerStatic, type ApiResource, type CommerceLayerClient, type Resource, type ResourceTypeLock } from "@commercelayer/sdk"


class CommerceLayerUtilsConfig {

	readonly #sdk?: CommerceLayerClient
	#api: Partial<Record<ResourceTypeLock, ApiResource<Resource>>> = {}



	constructor(cl: CommerceLayerClient, resources?: Array<ApiResource<Resource>>) {
		
		if ((cl === undefined) || (cl === null)) throw Error('Invalid Commerce Layer client provided')
		this.#sdk = cl

		if (resources && (resources.length > 0)) this.addResources(...resources)

	}


	get sdk(): CommerceLayerClient {
		if (!this.#sdk) throw Error('CommerceLayer Utils not initialized')
		return this.#sdk
	}

	addResources(...resources: Array<ApiResource<Resource>>): this {
		if (!resources || (resources.length === 0)) throw Error('Invalid resources array provided')
		resources.forEach(r => {
			this.addResource(r)
		})
		return this
	}

	addResource(resource: ApiResource<Resource>): this {
		const type = resource.type()
		if (CommerceLayerStatic.resources().includes(type)) this.#api[type] = resource
		else throw Error(`Invalid resource: [${type}]`)
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
				const resField = CommerceLayerStatic.isSingleton(res as ResourceTypeLock)? res.slice(0, -1) : res
				const resApi = (cl as any)[resField] as ApiResource<Resource>
				if (resApi?.type && CommerceLayerStatic.resources().includes(resApi.type())) resList.push(resApi)
			}
		}
		
		clUtilsConfig = new CommerceLayerUtilsConfig(cl, resList)
		
	} else if (resources) throw new Error('CommerceLayer SDK is required to initialize resources')
	
	return clUtilsConfig

}



export default CommerceLayerUtils

export { CommerceLayerUtils, type CommerceLayerUtilsConfig }
