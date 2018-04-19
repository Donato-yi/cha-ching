import * as React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

import HomeScreen from '../../containers/main/home'
import SettingsScreen from '../../containers/main/settings'
import ContactsScreen from '../../containers/main/contacts'
import HistoryScreen from '../../containers/main/history'

import colors from '../../themes/colors'

const iconName = {
  Home: 'home',
  Settings: 'settings',
  Contacts: 'users',
  History: 'clock',
}

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Contacts: { screen: ContactsScreen },
    History: { screen: HistoryScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: navigation.state.routeName,
      tabBarIcon: (options: { tintColor: string | null; focused: boolean }) => {
        const { routeName } = navigation.state
        const name: string = iconName[routeName] || 'squre'
        return <Icon name={name} size={20} style={{ color: options.tintColor }} />
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.warmGrey,
      activeBackgroundColor: colors.lightGreen,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
)
