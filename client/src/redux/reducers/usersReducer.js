import { usersAT } from "../ActionTypes/usersAT";

const initialState = {
  user: [],
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersAT.INIT_USER:
      return { ...state, user: action.payload };

    case usersAT.INIT_ERROR_USER:
      return { ...state, error: action.payload.error };

    case usersAT.USER_LOGOUT:
      return { ...state, user: false };

    default:
      return state;
  }
}
