import { ViewStyle, TextStyle, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const PADDING = 8
const BORDER_RADIUS = 5
const FONT_SIZE = 16
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)'
const OPTION_CONTAINER_HEIGHT = 400

export const overlayStyle: ViewStyle = {
  width: width,
  height: height,
  backgroundColor: 'rgba(0,0,0,0.7)',
}

export const optionContainer: ViewStyle = {
  borderRadius: BORDER_RADIUS,
  width: width * 0.8,
  height: OPTION_CONTAINER_HEIGHT,
  backgroundColor: 'rgba(255,255,255,0.8)',
  left: width * 0.1,
  top: (height - OPTION_CONTAINER_HEIGHT) / 2,
}

export const cancelContainer: ViewStyle = {
  left: width * 0.1,
  top: (height - OPTION_CONTAINER_HEIGHT) / 2 + 10,
}

export const selectStyle: ViewStyle = {
  flex: 1,
  borderColor: '#ccc',
  borderWidth: 1,
  padding: 8,
  borderRadius: BORDER_RADIUS,
}

export const selectTextStyle: TextStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: FONT_SIZE,
}

export const cancelStyle: ViewStyle = {
  borderRadius: BORDER_RADIUS,
  width: width * 0.8,
  backgroundColor: 'rgba(255,255,255,0.8)',
  padding: PADDING,
}

export const cancelTextStyle: TextStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: FONT_SIZE,
}

export const optionStyle: ViewStyle = {
  padding: PADDING,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
}

export const optionTextStyle: TextStyle = {
  textAlign: 'center',
  fontSize: FONT_SIZE,
  color: HIGHLIGHT_COLOR,
}

export const sectionStyle: ViewStyle = {
  padding: PADDING * 2,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
}

export const sectionTextStyle: TextStyle = {
  textAlign: 'center',
  fontSize: FONT_SIZE,
}
