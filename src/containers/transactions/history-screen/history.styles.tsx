import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import colors from '../../../themes/colors'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: colors.wetaspalt,
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
  },
}

export const childView: ViewStyle = {
  width: '100%',
  height: 1000,
}

export const segmentTab: {
  container: ViewStyle
  tabStyle: ViewStyle
  tabTextStyle: TextStyle
  activeTabStyle: ViewStyle
  activeTextStyle: TextStyle,
} = {
  container: {
    alignSelf: 'center',
    width: 200,
    margin: 15,
    borderWidth: 0,
  },
  tabStyle: {
    width: 100,
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.midnightblue,
  },
  tabTextStyle: {
    color: colors.text,
  },
  activeTabStyle: {
    backgroundColor: colors.text,
  },
  activeTextStyle: {
    color: colors.midnightblue,
  },
}

export const tableRow: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  paddingVertical: 10,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: colors.clouds,
}

export const cell: {
  container: ViewStyle
  from: TextStyle
  to: TextStyle
  amountContainer: ViewStyle
  coinImage: ImageStyle,
} = {
  container: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.clouds,
  },
  from: {
    flex: 5,
    alignSelf: 'center',
  },
  to: {
    flex: 5,
  },
  amountContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  coinImage: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.clouds,
  },
}
