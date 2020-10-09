import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BookLover from '../../assets/svg/book_lover.svg'
import styles from './styles'
import L from '../../constants/layout'
import Button from '../../components/Button'
const {
  window: { width, height },
} = L
const GettingStarted = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.startText}>Get Started Now</Text>
        <BookLover height={height / 2.8} width={width - 10} />
        <Text style={styles.text}>
          Get free education from anywhere when your smartphone is your school
        </Text>
        <Button text='Sign in' block style={styles.button} />
        <Button secondary text='Create account' block />
      </View>
    </ScrollView>
  )
}

export default GettingStarted
