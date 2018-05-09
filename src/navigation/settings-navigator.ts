import { StackNavigator } from 'react-navigation'

import ProfileScreen from '../containers/settings/profile-screen'
import CreateProfileScreen from '../containers/settings/create-profile-screen'
import WalletsScreen from '../containers/settings/wallets-screen'
import SettingsScreen from '../containers/settings/settings-screen'

export const SettingsNavigator = StackNavigator(
  {
    profile: { screen: ProfileScreen },
    createProfile: { screen: CreateProfileScreen },
    wallets: { screen: WalletsScreen },
    settings: { screen: SettingsScreen },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
)

export default SettingsNavigator
