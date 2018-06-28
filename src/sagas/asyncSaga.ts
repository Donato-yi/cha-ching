import { put, call, take, fork } from 'redux-saga/effects'

import { asyncAction, ASYNC_ACTION_TYPE } from './asyncAction'

/**
 * Reusable asynchronous action flow
 *
 * @param action : asyncActionType
 * @param apiFn  : api to call
 */
export function* async(action, apiFn, payload) {
  const async = asyncAction(action.type)
  const { response, error } = yield call(apiFn, payload)
  if (response) yield put(async.success(response))
  else yield put(async.failure(error))
}

export function* asyncSaga(asyncActionType: ASYNC_ACTION_TYPE, apiFn) {
  while (true) {
    const action = yield take(asyncActionType.REQUEST)
    yield fork(async, action, apiFn, { ...action.payload })
  }
}
