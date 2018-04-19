import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { merge } from 'ramda'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const backgroundImg: ImageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
}

export const topArea: ViewStyle = {
  width: '80%',
  height: 80,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}

export const topButton: ViewStyle = {
  width: 45,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 22,
  borderColor: colors.white,
  borderWidth: 1,
  backgroundColor: colors.weakWhite,
}

export const amountToSend: TextStyle = {
  marginTop: 20,
  textAlign: 'center',
  fontSize: 65,
  fontWeight: 'bold',
  color: colors.white,
}

export const currencySelectContainer: ViewStyle = {
  width: 200,
  padding: 10,
  borderRadius: 20,
  backgroundColor: colors.white,
}

export const currencySelector: ViewStyle = {
  width: 180,
  height: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const currencyItem: ViewStyle = merge(currencySelector, {
  backgroundColor: colors.white,
  borderRadius: 0,
})

export const numPad: ViewStyle = {
  width: '80%',
  marginTop: 20,
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
}

export const numPadButton: ViewStyle = {
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderWidth: 2,
  borderColor: colors.white,
  backgroundColor: colors.lightGreen,
}

export const sendButton: ViewStyle = {
  width: '60%',
  height: 40,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 30,
  paddingHorizontal: 20,
  backgroundColor: colors.lightGreen,
  borderWidth: 2,
  borderRadius: 30,
  borderColor: colors.white,
}
