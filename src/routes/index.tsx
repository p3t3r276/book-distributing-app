import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BookList} from '../apps/Book/BookList';
import {Login} from '../apps/Login';

const Stack = createStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BookList">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BookList" component={BookList} />
    </Stack.Navigator>
  </NavigationContainer>
);
