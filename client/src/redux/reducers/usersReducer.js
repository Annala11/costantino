import { usersAT } from "../ActionTypes/usersAT";

const initialState = {
  users: {},
  error: null
};

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case usersAT.INIT_USER:
      return { ...state, user: action.payload };

    case usersAT.INIT_ERROR_USER:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
