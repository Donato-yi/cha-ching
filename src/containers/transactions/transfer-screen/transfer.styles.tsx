import { ViewStyle, TextStyle, ImageStyle, Button } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.emerald,
}

export const backgroundImg: ImageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
}

export const container: ViewStyle = {
  flex: 1,
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
    backgroundColor: colors.emerald,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.clouds,
  },
}

export const amountToSend: TextStyle = {
  height: 60,
  marginTop: 10,
  textAlign: 'center',
  fontSize: 50,
  fontWeight: 'bold',
  color: colors.white,
}

export const currencySelector: {
  container: ViewStyle
  selector: ViewStyle
  coinAvatar: ImageStyle
  coinName: TextStyle,
} = {
  container: {
    width: 150,
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.weakWhite,
    backgroundColor: colors.weakWhite,
  },
  selector: {
    width: 140,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinAvatar: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  coinName: {
    flex: 1,
  },
}

export const childView: ViewStyle = {
  width: '100%',
  paddingTop: 15,
  justifyContent: 'center',
  alignItems: 'center',
}

export const numPad: {
  container: ViewStyle
  row: ViewStyle
  button: ViewStyle,
} = {
  container: {
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  row: {
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 70,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.clouds,
    borderBottomWidth: 1,
  },
}

export const sendButton: ViewStyle = {
  width: '70%',
  height: 40,
  justifyContent: 'center',
  marginVertical: 15,
  paddingHorizontal: 20,
  borderWidth: 2,
  borderRadius: 30,
  borderColor: colors.weakWhite,
  backgroundColor: colors.weakBlack,
}

export const contacts: {
  container: ViewStyle
  searchBox: ViewStyle
  searchInput: ViewStyle,
} = {
  container: {
    width: '100%',
    minHeight: '100%',
    marginTop: 15,
    justifyContent: 'center',
    backgroundColor: colors.weakWhite,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.weakBlack,
    backgroundColor: colors.weakBlack,
  },
  searchInput: {
    flex: 1,
    height: 20,
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
  userInfo: ViewStyle
  walletsContainer: ViewStyle
  wallet: ImageStyle
  moreButton: ViewStyle,
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
  userInfo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  walletsContainer: {
    flexDirection: 'row',
  },
  wallet: {
    width: 15,
    height: 15,
    marginRight: 5,
    resizeMode: 'stretch',
    borderRadius: 2,
    borderColor: colors.weakBlack,
  },
  moreButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.weakWhite,
  },
}
