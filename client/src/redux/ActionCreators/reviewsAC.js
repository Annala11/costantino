import { reviewsAT } from "../ActionTypes/reviewsAT";

export const initReviewsAC = (payload) => {
  return {
    type: reviewsAT.INIT_REVIEWS,
    payload
  }
}
