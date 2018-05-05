import * as React from 'react'
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { from, ImmutableArray } from 'seamless-immutable'

import * as screenStyles from './contacts.styles'
import TopArea from './contacts.top-area'
import Cell from './contacts.cell'
import Header from './contacts.section-header'
import ScrollBar from './contacts.scroll-bar'

const users: Array<{ name: string; address: string }> = [
  { name: 'A test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'b test user', address: 'San Fransico, CA' },
  { name: 'B test user', address: 'San Fransico, CA' },
  { name: 'b test user', address: 'San Fransico, CA' },
  { name: 'd test user', address: 'San Fransico, CA' },
  { name: 'da test user', address: 'San Fransico, CA' },
  { name: 'Da test user', address: 'San Fransico, CA' },
  { name: 'c test user', address: 'San Fransico, CA' },
  { name: 'z test user', address: 'San Fransico, CA' },
  { name: 'D test user', address: 'San Fransico, CA' },
  { name: 'S test user', address: 'San Fransico, CA' },
  { name: 's test user', address: 'San Fransico, CA' },
  { name: 'W test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'w test user', address: 'San Fransico, CA' },
  { name: 'na test user', address: 'San Fransico, CA' },
  { name: 'ya test user', address: 'San Fransico, CA' },
  { name: 'ya test user', address: 'San Fransico, CA' },
  { name: 'ea test user', address: 'San Fransico, CA' },
  { name: 'ma test user', address: 'San Fransico, CA' },
  { name: 'ja test user', address: 'San Fransico, CA' },
  { name: 'ia test user', address: 'San Fransico, CA' },
  { name: 'ca test user', address: 'San Fransico, CA' },
  { name: 'qa test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
]

export interface ContactsScreenProps {
  navigation: NavigationParams
}

export interface ContactsScreenState {
  isBusy: boolean
  data: any
}

class Contacts extends React.Component<ContactsScreenProps, ContactsScreenState> {
  state = {
    isBusy: false,
    data: users,
  }

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  getSections = () => {
    const { data } = this.state

    let sectionTitle = ''
    const sections = []
    data.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    data.forEach(item => {
      const title = item.name[0].toUpperCase()
      if (sectionTitle !== title) {
        sections.push(<Header title={title} />)
        sectionTitle = title
      }
      sections.push(<Cell {...item} />)
    })
    return sections
  }

  scrollTo = (title: string) => {}

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollBar scrollTo={this.scrollTo} />
        <ScrollView style={screenStyles.contacts}>{this.getSections()}</ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
