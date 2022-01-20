import { reviewsAT } from "../ActionTypes/reviewsAT";


const initialState = {
  reviews: [],
  topReviews:[],
};

export const reviewsReducer = (state = initialState, action) => {

  switch (action.type) {
    case reviewsAT.INIT_REVIEWS:
      return { ...state, reviews: action.payload }

    case reviewsAT.INIT_TOPREVIEWS:
      return { ...state, topReviews: action.payload }

    case reviewsAT.ADD_REVIEW:
      return { ...state, reviews: [...state.reviews, action.payload] }
    default:
      return state;
  }
};


