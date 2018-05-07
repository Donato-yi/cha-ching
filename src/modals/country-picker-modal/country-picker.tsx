import * as React from 'react'
import {
  View,
  Modal,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
} from 'react-native'

import * as styles from './country-picker.styles'
import CountryPickerModal from '.'

let componentIndex = 0

export interface CountryPickerPropTypes {
  data: Array<any>
  initValue?: string
  cancelText?: string
  style?: ViewStyle
  selectStyle?: ViewStyle
  optionStyle?: ViewStyle
  optionTextStyle?: ViewStyle
  sectionStyle?: ViewStyle
  sectionTextStyle?: TextStyle
  cancelStyle?: ViewStyle
  cancelTextStyle?: TextStyle
  overlayStyle?: ViewStyle
  onChange: (item: string) => void
}

export interface CountryPickerStateTypes {
  animationType: 'none' | 'slide' | 'fade'
  modalVisible: boolean
  transparent: boolean
  selected: string
  data: Array<any>
  cancelText?: string
}

export class CountryPicker extends React.PureComponent<
  CountryPickerPropTypes,
  CountryPickerStateTypes
> {
  static defaultProps: CountryPickerPropTypes = {
    data: [],
    initValue: 'Select your country code',
    cancelText: 'cancel',
    style: {},
    selectStyle: {},
    optionStyle: {},
    optionTextStyle: {},
    sectionStyle: {},
    sectionTextStyle: {},
    cancelStyle: {},
    cancelTextStyle: {},
    overlayStyle: {},
    onChange: () => {},
  }

  constructor(props: CountryPickerPropTypes) {
    super(props)

    this.state = {
      animationType: 'slide',
      modalVisible: false,
      transparent: false,
      selected: props.initValue,
      data: [],
      cancelText: props.cancelText,
    }
  }

  componentWillReceiveProps(nextProps: CountryPickerPropTypes) {
    this.setState({ data: nextProps.data })
  }

  onChange = item => {
    this.props.onChange(item)
    this.setState({ selected: item.label })
    this.close()
  }

  close = () => this.setState({ modalVisible: false })

  open = () => this.setState({ modalVisible: true })

  renderSection = section => {
    return (
      <View key={section.key} style={[styles.sectionStyle, this.props.sectionStyle]}>
        <Text style={[styles.sectionTextStyle, this.props.sectionTextStyle]}>{section.label}</Text>
      </View>
    )
  }

  renderOption = option => {
    return (
      <TouchableOpacity key={option.key} onPress={() => this.onChange(option)}>
        <View
          style={[
            styles.optionStyle,
            this.props.optionStyle,
            {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}
        >
          <View style={{ flex: 0.15 }}>
            <Image source={option.image} resizeMode="stretch" style={{ width: 30, height: 16 }} />
          </View>
          <View style={{ flex: 0.7, alignItems: 'center' }}>
            <Text
              style={[
                styles.optionTextStyle,
                this.props.optionTextStyle,
                { color: '#434343', fontSize: 14 },
              ]}
            >
              {option.label}
            </Text>
          </View>
          <View style={{ flex: 0.15, alignItems: 'flex-end' }}>
            <Text
              style={[
                styles.optionTextStyle,
                this.props.optionTextStyle,
                { color: 'grey', fontSize: 12 },
              ]}
            >
              {option.dialCode}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderOptionList() {
    const options = this.state.data.map(item => {
      if (item.section) {
        return this.renderSection(item)
      }

      return this.renderOption(item)
    })

    return (
      <View
        style={[styles.overlayStyle, this.props.overlayStyle]}
        key={`modalPicker${componentIndex++}`}
      >
        <View style={styles.optionContainer}>
          <ScrollView keyboardShouldPersistTaps="always">
            <View style={{ paddingHorizontal: 10 }}>{options}</View>
          </ScrollView>
        </View>
        <View style={styles.cancelContainer}>
          <TouchableOpacity onPress={this.close}>
            <View style={[styles.cancelStyle, this.props.cancelStyle]}>
              <Text style={[styles.cancelTextStyle, this.props.cancelTextStyle]}>
                {this.props.cancelText}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderChildren() {
    if (this.props.children) {
      return this.props.children
    }
  }

  render() {
    const { modalVisible, animationType } = this.state

    return (
      <View style={this.props.style}>
        <Modal
          visible={modalVisible}
          onRequestClose={this.close}
          animationType={animationType}
          transparent
        >
          {this.renderOptionList()}
        </Modal>

        <TouchableOpacity onPress={this.open}>{this.renderChildren()}</TouchableOpacity>
      </View>
    )
  }
}

export default CountryPicker
