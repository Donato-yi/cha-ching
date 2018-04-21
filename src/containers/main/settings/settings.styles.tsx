import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  padding: 30,
  backgroundColor: colors.white,
}

export const container: ViewStyle = {
  flex: 1,
  width: '100%',
  padding: 20,
}

export const topArea: {
  container: ViewStyle
  button: ViewStyle
  text: TextStyle,
} = {
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blue,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.weakWhite,
    borderWidth: 2,
  },
}

export const profile: {
  container: ViewStyle
  avatar: ViewStyle
  name: TextStyle
  username: TextStyle
  button: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  avatar: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 32,
    backgroundColor: colors.lightBlue,
  },
  name: {
    color: colors.blue,
    textAlign: 'center',
  },
  username: {},
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
}

export const coins: {
  container: ViewStyle
  coin: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  coin: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.weakBlack,
    borderRadius: 5,
  },
}

export const options: {
  container: ViewStyle
  button: ViewStyle
  text: TextStyle,
} = {
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    padding: 40,
    borderRadius: 5,
    backgroundColor: colors.weakBlack,
  },
  button: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    color: colors.blue,
    alignItems: 'center',
    marginLeft: 15,
  },
}
