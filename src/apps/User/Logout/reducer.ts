import {
  LogoutStateType,
  LOGOUT,
  LogoutActionType,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';

const logOutInitialState: LogoutStateType = {
  loading: false,
  errorMessage: undefined,
};

export const logOutReducer = (
  state = logOutInitialState,
  action: LogoutActionType,
): LogoutStateType => {
  switch (action.type) {
    case LOGOUT:
      return {...state, loading: true};
    case LOGOUT_SUCCESS:
      return {...state, loading: false};
    case LOGOUT_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    default:
      return state;
  }
};
