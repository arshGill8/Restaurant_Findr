import {  RESTAURANTS_REQUEST, RESTAURANTS_SUCCESS, RESTAURANTS_FAILED } from "constants/ActionTypes";


export const fetchRestaurants = (cityName) => {
  return {
    type: RESTAURANTS_REQUEST,
    cityName,
    isFetching: true
  };
};

export const receiveRestaurants = restaurants => {
  return {
    type: RESTAURANTS_SUCCESS,
    restaurants,
  };
};

export const requestFailed = restaurants => {
  return {
    type: RESTAURANTS_FAILED,
    restaurants,
  };
};
