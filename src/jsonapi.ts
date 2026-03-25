import type { Resource, ResourceType } from "@commercelayer/sdk"
import type { DocWithData, Included, ResourceIdentifierObject, ResourceObject } from "jsonapi-typescript"
import { config } from "./config"

const findIncluded = (rel: ResourceIdentifierObject, included: Included = []): ResourceObject | undefined => {
  const inc = included.find(inc => {
    return (rel.id === inc.id) && (rel.type === inc.type)
  })
  return inc || rel
}


const denormalizeResource = <T extends ResourceType>(res: any, included?: Included, chain: ResourceIdentifierObject[] = []): T => {

  if (!res) return res

  const resource = {
    id: res.id,
    type: res.type,
    ...res.attributes,
  }

  if (res.relationships) Object.keys(res.relationships as object).forEach(key => {
    const rel: ResourceIdentifierObject = res.relationships[key].data
    if (rel) {
      if (chain.filter(r => (r.id === rel.id) && (r.type === rel.type)).length >= config.webhooks.jsonapi.maxResourceIncluded) resource[key] = rel
      if (Array.isArray(rel)) resource[key] = rel.map((r: ResourceIdentifierObject) => denormalizeResource<ResourceType>(findIncluded(r, included), included, [...chain, r]))
      else resource[key] = denormalizeResource<ResourceType>(findIncluded(rel, included), included, [...chain, rel])
    } else if (rel === null) resource[key] = null
  })


  return resource

}



const denormalizeObject = <R extends Resource>(response: DocWithData): R | R[] => {

	if (!response) return response

	let denormalizedResponse: any

	if (response.links) delete response.links

	const data = response.data
	const included = response.included

	if (!data) denormalizedResponse = data
	else {
		if (Array.isArray(data)) denormalizedResponse = data.map(res => denormalizeResource<R>(res, included))
		else denormalizedResponse = denormalizeResource<R>(data, included)
	}

	return denormalizedResponse

}


const denormalizeJson = <R extends Resource>(response: string): R | R[] => {
  return denormalizeObject<R>(JSON.parse(response))
}


export const denormalizeResponse = <R extends Resource>(response: DocWithData | string): R | R[] => {
  if (typeof response === 'string') return denormalizeJson<R>(response)
  return denormalizeObject<R>(response)
}
