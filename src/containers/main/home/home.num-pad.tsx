import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './home.styles'
import { colors } from '../../../themes'

const numpad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', 'X']]

interface NumPadProps {
  onInput: (key: string) => void
}

const NumPad: React.SFC<NumPadProps> = (props: NumPadProps) => {
  return (
    <View style={screenStyles.numPad}>
      {numpad.map(numbers => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
          {numbers.map(number => (
            <TouchableOpacity
              style={screenStyles.numPadButton}
              onPress={() => props.onInput(number)}
            >
              <Text>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  )
}

export default NumPad
