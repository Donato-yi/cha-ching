import * as React from 'react'
import { TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SegmentedControlTab from 'react-native-segmented-control-tab'

import Cell from './history.cell'
import TopArea from './history.top-area'
import { history } from '../../../config/dummy'
import { History } from '../../../config/types'
import { Text } from '../../../components'

import * as screenStyles from './history.styles'

export interface HistoryScreenProps {
  navigation: NavigationParams
}

export interface HistoryScreenState {
  isBusy: boolean
  history: Array<History>
  viewIndex: number
}

class HistoryScreen extends React.Component<HistoryScreenProps, HistoryScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      history,
      viewIndex: 0,
    }
  }

  navigateTo = (route: string) => {
    if (route === 'back') {
      this.props.navigation.pop()
    } else {
      this.props.navigation.navigate(route)
    }
  }

  onTabPress = (viewIndex: number) => {
    this.setState({ viewIndex })
  }

  render() {
    const { viewIndex, history } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <SegmentedControlTab
          tabsContainerStyle={screenStyles.segmentTab.container}
          tabStyle={screenStyles.segmentTab.tabStyle}
          tabTextStyle={screenStyles.segmentTab.tabTextStyle}
          activeTabStyle={screenStyles.segmentTab.activeTabStyle}
          activeTabTextStyle={screenStyles.segmentTab.activeTextStyle}
          values={['Sent', 'Received']}
          selectedIndex={viewIndex}
          onTabPress={this.onTabPress}
        />
        <View style={screenStyles.tableRow}>
          <Text preset="primarySmall" style={screenStyles.cell.from} text="From" />
          <Text preset="primarySmall" style={screenStyles.cell.to} text="To" />
          <Text preset="primarySmall" style={screenStyles.cell.amountContainer} text="Amount" />
          <Text preset="primarySmall" style={screenStyles.cell.amountContainer} text="Coin" />
        </View>
        <ScrollableTabView
          style={screenStyles.container}
          onChangeTab={index => this.setState({ viewIndex: index.i })}
          renderTabBar={() => <View />}
          page={viewIndex}
        >
          <ScrollView style={screenStyles.childView}>
            {history.map(transaction => <Cell key={Math.random()} data={transaction} />)}
          </ScrollView>
          <ScrollView style={screenStyles.childView}>
            {history.map(transaction => <Cell key={Math.random()} data={transaction} />)}
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
