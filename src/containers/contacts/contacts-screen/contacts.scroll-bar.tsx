import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'
import * as screenStyles from './contacts.styles'
import { colors } from '../../../themes'

const titles = [
  '#',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

interface ScrollBarProps {
  scrollTo: (title: string) => void
}

const ScrollBar: React.SFC<ScrollBarProps> = (props: ScrollBarProps) => {
  const { scrollTo } = props
  return (
    <View style={screenStyles.scrollBar.container}>
      {titles.map(title => {
        <TouchableOpacity key={Math.random()} onPress={() => scrollTo(title)}>
          <Text preset="secondaryMedium" style={screenStyles.scrollBar.title} text={title} />
        </TouchableOpacity>
      })}
    </View>
  )
}

export default ScrollBar
