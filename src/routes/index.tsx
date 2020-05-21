import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {BookList} from '../screens/BookList';
import {BookDetails} from '../screens/BookDetails';
import {AddBook} from '../screens/AddBook';
import {Login} from '../screens/Login';
import {AppState} from '../../types/AppState';

const Stack = createStackNavigator();

export const Routes = () => {
  const currentUser = useSelector((state: AppState) => state.auth.currentUser);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {currentUser ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
            <Stack.Screen name="AddBook" component={AddBook} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
