import * as React from 'react'
import { TouchableOpacity, View, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { TextField } from 'react-native-material-textfield'
import { connect } from 'react-redux'

import { Text } from '../../../components'
import TopArea from './find-friends.top-area'
import Cell from './find-friends.cell'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './find-friends.styles'

import { users } from '../../../config/duumy'

export interface FindFriendsScreenProps {
  navigation: NavigationParams
}

export interface FindFriendsScreenState {
  isBusy: boolean
  searchText: string
  fromRoute: string
}

class FindFriendsScreen extends React.Component<FindFriendsScreenProps, FindFriendsScreenState> {
  constructor(props: FindFriendsScreenProps) {
    super(props)
    this.state = {
      isBusy: false,
      searchText: '',
      fromRoute: props.navigation.getParam('from', 'contacts'),
    }
  }

  navigateTo = (route: string) => {
    if (route === 'back') {
      this.props.navigation.pop()
    } else {
      this.props.navigation.navigate(route)
    }
  }

  render() {
    const { searchText, fromRoute } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} fromRoute={fromRoute} />
        <View style={screenStyles.searchField}>
          <TextField
            label="Search"
            value={searchText}
            onChangeText={searchText => this.setState({ searchText })}
            {...screenStyles.textInputColors}
          />
        </View>
        <ScrollView style={screenStyles.container}>
          {users.map(user => (
            <TouchableOpacity key={Math.random()} onPress={() => this.navigateTo('inviteFriend')}>
              <Cell {...user} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 30 }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FindFriendsScreen)