import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FAIL_FAVORITE,
  LOAD_FAVORITE,
} from "../constants/favorit";

const initialState = {
  addFavorit: false,
  deleteFavorit: false,
  errors: null,
  isLoad: false,
};
const favoritReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, isLoad: false, addFavorit: true, errors: null };
    case DELETE_FAVORITE:
      return { ...state, isLoad: false, deleteFavorit: true, errors: null };
    case LOAD_FAVORITE:
      return { ...state, isLoad: true };
    case FAIL_FAVORITE:
      return { ...state, isLoad: false, errors: payload.errors };
    default:
      return state;
  }
};
export default favoritReducer;
