import { takeLatest, call, put } from 'redux-saga/effects'
import { RESTAURANTS_REQUEST, RESTAURANTS_SUCCESS, RESTAURANTS_FAILED } from '../constants/ActionTypes'
import axios from 'axios'

function* fetchRestaurants({cityName}) {
    try{
        console.log('attempting to call api')
        const response = yield call(axios.get, `http://opentable.herokuapp.com/api/restaurants?city=${cityName}`)
        yield put({type: RESTAURANTS_SUCCESS, restaurants: response.data.restaurants})
    }
   catch (e) {
    console.log(e)
    yield put({type: RESTAURANTS_FAILED, e})

   }
}

function* watchFetchRestaurant() {
    console.log('sagas works')
    yield takeLatest(RESTAURANTS_REQUEST, fetchRestaurants)
}

export default function* rootSaga() {
    yield (
        watchFetchRestaurant()
    )
}