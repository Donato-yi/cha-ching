import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'
import { navMiddleware } from '../navigation/redux-navigation'
import { rootSaga } from '../sagas'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware, navMiddleware)),
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
