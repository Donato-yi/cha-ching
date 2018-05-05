import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const logoImg: ImageStyle = {
  width: 150,
  height: 150,
  justifyContent: 'center',
  marginTop: 100,
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

export const text: {
  facebook: TextStyle
  email: TextStyle,
} = {
  facebook: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
  email: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
}
