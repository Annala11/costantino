import { ordersAT } from "../ActionTypes/ordersAT";

export const initOrdersAC = (payload) => {
  return {
    type: ordersAT.INIT_ORDERS,
    payload
  }
}

export const setCalendarOrdersAC = (payload) => {
  return {
    type: ordersAT.SET_CALENDAR_ORDERS,
    payload
  }
}
