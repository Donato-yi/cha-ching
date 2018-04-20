import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
}

export const backgroundImg: ImageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
}

export const email: TextStyle = {
  marginTop: 100,
  fontSize: 40,
  color: colors.weakBlack,
  textShadowColor: colors.lightGreen,
  textShadowOffset: { width: 2, height: 2 },
}

export const textInput: ViewStyle = {
  width: '80%',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,
  padding: 10,
  borderRadius: 5,
  borderWidth: 2,
  borderColor: colors.weakBlack,
  backgroundColor: colors.white,
}
