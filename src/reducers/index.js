import inputReducer from "./inputReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  inputValue: inputReducer
});

export default rootReducer;
