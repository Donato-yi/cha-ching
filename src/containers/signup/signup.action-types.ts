import { createAsyncActionTypes } from '../../sagas'

export const SIGNUP_WITH_EMAIL = createAsyncActionTypes('SIGNUP_WITH_EMAIL')
export const SIGNUP_WITH_FACEBOOK = createAsyncActionTypes('SIGNUP_WITH_FACEBOOK')
export const ADD_PHONE_NUMBER = createAsyncActionTypes('ADD_PHONE_NUMBER')
export const VERIFY_PHONE_NUMBER = createAsyncActionTypes('VERIFY_PHONE_NUMBER')
