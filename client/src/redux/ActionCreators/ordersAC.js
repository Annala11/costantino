import { ordersAT } from "../ActionTypes/ordersAT";

export const initOrdersAC = (payload) => {
  return {
    type: ordersAT.INIT_ORDERS,
    payload
  }
}
