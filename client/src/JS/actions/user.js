import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../constants/user";
import axios from "axios";

//register
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    await axios.post("/api/user/register", newUser);
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
  const config = {
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
//update user
// export const updateUser=(id,user,navigate)=>async(dispatch)=>{
//   dispatch({type:LOAD_USER});
//   try {
//     await axios.put(`/api/user/${id}`,user)
//     dispatch()
//   } catch (error) {
    
//   }
// }
