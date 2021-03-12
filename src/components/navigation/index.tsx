import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../welcome';
import { Login } from '../login';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}