import {Dispatch} from 'react';

import {
  LoginActionType,
  LOGIN,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGIN_RESET,
} from './types';
import {AppAction} from '../../../../types/AppAction';
import {AppState} from '../../../../types/AppState';

const login = (): LoginActionType => ({
  type: LOGIN,
});

const loginSuccess = (): LoginActionType => ({
  type: LOGIN_SUCCES,
});

const loginFail = (message: string): LoginActionType => ({
  type: LOGIN_FAIL,
  payload: message,
});

export const startLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(login());

    try {
      // sign in
      const user = await getState().auth.authRef.signInWithEmailAndPassword(
        email,
        password,
      );

      if (user) {
        return dispatch(loginSuccess());
      } else {
        return dispatch(loginFail('Email hoặc mật khẩu không chính xác'));
      }
    } catch (err) {
      console.log('Auth eror: ', err);
      return dispatch(loginFail('xảy ra lỗi trong quá trình đăng nhập'));
    }
  };
};

export const beforeLogin = () => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch({type: LOGIN_RESET});
  };
};
