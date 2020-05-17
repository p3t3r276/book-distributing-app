import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BookList} from '../screens/BookList';
import {BookDetails} from '../screens/BookDetails';
import {AddBook} from '../screens/AddBook';

export type RootStackParamList = {
  Login: undefined;
  BookList: undefined;
  BookDetails: {id: string};
  AddBook: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AddBook">
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="AddBook" component={AddBook} />
    </Stack.Navigator>
  </NavigationContainer>
);
