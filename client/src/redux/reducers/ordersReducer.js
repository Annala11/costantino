import { ordersAT } from "../ActionTypes/ordersAT";

const initialState = {
  orders: [],
  allOrdersForAdmin: [],
  calendarorders : [],
  calendarordersintervals: [],
};

export const ordersReducer = (state = initialState, action) => {
  // const orders= action.payload;//SET_CALENDAR_ORDERS
  // const calendarintervals = [];

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
    case ordersAT.SET_CALENDAR_ORDERS:
      // console.log(orders,'SET_CALENDAR_ORDERS');
      // orders.forEach((order) => {
      //   console.log(order,'order.Services[0]');
      //   calendarintervals.push({ [order.startinterval]: order.Services[0]?.interval });
      // });
      // console.log(calendarintervals,'!!!SET_CALENDAR_ORDERS');
      return {
        ...state,
        calendarorders: action.payload,
        // calendarordersintervals: calendarintervals,
      }

    default:
      return state;
  }
};
