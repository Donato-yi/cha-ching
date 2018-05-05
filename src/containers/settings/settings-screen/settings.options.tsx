import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

const options = [
  {
    iconName: 'bell',
    title: 'Notifications',
    route: 'notifications',
  },
  {
    iconName: 'lock',
    title: 'Privacy',
    route: 'privacy',
  },
  {
    iconName: 'user',
    title: 'Profile',
    route: 'profile',
  },
]

interface OptionsSectionProps {
  navigateTo: (route: string) => void
}

const OptionsSection: React.SFC<OptionsSectionProps> = (props: OptionsSectionProps) => {
  const { navigateTo } = props
  return (
    <View style={screenStyles.options.container}>
      {options.map(option => (
        <TouchableOpacity
          key={Math.random()}
          style={screenStyles.options.button}
          onPress={() => navigateTo(option.route)}
        >
          <Icon name={option.iconName} size={20} color={colors.blue} />
          <Text preset="secondaryMedium" text={option.title} style={screenStyles.options.text} />
        </TouchableOpacity>
      ))}
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={screenStyles.options.button}
        onPress={() => navigateTo('notifications')}
      >
        <Icon name="help-circle" size={20} color={colors.blue} />
        <Text preset="secondaryMedium" text="Help" style={screenStyles.options.text} />
      </TouchableOpacity>
    </View>
  )
}

export default OptionsSection
