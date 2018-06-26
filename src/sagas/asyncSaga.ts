import { put, call } from 'redux-saga/effects'

import { asyncAction } from './asyncAction'

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
