import { ApiResource, CommerceLayerClient, Resource } from "@commercelayer/sdk"
import { CommerceLayerBundle } from "@commercelayer/sdk/bundle"


class CommerceLayerUtilsConfig {

	#sdk?: CommerceLayerBundle

	set sdk(cl: CommerceLayerBundle) {
		if ((cl === undefined) || (cl === null)) throw Error('Invalid Commerce Layer client provided')
		this.#sdk = cl
	}

	get sdk(): CommerceLayerBundle {
		if (!this.#sdk) throw Error('CommerceLayer Utils not initialized')
		return this.#sdk
	}

}


const clUtilsConfig = new CommerceLayerUtilsConfig()


// type CommerceLayerLegacy = CommerceLayerClient & { [k in keyof CommerceLayerBundle ]: ApiResource<Resource>}


function sdkClientCheck(cl: CommerceLayerBundle): boolean {
	if (!cl) throw new Error('Invalid Commerce Layer client provided: undefined')
	if (!cl.application) throw new Error('Invalid Commerce Layer client provided: only sdk 6 client and sdk 7 bundle client can be used with this sdk-utils')
	return true
}


const CommerceLayerUtils = (cl?: CommerceLayerBundle): CommerceLayerUtilsConfig => {
	if (cl && sdkClientCheck(cl)) clUtilsConfig.sdk = cl
	return clUtilsConfig
}



export default CommerceLayerUtils

export { CommerceLayerUtils, type CommerceLayerUtilsConfig }
