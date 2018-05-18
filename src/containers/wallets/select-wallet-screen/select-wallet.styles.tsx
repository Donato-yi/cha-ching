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
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const avatars: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
}

export const avatar: {
  container: ViewStyle
  image: ImageStyle,
} = {
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
    marginHorizontal: 10,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: colors.midnightblue,
    backgroundColor: colors.white,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
    borderRadius: 60,
  },
}

export const infoArea: ViewStyle = {
  marginVertical: 30,
}

export const sendButton: ViewStyle = {
  alignSelf: 'center',
  width: 200,
  margin: 10,
  padding: 8,
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: colors.text,
  backgroundColor: colors.midnightblue,
}
