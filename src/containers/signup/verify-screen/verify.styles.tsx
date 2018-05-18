import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.midnightblue,
}

export const container: ViewStyle = {
  flex: 1,
}

export const verifyButton: ViewStyle = {
  alignItems: 'center',
  width: 200,
  height: 30,
  margin: 20,
  paddingHorizontal: 8,
  borderRadius: 4,
  borderColor: colors.text,
  backgroundColor: colors.midnightblue,
}

export const containerStyle: ViewStyle = {
  width: '100%',
  height: '100%',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
}

export const codeInputStyle: ViewStyle = {
  marginTop: -20,
  padding: 8,
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: colors.text,
}
