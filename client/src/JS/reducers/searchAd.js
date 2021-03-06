import {
  FAIL_SEARCH,
  GET_ALL_SEARCH,
  GET_ONE_SEARCH,
  LOAD_SEARCH,
} from "../constants/searchAd";
import { CLEAR_ERRORS } from "../constants/user";
const initialState = {
  searchList: [],
  searchAd: {},
  errors: null,
  isLoad: false,
};
const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SEARCH:
      return {
        ...state,
        isLoad: false,
        searchList: payload.Search_Ads,
        searchAd: {},
      };
    case GET_ONE_SEARCH:
      return { ...state, searchAd: payload.SearchAd, isLoad: false };
    case LOAD_SEARCH:
      return { ...state, isLoad: true };
    case FAIL_SEARCH:
      return { ...state, isLoad: false, errors: payload.errors };
    case CLEAR_ERRORS:
      return { ...state, isLoad: false, errors: null };
    default:
      return state;
  }
};

export default searchReducer;
