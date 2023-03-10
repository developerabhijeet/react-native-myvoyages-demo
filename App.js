/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { SignUp } from './screens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRoutesName={'SignUp'}
      >
        <Stack.Screen name='Signup' component={SignUp} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App;
