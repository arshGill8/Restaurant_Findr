import { takeLatest, call, put } from "redux-saga/effects";
import { RESTAURANTS_REQUEST  } from "constants/ActionTypes";
import { requestFailed, receiveRestaurants } from "actions";
import fetchRestaurants from "api";

export function* fetchRestaurantsAsync({ cityName }) {
  try {
    const data = yield call(fetchRestaurants, cityName);
    // let names = data.forEach((r=> console.log(r.name)));
    yield put(receiveRestaurants(data));
  } catch (e) {
    yield put(requestFailed(e));
  }
}

export default function* watchFetchRestaurant() {
  yield takeLatest(RESTAURANTS_REQUEST, fetchRestaurantsAsync);
}
