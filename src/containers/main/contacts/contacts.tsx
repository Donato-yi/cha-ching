import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import * as screenStyles from './contacts.styles'

export interface ContactsScreenProps {
  navigation: NavigationParams
}

export interface ContactsScreenState {
  isBusy: boolean
}

class Contacts extends React.Component<ContactsScreenProps, ContactsScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-17.jpg')} />
        <Text>Contacts Page</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
