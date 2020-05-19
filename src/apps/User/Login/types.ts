export const LOGIN = '@USER/LOGIN';
export const LOGIN_SUCCES = '@USER/LOGIN_SUCCES';
export const LOGIN_FAIL = '@USER/LOGIN_FAIL';
export const LOGIN_RESET = '@USER/RESET';

interface login {
  type: typeof LOGIN;
}

interface loginSuccess {
  type: typeof LOGIN_SUCCES;
}

interface loginFail {
  type: typeof LOGIN_FAIL;
  payload: string;
}

interface loginReset {
  type: typeof LOGIN_RESET;
}

export type LoginActionType = login | loginSuccess | loginFail | loginReset;

export type LoginStateType = {
  authRef: any;
  isAuthenticated: boolean;
  loading: boolean;
  errorMessage: string;
};
