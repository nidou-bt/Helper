import { FAIL_SEARCH, GET_ALL_SEARCH, GET_ONE_SEARCH, LOAD_SEARCH } from "../constants/searchAd"
import axios from "axios";

//get all Search ad
export const getAllSearch=()=>async(dispatch)=>{
    dispatch({type:LOAD_SEARCH})
    try {
        let {data} =await axios.get("/api/searchad/searchads")
        dispatch({type:GET_ALL_SEARCH, payload:data})
    } catch (error) {
        dispatch({type: FAIL_SEARCH, payload: error.response.data})
        console.log("error")
    }
}
//get one Search ad by id done
export const getSearchById=(id)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
        let {data} =await axios.get(`/api/searchad/getid/${id}`,config)
        dispatch({type:GET_ONE_SEARCH, payload:data})
    } catch (error) {
        dispatch({type: FAIL_SEARCH, payload: error.response.data})
    }
}
//get all Search id by auth id
export const getAllSearchByAuth=()=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    dispatch({type:LOAD_SEARCH})
    try {
        let {data}=await axios.get("/api/searchad/getauth",config)
dispatch({type:GET_ALL_SEARCH, payload:data})
    } catch (error) {
        dispatch({type: FAIL_SEARCH, payload: error.response.data})
    }
}
//delete Search ad by id
export const deleteSearchById=(id)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
        await axios.delete(`/api/searchad/delete/${id}`,config)
        dispatch(getAllSearch())
    } catch (error) {
        dispatch({type: FAIL_SEARCH, payload: error.response.data})
    }
}
//update one Search ad by id
export const updateSearchById=(id,file,updateSearch)=>async(dispatch)=>{
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
        console.log("updateSearch",updateSearch)
        await axios.put(`/api/searchad/update/${id}`,updateSearch,config);
        dispatch(getAllSearch())
    } catch (error) {
        console.log("errorrr")
        dispatch({type: FAIL_SEARCH, payload: error.response.data})
    }
}
//add Search Ad 
// export const addSearchAd=(searchAd)=>async(dispatch)=>{
//     dispatch({type:LOAD_SEARCH})
//     try {
//         await axios.post("/api/searchad/add",searchAd)
//         dispatch(getAllSearch())
//     } catch (error) {
//         dispatch({type: FAIL_SEARCH, payload: error.response.data})
//     }
// }