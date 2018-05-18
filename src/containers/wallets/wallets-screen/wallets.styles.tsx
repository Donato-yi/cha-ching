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

export const avatarArea: ViewStyle = {
  width: 80,
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
    width: 48,
    height: 48,
    margin: 5,
    borderRadius: 25,
    backgroundColor: colors.weakWhite,
  },
  image: {
    width: 44,
    height: 44,
    resizeMode: 'stretch',
    borderRadius: 22,
  },
}

export const serviceSelector: {
  container: ViewStyle
  selector: ViewStyle
  coinAvatar: ImageStyle
  coinName: TextStyle,
} = {
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 200,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.weakWhite,
    backgroundColor: colors.weakWhite,
  },
  selector: {
    width: 180,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinAvatar: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  coinName: {
    flex: 1,
  },
}

export const wallet: ViewStyle = {
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  margin: 10,
  padding: 8,
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: colors.text,
  backgroundColor: colors.midnightblue,
}

export const coinBalance: TextStyle = {
  flex: 1,
  textAlign: 'left',
  paddingHorizontal: 5,
}

export const usdBalance: TextStyle = {
  textAlign: 'right',
  paddingHorizontal: 5,
}
