import * as React from 'react'
import { TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './home.styles'
import { colors } from '../../../themes'

const contacts = [
  {
    id: 1,
    name: 'Test User 1',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 2,
    name: 'Test User 2',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 3,
    name: 'Test User 3',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 4,
    name: 'Test User 4',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 5,
    name: 'Test User 5',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 1,
    name: 'Test User 1',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 2,
    name: 'Test User 2',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 3,
    name: 'Test User 3',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 4,
    name: 'Test User 4',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
  {
    id: 5,
    name: 'Test User 5',
    address: 'a098g7as90dg6a9s87dg6a89s7',
  },
]

interface ContactsProps {}

const Contacts: React.SFC<ContactsProps> = (props: ContactsProps) => {
  return (
    <View style={screenStyles.contacts.container}>
      <View style={screenStyles.contacts.searchBox}>
        <TextInput style={screenStyles.contacts.searchInput} />
        <Icon name="search" size={18} color={colors.whiteBlue} />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {contacts.map(user => (
          <View key={Math.random()} style={screenStyles.contacts.userContainer}>
            <View style={screenStyles.contacts.avatar}>
              <Icon name="user" size={18} color={colors.lightGreen} />
            </View>
            <View>
              <Text>{user.name}</Text>
              <Text>{user.address}</Text>
            </View>
          </View>
        ))}
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  )
}

export default Contacts
