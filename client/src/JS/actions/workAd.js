

import axios from "axios";
import { FAIL_WORK, GET_ALL_WORK, LOAD_WORK } from "../constants/workAd";

// const config = {
//     headers: {
//       authorization: localStorage.getItem("token"),
//     },
//   };
//get all work ad
export const getAllWork=()=>async(dispatch)=>{
    dispatch({type:LOAD_WORK})
    try {
        let {data}=await axios.get("/api/workad/workads")
        dispatch({type:GET_ALL_WORK, payload:data})
    } catch (error) {
        dispatch({type:FAIL_WORK, payload: error.response.data})
        console.log("error")
    }
}
//get one work ad by id

//get all work ad by auth id
export const getAllWorkByAuth=()=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    dispatch({type:LOAD_WORK})
    try {
        let {data}=await axios.get("/api/workad/getauth",config)
dispatch({type:GET_ALL_WORK, payload:data})
    } catch (error) {
        dispatch({type: FAIL_WORK, payload: error.response.data})
    }
}
//add one work ad by id

//delete work ad by id

//delete many work ad by user id

//update one work ad by id