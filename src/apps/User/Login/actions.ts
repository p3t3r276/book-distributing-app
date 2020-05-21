import {Dispatch} from 'react';
import auth from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';

import {
  LoginActionType,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET,
  USER_FETCH,
  USER_FETCH_SUCCESS,
  User,
  USER_FETCH_FAIL,
} from './types';
import {AppAction} from '../../../../types/AppAction';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

const login = (): LoginActionType => ({
  type: LOGIN,
});

const loginSuccess = (): LoginActionType => ({
  type: LOGIN_SUCCESS,
});

const loginFail = (message: string): LoginActionType => ({
  type: LOGIN_FAIL,
  payload: message,
});

const fetchUser = (): LoginActionType => ({
  type: USER_FETCH,
});

const fetchUserSuccess = (user: User): LoginActionType => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});

const fetchUserFail = (message: string): LoginActionType => ({
  type: USER_FETCH_FAIL,
  payload: message,
});

export const startLogin = (
  email: string,
  password: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(login());

    try {
      // sign in
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      if (userCredential) {
        dispatch(loginSuccess());

        dispatch(startFetchUser());
      } else {
        dispatch(loginFail('Email hoặc mật khẩu không chính xác'));
      }
    } catch (err) {
      console.log('Auth eror: ', err);
      dispatch(loginFail('xảy ra lỗi trong quá trình đăng nhập'));
    }
  };
};

export const beforeLogin = () => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch({type: LOGIN_RESET});
  };
};

export const startFetchUser = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(fetchUser());

    try {
      auth().onAuthStateChanged(async (user) => {
        if (user) {
          const doc = await fireStore().doc(`users/${user.uid}`).get();
          const currentUser: User = {
            ...doc.data(),
            id: user.uid,
            email: user.email,
          };
          dispatch(fetchUserSuccess(currentUser));
          return;
        }
        dispatch(fetchUserFail('Không tải được thông tin người dùng'));
      });
    } catch (err) {
      console.log('Fetch user error: ', err);
      dispatch(
        fetchUserFail(
          'Không thể tải dữ liệu người dùng. Vui lòng thử lại trong ít phút nữa',
        ),
      );
    }
  };
};
