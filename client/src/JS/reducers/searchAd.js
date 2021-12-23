import {
  FAIL_SEARCH,
  GET_ALL_SEARCH,
  GET_ONE_SEARCH,
  LOAD_SEARCH,
} from "../constants/searchAd";
const initialState = {
  searchList: [],
  searchAd: {},
  errors: null,
  isLoad: false,
  isAuth: false,
};
const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SEARCH:
      return { ...state, isLoad: false, searchList: payload.Search_Ads,searchAd:{} };
    case GET_ONE_SEARCH:
      return { ...state, searchAd: payload.SearchAd, isLoad: false };
    case LOAD_SEARCH:
      return { ...state, isLoad: true };
    case FAIL_SEARCH:
      return { ...state, isLoad: false, errors: payload.errors };

    default:
      return state;
  }
};

export default searchReducer;
