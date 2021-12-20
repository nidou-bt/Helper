import {
  FAIL_WORK,
  GET_ALL_WORK,
  GET_ONE_WORK,
  LOAD_WORK,
} from "../constants/workAd";

const initialState = {
  workList: [],
  workAd: {},
  errors: null,
  isLoad: false,
  isAuth: false,
};
const workReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_WORK:
      return { ...state, isLoad: false, workList: payload.Work_Ads };
    case GET_ONE_WORK:
      return { ...state, workAd: payload.workAd, isLoad: false };
    case LOAD_WORK:
      return { ...state, isLoad: true };
    case FAIL_WORK:
      return { ...state, isLoad: false, errors: payload.errors };
    default:
      return state;
  }
};
export default workReducer;
