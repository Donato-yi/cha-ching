import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

interface ProfileSectionProps {
  name: string
  username: string
  navigateTo: (route: string) => void
}

const ProfileSection: React.SFC<ProfileSectionProps> = (props: ProfileSectionProps) => {
  const { name, username, navigateTo } = props
  return (
    <View style={screenStyles.profile.container}>
      <View style={{ width: 40 }} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={screenStyles.profile.avatar}>
          <Icon name="user" color={colors.blue} size={28} />
        </View>
        <Text preset="secondaryMediumPlus" style={screenStyles.profile.name} text={name} />
        <Text preset="secondaryMediumPlus" style={screenStyles.profile.name} text={username} />
      </View>
      <TouchableOpacity style={screenStyles.profile.button} onPress={() => navigateTo('profile')}>
        <Icon name="edit" size={20} color={colors.blue} />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileSection
