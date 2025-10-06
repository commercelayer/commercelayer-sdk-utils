import getToken from './token'
import { CommerceLayer, type CommerceLayerClient as CommerceLayerClient, ApiResource, Resource } from '@commercelayer/sdk'	// '@commercelayer/sdk/bundle'
import dotenv from 'dotenv'
import { inspect } from 'util'
import { CommerceLayerUtils, CommerceLayerUtilsConfig } from '../src'


dotenv.config()

export const GLOBAL_TIMEOUT = 15000

const organization = process.env.CL_SDK_ORGANIZATION as string
const domain = process.env.CL_SDK_DOMAIN as string

export { organization, domain }

const INTERCEPTOR_CANCEL = 'TEST-INTERCEPTED'
const REQUEST_TIMEOUT = 5550


export const TestData = {
	id: 'testId',
	reference: 'sdk-test',
	reference_origin: 'cl-sdk',
	metadata: {
		meta_key_1: 'meta_value_1',
	}
} as const



export let currentAccessToken: string
export let cl: CommerceLayerClient
export let utils: CommerceLayerUtilsConfig


export const initialize = async (...resources: ApiResource<Resource>[]): Promise<CommerceLayerUtilsConfig> => {
	cl = await getClient(true)
	utils = CommerceLayerUtils(cl)
	if (resources?.length > 0) utils.addApiResources(...resources)
	return utils
}


const initClient = async (): Promise<CommerceLayerClient> => {

	const token = await getToken('integration')
	if (token === null) throw new Error('Unable to get access token')

	const accessToken = token.accessToken
	currentAccessToken = accessToken
	
	const client = CommerceLayer({ organization, accessToken, domain })
	client.config({ timeout: GLOBAL_TIMEOUT })

	try { vi.setConfig({ testTimeout: GLOBAL_TIMEOUT })  } catch(err: any) {}

	return client

}


const fakeClient = async (): Promise<CommerceLayerClient> => {
	const accessToken = 'fake-access-token'
	const client = CommerceLayer({ organization, accessToken, domain })
	currentAccessToken = accessToken
	return client
}

const getClient = (instance?: boolean): Promise<CommerceLayerClient> => {
	return instance ? initClient() : fakeClient()
}

const printObject = (obj: unknown): string => {
	return inspect(obj, false, null, true)
}


export { initClient, fakeClient, getClient, printObject }



const handleError = (error: any) => {
	if (error.message !== INTERCEPTOR_CANCEL) throw error
}


const randomValue = (type: string, name?: string): any | Array<any> => {

	const numbers = [0, 1, 10, 100, 1000, 10000, 5, 55, 555, 12345, 6666]
	const strings = ['alfa', 'beta', 'gamma', 'delta', 'epsilon', 'kappa', 'lambda', 'omega', 'sigma', 'zeta']
	const booleans = [true, false, true, false, true, false, true, false, true, false]
	const objects = [{ key11: 'val11' }, { key21: 'val21' }, { key31: 'val31' }, { key41: 'val41' }, { key51: 'val51' }]

	let values: Array<string | number | boolean | object>

	if (name) {
		// type = 
	}

	if (type.startsWith('boolean')) values = booleans
	else
	if (type.startsWith('integer') || type.startsWith('number')) values = numbers
	else
	if (type.startsWith('fload') || type.startsWith('decimal')) values = numbers
	else
	if (type.startsWith('object')) values = objects
	else
	if (type.startsWith('string')) values = strings
	else values = strings

	let value = values[Math.floor(Math.random() * (values.length - 1))]

	if (type === 'string') value = `${value}_${Math.floor(Math.random() * 100)}`

	if (type.endsWith('[]')) value = [ value ]

	return value

}


export { handleError, randomValue }
