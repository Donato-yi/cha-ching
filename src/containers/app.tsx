import * as React from 'react'
import { Provider } from 'react-redux'
import { AppWithNavigationState } from './root-container'
import configureStore from '../store'

const { store, persistor } = configureStore()

export interface Props {}

export interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App
