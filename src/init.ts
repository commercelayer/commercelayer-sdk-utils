import { CommerceLayerStatic, type ApiResource, type CommerceLayerClient, type Resource, type ResourceTypeLock } from "@commercelayer/sdk"


class CommerceLayerUtilsConfig {

	readonly #sdk?: CommerceLayerClient
	#api: Partial<Record<ResourceTypeLock, ApiResource<Resource>>> = {}



	constructor(cl: CommerceLayerClient, resources?: Array<ApiResource<Resource>>) {
		
		if ((cl === undefined) || (cl === null)) throw Error('Invalid Commerce Layer client provided')
		this.#sdk = cl

		if (resources && (resources.length > 0)) this.addApiResources(...resources)

	}


	get sdk(): CommerceLayerClient {
		if (!this.#sdk) throw Error('CommerceLayerUtils not initialized with SDK instance')
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

const CommerceLayerUtils = (cl?: CommerceLayerClient): CommerceLayerUtilsConfig => {
	if (cl) {
		if (!cl.application) throw Error('Only SDK 6 client is supported')
		else clUtilsConfig.sdk = cl
	}
	return clUtilsConfig

}


function ApiResourceClient<A extends ApiResource<Resource>>(resourceType: ResourceTypeLock): A {
	return CommerceLayerUtils().api<A>(resourceType)
}

function ApiSdkUtils(): CommerceLayerClient {
	return CommerceLayerUtils().sdk
}



export default CommerceLayerUtils

export { CommerceLayerUtils, ApiResourceClient, ApiSdkUtils, type CommerceLayerUtilsConfig }
