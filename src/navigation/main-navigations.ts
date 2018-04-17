import * as React from 'react'
import { View } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

import HomeScreen from '../containers/main/home'
import ProfileScreen from '../containers/main/profile'
import ContactsScreen from '../containers/main/contacts'
import HistoryScreen from '../containers/main/history'

import colors from '../themes/colors'

const iconName = {
  home: 'home',
  profile: 'settings',
  contacts: 'users',
  history: 'clock',
}

export default TabNavigator(
  {
    home: { screen: HomeScreen },
    profile: { screen: ProfileScreen },
    contacts: { screen: ContactsScreen },
    history: { screen: HistoryScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: navigation.state.routeName,
    }),
    tabBarOptions: {
      activeTintColor: colors.tintGreen,
      inactiveTintColor: colors.warmGrey,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
)
