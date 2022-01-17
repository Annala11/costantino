import { categoriesAT } from "../ActionTypes/categoriesAT";

export const initCategoriesAC = (payload) => {
  return {
    type: categoriesAT.INIT_CATEGORIES,
    payload
  }
}
