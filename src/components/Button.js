import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../constants/colors'
import L from '../constants/layout'
const Button = ({ style, text, secondary, onPress, block }) => {
  const styles = {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: secondary ? colors.secondary : colors.primary,
    width: block ? '100%' : 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: L.borderRadius,
    ...style,
  }
  return (
    <TouchableOpacity style={styles} activeOpacity={0.8} onPress={onPress}>
      <Text
        style={{
          fontSize: 18,
          color: 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
