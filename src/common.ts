import { type ApiError, CommerceLayerStatic } from "@commercelayer/sdk"


/** Await ms milliseconds */
export const sleep = async (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

/** Generite unique ID */
export const groupUID = (): string => {

	const firstPart = Math.trunc(Math.random() * 46_656)
	const secondPart = Math.trunc(Math.random() * 46_656)
	const firstPartStr = ('000' + firstPart.toString(36)).slice(-3)
	const secondPartStr = ('000' + secondPart.toString(36)).slice(-3)
  
	return firstPartStr + secondPartStr
  
  }


export const invalidToken = (error: Error | unknown): error is ApiError => {
	return CommerceLayerStatic.isApiError(error) && (error.status === 401) && (error.first().code === 'INVALID_TOKEN')
}
