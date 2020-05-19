import auth from '@react-native-firebase/auth';

import {
  LoginActionType,
  LoginStateType,
  LOGIN,
  LOGIN_SUCCES as LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET,
} from './types';

const loginInitialState: LoginStateType = {
  authRef: auth,
  loading: false,
  errorMessage: '',
  isAuthenticated: false,
};

export const authReducer = (
  state = loginInitialState,
  action: LoginActionType,
): LoginStateType => {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, isAuthenticated: true};
    case LOGIN_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    case LOGIN_RESET:
      return loginInitialState;
    default:
      return state;
  }
};
