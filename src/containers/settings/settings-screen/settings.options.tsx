import * as React from 'react'
import { Switch, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

interface OptionsSectionProps {}
interface OptionsSectionState {
  notificationEnabled: boolean
}

export class OptionsSection extends React.PureComponent<OptionsSectionProps, OptionsSectionState> {
  state = {
    notificationEnabled: false,
  }

  toggleNotifications = () => {
    this.setState({
      notificationEnabled: !this.state.notificationEnabled,
    })
  }

  render() {
    const { notificationEnabled } = this.state
    return (
      <View style={screenStyles.options.container}>
        <View style={screenStyles.options.optionContainer}>
          <Switch
            style={screenStyles.options.switch}
            value={notificationEnabled}
            onValueChange={this.toggleNotifications}
          />
          <Text text="Notifications" />
        </View>
      </View>
    )
  }
}

export default OptionsSection
