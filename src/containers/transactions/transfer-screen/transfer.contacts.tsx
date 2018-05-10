import * as React from 'react'
import { TouchableOpacity, View, ScrollView, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { TextField } from 'react-native-material-textfield'

import { Text } from '../../../components'
import { users } from '../../../config/duumy'
import * as screenStyles from './transfer.styles'
import { colors } from '../../../themes'

interface ContactsProps {
  searchText: string
  updateSearchText: (searchText: string) => void
  onSelectRecipient: () => void
}

const Contacts: React.SFC<ContactsProps> = (props: ContactsProps) => {
  const { searchText, updateSearchText, onSelectRecipient } = props
  return (
    <View style={screenStyles.contacts.container}>
      {/* <View style={screenStyles.contacts.searchBox}>
        <TextInput style={screenStyles.contacts.searchInput} />
        <Icon name="search" size={18} color={colors.whiteBlue} />
      </View> */}
      <View style={screenStyles.searchField}>
        <TextField
          label="Search"
          value={searchText}
          onChangeText={searchText => updateSearchText(searchText)}
          {...screenStyles.textInputColors}
        />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {users.map(user => (
          <View key={Math.random()} style={screenStyles.cell.container}>
            <View style={screenStyles.cell.avatar}>
              <Icon name="user" size={18} color={colors.weakBlack} />
            </View>
            <TouchableOpacity style={screenStyles.cell.userInfo} onPress={onSelectRecipient}>
              <Text preset="primarySmall" text={'Thomas Schulz'} />
              <View style={screenStyles.cell.walletsContainer}>
                <Image
                  style={screenStyles.cell.wallet}
                  source={require('../../../assets/wallets/binance-32.png')}
                />
                <Image
                  style={screenStyles.cell.wallet}
                  source={require('../../../assets/wallets/coinbase-32.png')}
                />
                <Image
                  style={screenStyles.cell.wallet}
                  source={require('../../../assets/wallets/gdax-32.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={screenStyles.cell.moreButton} onPress={() => {}}>
              <Icon name="more-horizontal" color={colors.text} size={15} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  )
}

export default Contacts
