import { specialistsAT } from "../ActionTypes/specialistsAT";

const initialState = {
  specialists: [],
};

export const specialistsReducer = (state = initialState, action) => {

  switch (action.type) {

    case specialistsAT.INIT_SPECIALISTS:
      return {
        ...state,
        specialists: action.payload
      }

    default:
      return state;
  }
};
