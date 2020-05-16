import {
  BookDetailsStateType,
  BookDetailsActionType,
  GET_BOOK,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAIL,
} from './types';

const BookDetailsInitialState: BookDetailsStateType = {
  book: undefined,
  loading: false,
  errorMessage: '',
};

export const bookDetailsReducer = (
  state = BookDetailsInitialState,
  action: BookDetailsActionType,
): BookDetailsStateType => {
  switch (action.type) {
    case GET_BOOK:
      return {...state, loading: true};
    case GET_BOOK_SUCCESS:
      return {...state, loading: false, book: action.payload};
    case GET_BOOK_FAIL:
      return {...state, loading: false, errorMessage: action.payload};
    default:
      return state;
  }
};
