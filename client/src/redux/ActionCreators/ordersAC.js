import { ordersAT } from "../ActionTypes/ordersAT";

export const initOrdersAC = (payload) => {
  return {
    type: ordersAT.INIT_ORDERS,
    payload
  }
}

export const initOrdersForAdminAC = (payload) => {
  return {
    type: ordersAT.INIT_ORDERS_FOR_ADMIN,
    payload
  }
}
