import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import AppNavigation from './app-navigation'

export const navReducer = createNavigationReducer(AppNavigation)

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
export const navMiddleware = createReactNavigationReduxMiddleware('root', (state: any) => state.nav)

export const App = reduxifyNavigator(AppNavigation, 'root')
