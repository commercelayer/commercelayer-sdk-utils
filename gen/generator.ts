import { generate as generateIncludeHelper } from './include'
import { generate as generateFilterHelper } from './filter'


const DEBUG = process.env.DEBUG_SDK_UTILS
const RESOURCES_REMOTE_URL = 'https://core.commercelayer.io/api/public/resources'


const downloadResources = async (url?: string): Promise<any> => {

	const resourcesUrl = url || RESOURCES_REMOTE_URL

	console.log(`Downloading resources ... [${resourcesUrl}]`)

	const response = await fetch(resourcesUrl)
	const resources = (await response.json()).data

	return resources

}


const generate = async(): Promise<void> => {

  downloadResources()
    .then(async (resources) => {
      await generateIncludeHelper(resources)
      await generateFilterHelper(resources)
    })
    .catch (error => {
      console.log('Error downloading resources: ' + error.message)
      if (DEBUG) console.log(error.cause)
    })

}


void generate()
