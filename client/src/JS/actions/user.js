import {
  CLEAR_ERRORS,
  CURRENT_USER,
  FAIL_USER,
  GET_USER,
  GET_USERS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../constants/user";
import axios from "axios";

//register
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    await axios.post("/api/user/register", newUser);
    dispatch({ type: REGISTER_USER });
    navigate("/login");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//Login
export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let { data } = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
    navigate("/profil");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//currently
export const current = () => async (dispatch) => {
  let config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_USER });
  try {
    let { data } = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//Logout
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
//get one user by token
export const getUser = () => async (dispatch) => {
  let config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_USER });
  try {
    let { data } = await axios.get("/api/user/gettoken", config);
    dispatch({ type: GET_USER, payload: data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

//update user
export const updateUser = (user) => async (dispatch) => {
  let config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put("/api/user/update", user, config);
    dispatch(getUser());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//get all users
export const getUsers=()=>async(dispatch)=>{
  let config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get("/api/user/users", config);
    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
}
//delete one user

export const deleteUser=(id)=>async(dispatch)=>{
  let config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_USER });
  try {
    await axios.delete(`/api/user/delete/${id}`, config);
    dispatch(getUsers())
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
}
//clear errors
export const clearErrors=()=>{
  return ({type:CLEAR_ERRORS})
}