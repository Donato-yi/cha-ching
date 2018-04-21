import * as React from 'react'
import { TouchableOpacity, View, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'
import Cell from './history.cell'

import * as screenStyles from './history.styles'

const data = {
  name: 'Peter Krieg',
  address: 'aowia9w8eug9q8234j9ajw30f',
  amount: '123456.789',
  wallet: 'Bitcoin',
}

export interface HistoryScreenProps {
  navigation: NavigationParams
}

export interface HistoryScreenState {
  isBusy: boolean
}

class History extends React.Component<HistoryScreenProps, HistoryScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.overlay}>
          <ScrollView>
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
            <Cell {...data} />
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(History)
