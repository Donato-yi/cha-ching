import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.wetaspalt,
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

export const container: ViewStyle = {
  flex: 1,
}

export const contacts: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  marginTop: 15,
}

export const scrollBar: {
  container: ViewStyle
  title: ViewStyle,
} = {
  container: {
    width: 20,
    justifyContent: 'space-around',
  },
  title: {
    width: 20,
  },
}

export const header: {
  container: ViewStyle
  title: TextStyle,
} = {
  container: {
    height: 23,
    backgroundColor: colors.midnightblue,
  },
  title: {
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
}

export const cell: {
  container: ViewStyle
  avatar: ViewStyle
  infoContainer: ViewStyle,
} = {
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.weakBlack,
    backgroundColor: colors.weakWhite,
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
  infoContainer: {
    justifyContent: 'space-around',
  },
}
