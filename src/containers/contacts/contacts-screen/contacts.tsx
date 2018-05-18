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

import { users } from '../../../config/dummy'

export interface ContactsScreenProps {
  navigation: NavigationParams
}

export interface ContactsScreenState {
  isBusy: boolean
  data: any
}

class Contacts extends React.Component<ContactsScreenProps, ContactsScreenState> {
  contacts: any
  positions: {}
  state = {
    isBusy: false,
    data: users,
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

  getSections = () => {
    const { data } = this.state

    let sectionTitle = ''
    let temp = 0
    const sections = []

    this.positions = {}
    this.positions[sectionTitle] = 0
    data.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    data.forEach(item => {
      const title = item.name[0].toUpperCase()
      if (sectionTitle !== title) {
        sections.push(<Header title={title} />)
        this.positions[title] = this.positions[sectionTitle] + temp
        sectionTitle = title
        temp = 23
      }
      sections.push(<Cell {...item} />)
      temp += 50
    })
    return sections
  }

  scrollTo = (title: string) => {
    if (this.positions[title]) this.contacts.scrollTo({ x: 0, y: this.positions[title] })
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <View style={screenStyles.contacts}>
          <ScrollView ref={contacts => (this.contacts = contacts)} style={screenStyles.container}>
            {this.getSections()}
          </ScrollView>
          <ScrollBar scrollTo={this.scrollTo} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
