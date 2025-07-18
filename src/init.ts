import type { CommerceLayerClient } from "@commercelayer/sdk";


class CommerceLayerUtilsConfig {

	#sdk?: CommerceLayerClient

	set sdk(cl: CommerceLayerClient) {
		if ((cl === undefined) || (cl === null)) throw Error('Invalid Commerce Layer client provided')
		this.#sdk = cl
	}

	get sdk(): CommerceLayerClient {
		if (!this.#sdk) throw Error('CommerceLayer Utils not initialized')
		return this.#sdk
	}

}


const clUtilsConfig = new CommerceLayerUtilsConfig()


const CommerceLayerUtils = (cl?: CommerceLayerClient): CommerceLayerUtilsConfig => {
	if (cl) {
		if (!cl.application) throw Error('Only SDK 6 client is supported')
		else clUtilsConfig.sdk = cl
	}
	return clUtilsConfig
}



export default CommerceLayerUtils

export { CommerceLayerUtils, type CommerceLayerUtilsConfig }
