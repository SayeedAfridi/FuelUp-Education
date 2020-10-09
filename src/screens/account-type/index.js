import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Contributor from '../../assets/svg/contributor'
import Student from '../../assets/svg/student'
import Button from '../../components/Button'
import colors from '../../constants/colors'
import L from '../../constants/layout'
import styles from './styles'

const AccountType = () => {
  const [selected, setSelected] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.selectUserText}>Select user type</Text>
      <View>
        {selected ? (
          <Text style={styles.selectedText}>
            I am a <Text style={{ color: colors.primary }}>{selected}</Text>
          </Text>
        ) : null}
        <View style={styles.cardContainer}>
          <SelectableCard
            selected={selected === 'Student'}
            onPress={() => setSelected('Student')}>
            <Student
              height='50'
              width='50'
              color={selected === 'Student' ? 'white' : colors.primary}
            />
          </SelectableCard>
          <SelectableCard
            selected={selected === 'Contributor'}
            onPress={() => setSelected('Contributor')}>
            <Contributor
              height='50'
              width='50'
              color={selected === 'Contributor' ? 'white' : colors.primary}
            />
          </SelectableCard>
        </View>
      </View>
      <Button block style={styles.button} text='Create Account' secondary />
    </View>
  )
}

const SelectableCard = ({ selected, onPress, children }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: selected ? colors.primary : '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingVertical: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 38,
        width: L.window.width / 2 - 20,
        borderRadius: L.borderRadius,
      }}>
      {children}
    </TouchableOpacity>
  )
}

export default AccountType
