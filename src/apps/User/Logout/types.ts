export const LOGOUT = '@USER/LOGOUT';
export const LOGOUT_SUCCESS = '@USER/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = '@USER/LOGOUT_FAIL';

interface Logout {
  type: typeof LOGOUT;
}

interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFail {
  type: typeof LOGOUT_FAIL;
  payload: string;
}

export type LogoutActionType = Logout | LogoutSuccess | LogoutFail;

export type LogoutStateType = {
  loading: boolean;
  errorMessage: string | undefined;
};
