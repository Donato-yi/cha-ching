import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'

// Screens
import LaunchScreen from '../containers/launch'

// Navigation Stacks
import AuthNavigator from './auth-navigator'
import DashboardNavigator from './dashboard-navigator'
import TransitionConfiguration from './transitions'

const MyTransitionSpec = {
  duration: 500,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
}

export const AppNavigation = StackNavigator(
  {
    launch: { screen: LaunchScreen },
    authStack: { screen: AuthNavigator },
    dashboardStack: { screen: DashboardNavigator },
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'launch',
    mode: 'card',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    transitionConfig: TransitionConfiguration,
  },
)

export default AppNavigation
