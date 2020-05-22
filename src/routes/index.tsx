import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {BookList} from '../screens/BookList';
import {BookDetails} from '../screens/BookDetails';
import {AddBook} from '../screens/AddBook';
import {Login} from '../screens/Login';

import {AppState} from '../../types/AppState';
import {User} from '../apps/User/Login/types';

export type RootStackParamList = {
  Login: undefined;
  BookList: undefined;
  BookDetails: {id: string};
  AddBook: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RoutesComp = ({currentUser}: LinkedStateProps) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    console.log('check user', currentUser);
    if (currentUser !== undefined) setAuthenticated(true);
  }, [currentUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
            <Stack.Screen name="AddBook" component={AddBook} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

interface LinkedStateProps {
  currentUser: User | undefined;
}

const mapStateToProps = (state: AppState, {}): LinkedStateProps => ({
  currentUser: state.auth.currentUser,
});

export const Routes = connect(mapStateToProps, null)(RoutesComp);
