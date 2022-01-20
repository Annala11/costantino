import { reviewsAT } from "../ActionTypes/reviewsAT";

export const initReviewsAC = (payload) => {
  return {
    type: reviewsAT.INIT_REVIEWS,
    payload
  }
}

export const initTopReviewsAC = (payload) => {
  return {
    type: reviewsAT.INIT_TOPREVIEWS,
    payload
  }
}

export const addReviewAC = (payload) => {
  return {
    type: reviewsAT.ADD_REVIEW,
    payload
  }
}
