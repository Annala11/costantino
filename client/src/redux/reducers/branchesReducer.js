import { branchesAT } from "../ActionTypes/branchesAT";

const initialState = {
};

export const branchesReducer = (state = initialState, action) => {

  switch (action.type) {
    case branchesAT.INIT_BRANCHES:
      return { ...state, branches: action.payload.branches, currentbranchid:action.payload.currentbranchid };
    default:
      return state;
  }
};
