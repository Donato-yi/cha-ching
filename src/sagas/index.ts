import { all, fork } from 'redux-saga/effects'
import { authSaga } from './authSaga'

export * from './asyncAction'

export function* rootSaga() {
  yield all([fork(authSaga)])
}
