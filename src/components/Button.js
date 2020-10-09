import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import colors from '../constants/colors'
import L from '../constants/layout'
const Button = ({ style, text, secondary, onPress, block, loading }) => {
  const styles = {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: secondary ? colors.secondary : colors.primary,
    width: block ? '100%' : 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: L.borderRadius,
    ...style,
  }
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles}
      activeOpacity={0.8}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          style={{ marginRight: 10 }}
          size='small'
          color='#fff'
        />
      ) : null}
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
