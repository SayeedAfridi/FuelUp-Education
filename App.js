import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GettingStarted } from './src/screens'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()
const App = () => {
  return (
    <>
      <StatusBar barStyle='default' />
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='getting-started' component={GettingStarted} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
