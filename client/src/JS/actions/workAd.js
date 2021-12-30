import {
  FAIL_WORK,
  GET_ALL_WORK,
  GET_ONE_WORK,
  LOAD_WORK,
} from "../constants/workAd";
import axios from "axios";

//get all work ad
export const getAllWork = () => async (dispatch) => {
  dispatch({ type: LOAD_WORK });
  try {
    let { data } = await axios.get("/api/workad/workads");
    dispatch({ type: GET_ALL_WORK, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_WORK, payload: error.data });
    console.log("error");
  }
};
//get one work ad by id
export const getWorkById = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get(`/api/workad/getid/${id}`, config);
    dispatch({ type: GET_ONE_WORK, payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: FAIL_WORK, payload: error.data });
  }
};
//get all work ad by auth id
export const getAllWorkByAuth = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: LOAD_WORK });
  try {
    let { data } = await axios.get("/api/workad/getauth", config);
    dispatch({ type: GET_ALL_WORK, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_WORK, payload: error.data });
  }
};
//delete work ad by id
export const deleteWorkById = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/workad/delete/${id}`, config);
    dispatch(getAllWork());
  } catch (error) {
    console.log("error", error);
    dispatch({ type: FAIL_WORK, payload: error.data });
  }
};
//add one work ad by id
export const addWorkAd = (workAd, file, navigate) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  let formData = new FormData();
  formData.append("titre", workAd.titre);
  formData.append("adresse", workAd.adresse);
  formData.append("description", workAd.description);
  formData.append("phone", workAd.phone);
  workAd.typeJob.forEach((el, i) =>
    formData.append(`typeJob[${i}]`, workAd.typeJob[i])
  );
  Array.from(file).forEach((el, i) => formData.append("WorkImg", el));
  try {
    await axios.post("/api/workad/add", formData, config);
    dispatch(getAllWork());
    navigate("/profil");
  } catch (error) {
    console.log("error", error);
    dispatch({ type: FAIL_WORK, payload: error.data });
  }
};

//update one work ad by id
export const updateWorkAd = (id, file, updateWork) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  let formData = new FormData();
  formData.append("titre", updateWork.titre);
  formData.append("adresse", updateWork.adresse);
  formData.append("description", updateWork.description);
  formData.append("phone", updateWork.phone);
  updateWork.typeJob.forEach((el, i) =>
    formData.append(`typeJob[${i}]`, updateWork.typeJob[i])
  );
  if (file) {
    Array.from(file).forEach((el) => formData.append("WorkImg", el));
  }

  try {
    await axios.put(`/api/workad/update/${id}`, formData, config);
    dispatch(getAllWork());
  } catch (error) {
    dispatch({ type: FAIL_WORK, payload: error.data });
  }
};
