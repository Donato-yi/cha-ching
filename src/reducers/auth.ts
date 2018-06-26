import { LOGIN_WITH_EMAIL, LOGIN_WITH_FACEBOOK } from '../containers/login/login.action-types'
import {
  SIGNUP_WITH_EMAIL,
  SIGNUP_WITH_FACEBOOK,
  ADD_PHONE_NUMBER,
  VERIFY_PHONE_NUMBER,
} from '../containers/signup/signup.action-types'

export type authState = {
  status: string
  token: string
  code: string
  userId: string,
}

const initialState: authState = {
  status: 'pending',
  token: null,
  code: null,
  userId: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_EMAIL.REQUEST:
    case LOGIN_WITH_FACEBOOK.REQUEST:
    case SIGNUP_WITH_EMAIL.REQUEST:
    case SIGNUP_WITH_FACEBOOK.REQUEST:
    case ADD_PHONE_NUMBER.REQUEST:
    case VERIFY_PHONE_NUMBER.REQUEST:
      return { ...state, status: 'loading' }

    case ADD_PHONE_NUMBER.SUCCESS:
    case LOGIN_WITH_EMAIL.SUCCESS:
    case LOGIN_WITH_FACEBOOK.SUCCESS:
    case SIGNUP_WITH_EMAIL.SUCCESS:
    case SIGNUP_WITH_FACEBOOK.SUCCESS:
    case VERIFY_PHONE_NUMBER.SUCCESS:
      return { ...state, ...action.payload.data, status: 'success' }

    case LOGIN_WITH_EMAIL.FAILURE:
    case LOGIN_WITH_FACEBOOK.FAILURE:
    case SIGNUP_WITH_EMAIL.FAILURE:
    case SIGNUP_WITH_FACEBOOK.FAILURE:
    case ADD_PHONE_NUMBER.FAILURE:
    case VERIFY_PHONE_NUMBER.FAILURE:
      return { ...state, status: 'failure' }

    default:
      return state
  }
}
