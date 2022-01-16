import { categoriesAT } from "../ActionTypes/categoriesAT";

const initialState = {
  categories: [],
  
};

export const categoriesReducer = (state = initialState, action) => {

  switch (action.type) {
    case categoriesAT.INIT_CATEGORIES:

    return {...state, 
      categories: action.payload
    }

    

    default:
      return state;
  }
};
