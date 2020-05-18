import {
  AddBookStateType,
  AddBookActionType,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
} from './types';

const addBookInitialState: AddBookStateType = {
  loading: false,
  errorMessage: '',
};

export const addBookReducer = (
  state = addBookInitialState,
  action: AddBookActionType,
): AddBookStateType => {
  switch (action.type) {
    case ADD_BOOK:
      return {...state, loading: true};
    case ADD_BOOK_SUCCESS:
      return {...state, loading: false};
    case ADD_BOOK_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    default:
      return state;
  }
};
