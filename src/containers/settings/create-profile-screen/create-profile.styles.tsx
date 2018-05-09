import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.wetaspalt,
}

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  padding: 15,
}

export const avatar: {
  container: ViewStyle
  image: ImageStyle,
} = {
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 160,
    margin: 30,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: colors.midnightblue,
    backgroundColor: colors.white,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 75,
  },
}

export const textInputColors = {
  baseColor: colors.silver,
  textColor: colors.text,
  tintColor: colors.text,
  errorColor: colors.alizarin,
}

export const nextButton: ViewStyle = {
  marginTop: 30,
}
