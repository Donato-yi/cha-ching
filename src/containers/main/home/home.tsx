import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import * as screenStyles from './home.styles'

export interface HomeScreenProps {
  navigation: NavigationParams
  status: boolean
}

export interface HomeScreenState {
  isBusy: boolean
}

class Home extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-9.jpg')} />
        <Text>Home Page</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  status: state.app.status,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
