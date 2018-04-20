import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AuthTypes } from '../actions/auth'

const initialState = Immutable({
  status: '', // done, pending, error
})

const loginRequest = (state, action) => state.merge({ ...state, _status: 'pending' })
const loginSuccess = (state, action) => state.merge({ ...state, _status: 'done' })
const loginFailure = (state, action) => state.merge({ ...state, _status: 'error' })

export const reducer = createReducer(initialState, {
  [AuthTypes.EMAIL_LOGIN]: loginRequest,
  [AuthTypes.EMAIL_LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.EMAIL_LOGIN_FAILURE]: loginFailure,
  [AuthTypes.FACEBOOK_LOGIN]: loginRequest,
  [AuthTypes.FACEBOOK_LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.FACEBOOK_LOGIN_FAILURE]: loginFailure,
})
