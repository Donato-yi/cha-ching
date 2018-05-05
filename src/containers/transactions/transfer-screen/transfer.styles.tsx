import { ViewStyle, TextStyle, ImageStyle, Button } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  // alignItems: 'center',
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
    height: 80,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.weakWhite,
    borderWidth: 2,
    backgroundColor: colors.weakBlack,
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
  selector: ViewStyle,
} = {
  container: {
    width: 200,
    alignSelf: 'center',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.weakWhite,
    backgroundColor: colors.weakWhite,
  },
  selector: {
    width: 180,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.weakBlack,
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
  searchInput: ViewStyle
  userContainer: ViewStyle
  avatar: ViewStyle,
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
  userContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.weakBlack,
    backgroundColor: colors.weakBlack,
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
    backgroundColor: colors.weakBlack,
  },
}
