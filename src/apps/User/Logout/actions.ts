import {LogoutActionType, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL} from './types';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import auth from '@react-native-firebase/auth';

const logout = (): LogoutActionType => ({type: LOGOUT});

const logoutSuccess = (): LogoutActionType => ({type: LOGOUT_SUCCESS});

const logoutFail = (message: string): LogoutActionType => ({
  type: LOGOUT_FAIL,
  payload: message,
});

export const startLogout = (): ThunkAction<
  Promise<void>,
  {},
  {},
  LogoutActionType
> => {
  return async (
    dispatch: ThunkDispatch<{}, {}, LogoutActionType>,
  ): Promise<void> => {
    dispatch(logout());

    try {
      await auth().signOut();

      dispatch(logoutSuccess());
    } catch (err) {
      console.log('Logout error: ', err);
      dispatch(logoutFail('Đã xảy ra lỗi trong quá trình đăng xuất'));
    }
  };
};
