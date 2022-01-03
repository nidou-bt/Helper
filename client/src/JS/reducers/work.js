import { CLEAR_ERRORS } from "../constants/user";
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
};
const workReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_WORK:
      return { ...state, isLoad: false, workList: payload.Work_Ads };
    case GET_ONE_WORK:
      return { ...state, workAd: payload.WorkAd, isLoad: false };
    case LOAD_WORK:
      return { ...state, isLoad: true };
    case FAIL_WORK:
      return { ...state, isLoad: false, errors: payload.errors };
    case CLEAR_ERRORS:
      return { ...state, isLoad: false, errors: null };
    default:
      return state;
  }
};
export default workReducer;
