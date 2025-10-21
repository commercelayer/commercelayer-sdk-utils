import { type Orders, type Sku } from "@commercelayer/sdk"
import CommerceLayerUtils from "../init"



export const availableFreeSkus = async (orderId: string): Promise<Sku[]> => {

  const freeSkus: Sku[] = []

  const order = await CommerceLayerUtils().api<Orders>('orders').retrieve(orderId, { include: ['available_free_skus'], fields: ['available_free_skus'] })

  if (order.available_free_skus?.length) freeSkus.push(...order.available_free_skus)
  
  return freeSkus

}



export const orders = {
  availableFreeSkus
}
