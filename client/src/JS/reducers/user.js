import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,

} from "../constants/user";

const initialState = {
  user: null,
  errors: null,
  isLoad: false,
  isAuth: false,
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, isLoad: true };
    // case REGISTER_USER:
      // localStorage.setItem("token", payload.token);
      // return { ...state, isLoad: false, user: payload.user, isAuth: true };
      // return { ...state, isLoad: false,  isAuth: false };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, isLoad: false, user: payload.user, isAuth: true };
    case FAIL_USER:
      return { ...state, isLoad: false, errors: payload.errors };
    case CURRENT_USER:
      return {
        ...state,
        user: payload.user,
        isLoad: false,
        isAuth: true,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token")
      return { user: null, errors: null, isLoad: false, isAuth: false };
    default:
      return state;
  }
};
export default userReducer;
