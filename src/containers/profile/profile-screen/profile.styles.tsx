import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.emerald,
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

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  padding: 15,
  overflow: 'visible',
}

export const avatar: {
  container: ViewStyle
  image: ImageStyle,
} = {
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.midnightblue,
    backgroundColor: colors.white,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'stretch',
    borderRadius: 55,
  },
}

export const userNameArea: ViewStyle = {
  height: 35,
  justifyContent: 'space-between',
  margin: 10,
}

export const topCoins: {
  container: ViewStyle
  coinsContainer: ViewStyle
  coin: ImageStyle,
} = {
  container: {
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: colors.clouds,
  },
  coinsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    margin: 10,
  },
  coin: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.clouds,
  },
}

export const button: ViewStyle = {
  width: '100%',
  justifyContent: 'center',
  borderTopWidth: 1,
  borderTopColor: colors.clouds,
  height: 45,
}

export const buttonText: TextStyle = {
  textAlign: 'left',
}
