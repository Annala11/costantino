import { reviewsAT } from "../ActionTypes/reviewsAT";

const initialState = {
  reviews: [],
};

export const reviewsReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case reviewsAT.INIT_REVIEWS:
      // return { ...state }
      return { ...state, reviews: action.payload }


    default:
      return state;
  }
};


