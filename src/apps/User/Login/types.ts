export const LOGIN = '@USER/LOGIN';
export const LOGIN_SUCCESS = '@USER/LOGIN_SUCCES';
export const LOGIN_FAIL = '@USER/LOGIN_FAIL';
export const LOGIN_RESET = '@USER/RESET';

export const USER_FETCH = '@USER/USER_FETCH';
export const USER_FETCH_SUCCESS = '@USER/USER_FETCH_SUCCESS';
export const USER_FETCH_FAIL = '@USER/USER_FETCH_FAIL';

interface login {
  type: typeof LOGIN;
}

interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
}

interface loginFail {
  type: typeof LOGIN_FAIL;
  payload: string;
}

interface loginReset {
  type: typeof LOGIN_RESET;
}

interface fetchUser {
  type: typeof USER_FETCH;
}

interface fetchUserSuccess {
  type: typeof USER_FETCH_SUCCESS;
  payload: User;
}

interface fetchUserFail {
  type: typeof USER_FETCH_FAIL;
  payload: string;
}

export type LoginActionType =
  | login
  | loginSuccess
  | loginFail
  | loginReset
  | fetchUser
  | fetchUserSuccess
  | fetchUserFail;

export type LoginStateType = {
  loading: boolean;
  errorMessage: string | undefined;
  currentUser: User | undefined;
};

export type User = {
  id: string;
  email: string | null;
  name: string;
  currentPeriod: string;
};
