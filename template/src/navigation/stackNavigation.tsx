import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {

  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
  )
}

export default StackNavigation