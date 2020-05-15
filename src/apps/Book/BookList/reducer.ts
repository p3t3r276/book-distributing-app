import {
  BookListAction,
  BookListStateType,
  GET_BOOK,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
} from './types';

const bookListInitialState: BookListStateType = {
  books: [],
  loading: false,
  bookListErrorMessage: '',
};

export const bookListReducer = (
  state = bookListInitialState,
  action: BookListAction,
): BookListStateType => {
  switch (action.type) {
    case GET_BOOK:
      return {...state, loading: true};
    case GET_BOOK_SUCCESS:
      return {...state, loading: false, books: action.payload};
    case GET_BOOK_ERROR:
      return {...state, loading: false, bookListErrorMessage: action.payload};
    default:
      return state;
  }
};
