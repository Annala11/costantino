import { combineReducers } from "redux";
import { branchesReducer } from "./branchesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { ordersReducer } from "./ordersReducer";
import { reviewsReducer } from "./reviewsReducer";
import { servicesReducer } from "./servicesReducer";
import { specialistsReducer } from "./specialistsReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  branches: branchesReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  reviews: reviewsReducer,
  services: servicesReducer,
  specialists: specialistsReducer,
  users: usersReducer,
});

