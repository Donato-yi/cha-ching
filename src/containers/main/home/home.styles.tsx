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

export const topArea: {
  container: ViewStyle
  button: ViewStyle,
} = {
  container: {
    width: '100%',
    height: 80,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.weakWhite,
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
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.white,
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
  justifyContent: 'center',
  alignItems: 'center',
}

export const numPad: {
  container: ViewStyle
  row: ViewStyle
  button: ViewStyle,
} = {
  container: {
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  row: {
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.lightGreen,
  },
}

export const sendButton: ViewStyle = {
  width: '60%',
  height: 40,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 15,
  paddingHorizontal: 20,
  backgroundColor: colors.lightGreen,
  borderWidth: 2,
  borderRadius: 30,
  borderColor: colors.white,
}

export const contacts: {
  container: ViewStyle
  searchBox: ViewStyle
  userContainer: ViewStyle
  avatar: ViewStyle,
} = {
  container: {
    width: '100%',
    marginTop: 15,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.weakBlack,
  },
  userContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.weakBlack,
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
