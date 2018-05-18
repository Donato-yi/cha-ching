import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'
import DEVICE_RESOLUTION from '../../../themes/dimensions'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.green,
}

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  paddingHorizontal: 15,
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
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const searchField: ViewStyle = {
  paddingHorizontal: 15,
  marginBottom: 10,
}

export const textInputColors = {
  textColor: colors.text,
  tintColor: colors.text,
  errorColor: colors.alizarin,
  baseColor: colors.clouds,
}

export const cell: {
  container: ViewStyle
  avatar: ViewStyle
  userContainer: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.weakWhite,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.weakWhite,
    backgroundColor: colors.weakWhite,
  },
  userContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
}
