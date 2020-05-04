import * as types from "../constants/ActionTypes";

export const updateInput = event => {
  return {
    type: types.UPDATE_INPUT,
    value: event.target.value,
  };
};

export const selectCity = city => {
  return {
    type: types.SELECT_CITY,
    city,
  };
};

export const requestRestaurants = city => {
  return {
    type: types.REQUEST_RESTAURANTS,
    city,
  };
};

export const receiveRestaurants = restaurants => {
  return {
    type: types.RECEIVE_RESTAURANTS,
    restaurants,
  };
};

export const requestFailed = restaurants => {
  return {
    type: types.REQUEST_FAILED,
    restaurants,
  };
};
