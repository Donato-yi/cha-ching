import * as React from 'react'
import { TouchableOpacity, View, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'

import { Text } from '../../../components'
import Cell from './connect-contacts.cell'
import TopArea from './connect-contacts.top-area'
import * as screenStyles from './connect-contacts.styles'

import { users } from '../../../config/duumy'

export interface ConnectContactsScreenProps {
  navigation: NavigationParams
}

export interface ConnectContactsScreenState {
  isBusy: boolean
  users: Array<any>
}

class ConnectContacts extends React.Component<
  ConnectContactsScreenProps,
  ConnectContactsScreenState
> {
  state = {
    isBusy: false,
    users,
  }

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route, { from: 'connectContacts' })
  }

  render() {
    console.log(this.props.navigation)
    const { users } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.contentContainer}
        >
          {users.map(user => <Cell key={Math.random()} {...user} />)}
          <View style={{ height: 30 }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectContacts)
