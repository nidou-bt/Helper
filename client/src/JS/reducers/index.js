import { combineReducers } from "redux";
import userReducer from "./user";
import searchReducer from "./searchAd";
import workReducer from "./work"
import favoritReducer from "./favorit"
const rootReducer = combineReducers({ userReducer , searchReducer, workReducer, favoritReducer});
export default rootReducer;