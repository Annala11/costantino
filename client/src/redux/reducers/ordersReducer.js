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
    case ordersAT.UPDATE_ORDER:
      return {
        ...state,
        allOrdersForAdmin: state.allOrdersForAdmin.map(order => {
          if (order.id === action.payload.id) {
            return {
              ...order,
              user_id: action.payload.user_id,
              specialist_id: action.payload.specialist_id,
              status: action.payload.status,
              startinterval: action.payload.startinterval,
              date: action.payload.date
            }
          } else {
            return order
          }
        })
      }
    default:
      return state;
  }
};
