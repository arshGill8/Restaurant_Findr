import {
  RESTAURANTS_REQUEST,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_FAILED,
  FILTER_LIST,
} from "constants/ActionTypes";

const initialState = {
  city: "",
  isFetching: false,
  isInvalid: false,
  restaurants: [],
  name: [],
  address: [],
  area: [],
  filter: "",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS_REQUEST:
      return {
        ...state,
        city: action.cityName,
        isFetching: true,
      };
    case RESTAURANTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        restaurants: action.restaurants.data.restaurants,
        name: action.restaurants.data.restaurants.map((r) => r.name),
        address: action.restaurants.data.restaurants.map((r) => r.address),
        area: action.restaurants.data.restaurants.map((r) => r.area),
      };
    case RESTAURANTS_FAILED:
      return {
        ...state,
        isFetching: false,
        isInvalid: true,
      };
    case FILTER_LIST:
      console.log(action.filterName);
      return {
        ...state,
        filter: action.filterName,
        restaurants: state.restaurants.filter(
          (r) =>
            r.name.toLowerCase().includes(action.filterName.toLowerCase()) +
            r.address.toLowerCase().includes(action.filterName.toLowerCase()) +
            r.area.toLowerCase().includes(action.filterName.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default restaurantReducer;
