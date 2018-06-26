import { combineReducers } from 'redux'

/* ------------- Assemble The Reducers ------------- */
export const rootReducer = combineReducers({
  nav: require('./navigation').reducer,
  auth: require('./auth').reducer,
})

export default rootReducer
