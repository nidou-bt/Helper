import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FAIL_FAVORITE,
  LOAD_FAVORITE,
} from "../constants/favorit";
import { CLEAR_ERRORS } from "../constants/user";

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
    case CLEAR_ERRORS:
      return { ...state, isLoad: false, errors: null };
    default:
      return state;
  }
};
export default favoritReducer;
