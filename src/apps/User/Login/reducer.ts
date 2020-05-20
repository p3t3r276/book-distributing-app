import {
  LoginActionType,
  LoginStateType,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET,
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
} from './types';

const loginInitialState: LoginStateType = {
  loading: false,
  errorMessage: undefined,
  currentUser: undefined,
};

export const authReducer = (
  state = loginInitialState,
  action: LoginActionType,
): LoginStateType => {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false};
    case LOGIN_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    case LOGIN_RESET:
      return loginInitialState;
    case USER_FETCH:
      return {...state, loading: true};
    case USER_FETCH_SUCCESS:
      console.log('fetch user success', action.payload);
      return {...state, loading: false, currentUser: action.payload};
    case USER_FETCH_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    default:
      return state;
  }
};
