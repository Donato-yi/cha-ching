import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.blue,
}

export const overlay: ViewStyle = {
  margin: 20,
  padding: 15,
  borderRadius: 6,
  backgroundColor: colors.weakBlack,
}

export const container: ViewStyle = {
  borderRadius: 15,
  padding: 5,
  backgroundColor: colors.lightBlue,
}

export const wallet: ViewStyle = {
  flexDirection: 'row',
  height: 30,
  paddingHorizontal: 10,
  alignItems: 'center',
}
