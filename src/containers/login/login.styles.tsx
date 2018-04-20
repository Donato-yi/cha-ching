import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
}

export const backgroundImg: ImageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  resizeMode: 'cover',
}

export const logoImg: ImageStyle = {
  width: 150,
  height: 150,
  justifyContent: 'center',
  marginTop: 150,
  resizeMode: 'stretch',
  borderRadius: 40,
}

export const loginFacebook: ViewStyle = {
  width: '80%',
  height: 40,
  justifyContent: 'center',
  backgroundColor: '#3b5998',
  borderRadius: 8,
}

export const loginEmail: ViewStyle = {
  width: '80%',
  height: 30,
  justifyContent: 'center',
  marginTop: 20,
  marginBottom: 80,
  borderRadius: 8,
}
