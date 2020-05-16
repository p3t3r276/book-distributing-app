import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BookList} from '../apps/Book/BookList';
import {BookDetails} from '../apps/Book/BookDetails';
import {Login} from '../apps/Login';

export type RootStackParamList = {
  Login: undefined;
  BookList: undefined;
  BookDetails: {id: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BookList">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
