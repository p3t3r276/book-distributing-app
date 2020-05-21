import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import {BookList} from '../screens/BookList';
import {BookDetails} from '../screens/BookDetails';
import {AddBook} from '../screens/AddBook';
import {Login} from '../screens/Login';

export type RootStackParamList = {
  Login: undefined;
  BookList: undefined;
  BookDetails: {id: string};
  AddBook: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BookList" component={BookList} />
    <Stack.Screen name="BookDetails" component={BookDetails} />
    <Stack.Screen name="AddBook" component={AddBook} />
  </Stack.Navigator>
);
