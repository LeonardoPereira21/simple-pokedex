import { combineReducers } from "redux";
import { capturedReducer } from "./captured";

export default combineReducers({
  captured: capturedReducer,
});
