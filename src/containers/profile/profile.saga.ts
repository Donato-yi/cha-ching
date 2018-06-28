import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './profile.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* profileSaga() {
  yield all([
    fork(asyncSaga, actionTypes.GET_PROFILE, API.getProfile),
    fork(asyncSaga, actionTypes.UPDATE_PROFILE, API.updateProfile),
    fork(asyncSaga, actionTypes.SEARCH_FRIENDS, API.searchFriends),
  ])
}
