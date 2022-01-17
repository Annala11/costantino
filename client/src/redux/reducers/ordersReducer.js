import { ordersAT } from "../ActionTypes/ordersAT";

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ordersAT.INIT_ORDERS:
    return {...state,
      orders: action.payload
    }

    default:
      return state;
  }
};
