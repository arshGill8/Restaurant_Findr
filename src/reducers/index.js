import { combineReducers } from "redux";
import restaurantReducer from "reducers/restaurantReducer";

const rootReducer = combineReducers({
  restaurant: restaurantReducer
});


export default rootReducer;
