import * as types from "constants/ActionTypes";


export const fetchRestaurants = (cityName) => {
  return {
    type: types.RESTAURANTS_REQUEST,
    cityName,
    isFetching: true
  };
};

export const receivedRestaurants = restaurants => {
  return {
    type: types.RESTAURANTS_SUCCESS,
    restaurants,
  };
};

export const requestFailed = restaurants => {
  return {
    type: types.RESTAURANTS_FAILED,
    restaurants,
  };
};

export const filterList = filterName => {
  return {
    type: types.FILTER_LIST,
    filterName,
  };
};