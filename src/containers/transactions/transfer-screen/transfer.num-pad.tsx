import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './transfer.styles'
import { colors } from '../../../themes'

const numpad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', 'X']]

interface NumPadProps {
  onInput: (key: string) => void
}

const NumPad: React.SFC<NumPadProps> = (props: NumPadProps) => {
  return (
    <View style={screenStyles.numPad.container}>
      {numpad.map(numbers => (
        <View key={Math.random()} style={screenStyles.numPad.row}>
          {numbers.map(number => (
            <TouchableOpacity
              key={Math.random()}
              style={screenStyles.numPad.button}
              onPress={() => props.onInput(number)}
            >
              <Text preset="primaryLarge" text={number} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  )
}

export default NumPad
