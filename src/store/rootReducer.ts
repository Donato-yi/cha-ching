import { combineReducers } from 'redux'
import { NavigationState } from 'react-navigation'

import { navReducer } from '../navigation/redux-navigation'
import authReducer, { authState } from '../reducers/auth'

export type storeType = {
  nav: NavigationState
  auth: authState,
}

const rootReducer = combineReducers<storeType>({
  nav: navReducer,
  auth: authReducer,
})

export default rootReducer
