import type { CommerceLayerBundle } from "@commercelayer/sdk/bundle"


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


const CommerceLayerUtils = (cl?: CommerceLayerBundle): CommerceLayerUtilsConfig => {
	if (cl) clUtilsConfig.sdk = cl
	return clUtilsConfig
}



export default CommerceLayerUtils

export { CommerceLayerUtils, type CommerceLayerUtilsConfig }
