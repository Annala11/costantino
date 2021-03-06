import { servicesAT } from "../ActionTypes/servicesAT";

const initialState = {
  services: [],
};

export const servicesReducer = (state = initialState, action) => {

  switch (action.type) {
    case servicesAT.INIT_SERVICES:

      return {
        ...state,
        services: action.payload
      }

    default:
      return state;
  }
};
