import * as types from "../constants/ActionTypes";

const initialState = {
  inputValue: "",
};

const inputReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case types.UPDATE_INPUT:
      return Object.assign({}, state, {
        inputValue: action.value
      });

    default:
      return state;
  }
};

export default inputReducer;
