import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.wetaspalt,
}

export const container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}

export const topArea: {
  container: ViewStyle
  button: ViewStyle,
} = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 40,
    marginTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const button: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 200,
  height: 30,
  margin: 20,
  paddingHorizontal: 8,
  borderRadius: 4,
  borderColor: colors.text,
  backgroundColor: colors.midnightblue,
}

export const buttonText: TextStyle = {
  flex: 1,
  textAlign: 'center',
}
