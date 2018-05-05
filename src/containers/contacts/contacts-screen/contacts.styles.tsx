import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.blue,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.weakWhite,
  },
}

export const header: {
  container: ViewStyle
  title: TextStyle,
} = {
  container: {
    height: 23,
    backgroundColor: colors.lightBlue,
    marginRight: 20,
  },
  title: {
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
  },
}

export const contacts: ViewStyle = {
  flex: 1,
  marginTop: 15,
}

export const scrollBar: {
  container: ViewStyle
  // button: ViewStyle,
  title: TextStyle,
} = {
  container: {
    position: 'absolute',
    top: 0,
    right: 20,
    width: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: colors.whiteBlue,
  },
}

export const cell: {
  container: ViewStyle
  avatar: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    backgroundColor: colors.whiteBlue,
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
    backgroundColor: colors.weakWhite,
  },
}
