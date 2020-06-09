import { takeLatest, call, put } from "redux-saga/effects";
import { RESTAURANTS_REQUEST } from "constants/ActionTypes";
import { requestFailed, receivedRestaurants } from "actions";
import fetchRestaurants from "api";

export function* restaurantSaga({ cityName }) {
  try {
    const data = yield call(fetchRestaurants, cityName);
    yield put(receivedRestaurants(data));
  } catch (e) {
    yield put(requestFailed(e));
  }
}

export default function* watchFetchRestaurant() {
  yield takeLatest(RESTAURANTS_REQUEST, restaurantSaga);
}
