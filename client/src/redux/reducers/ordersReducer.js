import { ordersAT } from "../ActionTypes/ordersAT";

const initialState = {
  orders: [],
  calendarorders : []
};

export const ordersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ordersAT.INIT_ORDERS:
      return {
        ...state,
        orders: action.payload
      }

    case ordersAT.SET_CALENDAR_ORDERS:
      return {
        ...state,
        calendarorders: action.payload
      }

    default:
      return state;
  }
};
