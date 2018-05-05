import { StackNavigator } from 'react-navigation'

import ProfileScreen from '../containers/settings/profile-screen'
import WalletsScreen from '../containers/settings/wallets-screen'
import SettingsScreen from '../containers/settings/settings-screen'

export const SettingsNavigator = StackNavigator({
  profile: {
    screen: ProfileScreen,
  },
  wallets: {
    screen: WalletsScreen,
  },
  settings: {
    screen: SettingsScreen,
  },
})

export default SettingsNavigator
