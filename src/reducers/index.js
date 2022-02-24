import { combineReducers } from "redux";
import wareReducer from "./wareReducer";

export default combineReducers({
    ware: wareReducer
});