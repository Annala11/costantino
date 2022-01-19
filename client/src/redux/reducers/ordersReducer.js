import { ordersAT } from "../ActionTypes/ordersAT";

const initialState = {
  orders: [],
  allOrdersForAdmin: []
};

export const ordersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ordersAT.INIT_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    case ordersAT.INIT_ORDERS_FOR_ADMIN:
      return {
        ...state,
        allOrdersForAdmin: action.payload
      }

    default:
      return state;
  }
};
