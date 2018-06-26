import { connect } from 'react-redux'
import { App } from '../navigation/redux-navigation'

const mapStateToProps = state => ({
  state: state.nav,
})

export const AppWithNavigationState = connect(mapStateToProps)(App)
