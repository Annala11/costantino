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

export const updateOrder = (payload) => {
  return {
    type: ordersAT.UPDATE_ORDER,
    payload
  }
}


export const setCalendarOrdersAC = (payload) => {
  return {
    type: ordersAT.SET_CALENDAR_ORDERS,
    payload
  }
}
