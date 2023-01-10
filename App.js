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
import OtpChange from './screens/otpscreen';
import SettingsScreen from './screens/settings';
import SetNewPassword from './screens/setnewpassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRoutesName={'change-password'}
      >
        <Tab.Screen name='change-password' component={SetNewPassword} />
        <Tab.Screen name='Settings' component={SettingsScreen}/>
        <Tab.Screen name='Otp' component={OtpChange}/>

      </Tab.Navigator>
      
    </NavigationContainer>
  )
}

export default App;
