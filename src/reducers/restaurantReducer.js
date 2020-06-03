import {
  RESTAURANTS_REQUEST,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_FAILED,
} from "constants/ActionTypes";

const initialState = {
  city: "",
  isFetching: false,
  isInvalid: false,
  restaurants: [],
  name: [],
  address: {},
  area: {},
  // add new state stuff here
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS_REQUEST:
      return Object.assign({}, state, {
        city: action.cityName,
        isFetching: true,
        isInvalid: false,
      });
    case RESTAURANTS_SUCCESS:
      console.log("SUCCESSS!!");
      return Object.assign({}, state, {
        isFetching: false,
        isInvalid: false,
        restaurants: action.restaurants,
        // name: action.restaurants.name,
        // address: action.restaurants.address,
        // area: action.restaurants.area,
        // add new feature here
      });
    case RESTAURANTS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isInvalid: true,
      });
    default:
      return state;
  }
};

export default restaurantReducer;
