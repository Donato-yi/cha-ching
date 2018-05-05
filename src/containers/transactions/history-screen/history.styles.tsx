import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.whiteBlue,
}

export const overlay: ViewStyle = {
  flex: 1,
  width: '100%',
  padding: 15,
  borderRadius: 6,
  backgroundColor: colors.weakBlack,
}

export const cell: {
  container: ViewStyle
  avatar: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.whiteBlue,
    backgroundColor: colors.whiteBlue,
  },
  avatar: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.warmGrey,
    backgroundColor: colors.weakWhite,
  },
}
