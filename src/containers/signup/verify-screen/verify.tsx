import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CodeInput from 'react-native-confirmation-code-input'
import PhoneInput from 'react-native-phone-input'
import { equals } from 'ramda'

import { Text } from '../../../components'
import CountryPicker from '../../../modals/country-picker-modal'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './verify.styles'

export interface VerifyPhoneNumberScreenProps {
  navigation: NavigationParams
}

export interface VerifyPhoneNumberScreenState {
  isBusy: boolean
  viewIndex: number
  verificationCode: string
  countryList: Array<any>
  phoneNumber: number
}

class VerifyPhoneNumber extends React.Component<
  VerifyPhoneNumberScreenProps,
  VerifyPhoneNumberScreenState
> {
  state = {
    isBusy: false,
    viewIndex: 0,
    verificationCode: '1234',
    countryList: null,
    phoneNumber: null,
  }

  phoneNumberInput: PhoneInput
  countryPicker: CountryPicker

  componentDidMount() {
    this.setState({
      countryList: this.phoneNumberInput.getPickerData(),
    })
  }

  navigateTo = (route: string, transition: string = 'default', action: string = 'push') => {
    switch (action) {
      case 'push':
        this.props.navigation.push(route, { transition })
        break
      case 'pop':
        this.props.navigation.pop()
        break
      case 'navigate':
        this.props.navigation.navigate(route, { transition })
        break
      default:
        break
    }
  }

  onPressFlag = () => {
    this.countryPicker.open()
  }

  selectCountry = (country: any) => {
    this.phoneNumberInput.selectCountry(country.iso2)
  }

  onCodeFullFill = (code: string) => {
    if (equals(code, this.state.verificationCode)) {
      this.navigateTo('createProfile', 'slideToTop', 'navigate')
    }
  }

  switchInputMode = () => {
    this.setState({
      viewIndex: 1,
    })
  }

  render() {
    const { isBusy, viewIndex, countryList, verificationCode } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <ScrollableTabView
          style={screenStyles.container}
          onChangeTab={index => this.setState({ viewIndex: index.i })}
          renderTabBar={() => <View />}
          page={viewIndex}
        >
          <View style={screenStyles.containerStyle}>
            <PhoneInput
              ref={ref => {
                this.phoneNumberInput = ref
              }}
              textStyle={{ color: 'white' }}
              onPressFlag={this.onPressFlag}
            />
            <TouchableOpacity style={screenStyles.verifyButton} onPress={this.switchInputMode}>
              <Text preset="primaryMedium" text="Verify" />
            </TouchableOpacity>
          </View>
          <View style={screenStyles.containerStyle}>
            <CodeInput
              codeLength={4}
              containerStyle={screenStyles.containerStyle}
              codeInputStyle={screenStyles.codeInputStyle}
              onFulfill={this.onCodeFullFill}
            />
          </View>
        </ScrollableTabView>
        <CountryPicker
          ref={ref => {
            this.countryPicker = ref
          }}
          data={countryList}
          onChange={country => {
            this.selectCountry(country)
          }}
          cancelText="Cancel"
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneNumber)
