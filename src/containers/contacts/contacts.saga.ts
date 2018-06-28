import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './contacts.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* loginSaga() {
  yield all([
    fork(asyncSaga, actionTypes.INVITE_FRIEND, API.inviteFriend),
    fork(asyncSaga, actionTypes.ACCEPT_INVITATION, API.acceptInvitation),
    fork(asyncSaga, actionTypes.GET_CONNECTIONS, API.getConnections),
    fork(asyncSaga, actionTypes.GET_PENDING_INVITATIONS, API.getPendingConnections),
  ])
}
