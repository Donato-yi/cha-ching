import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.wetaspalt,
}

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  paddingHorizontal: 15,
  overflow: 'visible',
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

export const avatar: {
  container: ViewStyle
  image: ImageStyle,
} = {
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: colors.midnightblue,
    backgroundColor: colors.white,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'stretch',
    borderRadius: 65,
  },
}

export const textInputColors = {
  baseColor: colors.silver,
  textColor: colors.text,
  tintColor: colors.text,
  errorColor: colors.alizarin,
}

export const inviteButton: ViewStyle = {
  alignSelf: 'center',
  width: 200,
  margin: 20,
  marginTop: 50,
  padding: 8,
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: colors.text,
  backgroundColor: colors.midnightblue,
}
