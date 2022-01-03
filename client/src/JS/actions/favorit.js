import axios from "axios";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FAIL_FAVORITE,
  LOAD_FAVORITE,
} from "../constants/favorit";
import { CLEAR_ERRORS } from "../constants/user";
import { getUser } from "./user";

//add from favorit Work Ad
export const addFWork = (favoritidWorkA) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_FAVORITE });
  try {
    await axios.put("/api/user/work/favorit", favoritidWorkA, config);
    dispatch({ type: ADD_FAVORITE });
    dispatch(getUser());
  } catch (error) {
    dispatch({ type: FAIL_FAVORITE, payload: error.response.data });
  }
};
//delete from favorit Work Ad
export const deleteFWork = (favoritidNWorkD) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_FAVORITE });
  try {
    await axios.put("/api/user/work/nofavorit", favoritidNWorkD, config);
    dispatch({ type: DELETE_FAVORITE });
    dispatch(getUser());
  } catch (error) {
    console.log("error", error);
    dispatch({ type: FAIL_FAVORITE, payload: error.response.data });
  }
};
//add from favorit Search Ad
export const addFSearch = (favoritidSearchA) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_FAVORITE });
  try {
    await axios.put("/api/user/search/favorit", favoritidSearchA, config);
    dispatch({ type: ADD_FAVORITE });
    dispatch(getUser());
  } catch (error) {
    dispatch({ type: FAIL_FAVORITE, payload: error.response.data });
  }
};
//delete from favorit Search Ad
export const deleteFSearch = (favoritidNSearchD) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_FAVORITE });
  try {
    await axios.put("/api/user/search/nofavorit", favoritidNSearchD, config);
    dispatch({ type: DELETE_FAVORITE });
    dispatch(getUser());
  } catch (error) {
    console.log("error", error);
    dispatch({ type: FAIL_FAVORITE, payload: error.response.data });
  }
};
//clear errors
export const clearErrorsF = () => {
  return { type: CLEAR_ERRORS };
};
