import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.green,
}

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  padding: 15,
}

export const backgroundImg: ImageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
}

export const topArea: {
  container: ViewStyle
  button: ViewStyle,
} = {
  container: {
    width: '100%',
    height: 40,
    marginTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const textInputColors = {
  textColor: colors.text,
  tintColor: colors.text,
  errorColor: colors.alizarin,
}

export const sendButton: ViewStyle = {
  marginTop: 10,
}
