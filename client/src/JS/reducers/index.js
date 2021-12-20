import { combineReducers } from "redux";
import userReducer from "./user";
import searchReducer from "./searchAd";
import workReducer from "./work"
const rootReducer = combineReducers({ userReducer , searchReducer, workReducer});
export default rootReducer;