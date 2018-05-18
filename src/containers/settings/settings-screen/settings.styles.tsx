import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.wetaspalt,
}

export const container: ViewStyle = {
  flex: 1,
  padding: 7,
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
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const coins: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 15,
}

export const coinSelector: {
  container: ViewStyle
  selector: ViewStyle
  coinAvatarContainer: ViewStyle
  coinAvatar: ImageStyle
  option: ViewStyle,
} = {
  selector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  coinAvatarContainer: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.weakWhite,
    backgroundColor: colors.weakWhite,
  },
  coinAvatar: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  container: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.weakBlack,
  },
  option: {
    maxWidth: 60,
    marginHorizontal: 10,
  },
}

export const options: {
  container: ViewStyle
  optionContainer: ViewStyle
  switch: ViewStyle,
} = {
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.weakBlack,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  switch: {
    marginRight: 10,
  },
}
