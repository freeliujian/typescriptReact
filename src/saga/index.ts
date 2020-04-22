import { all } from 'redux-saga/effects'
import { IsloginActions } from '../actions/Login'


export default function* rootSaga() {
  yield all([
    IsloginActions(),
  ])
}
