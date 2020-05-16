import {
  BookListAction,
  BookListStateType,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
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
    case GET_BOOKS:
      return {...state, loading: true};
    case GET_BOOKS_SUCCESS:
      return {...state, loading: false, books: action.payload};
    case GET_BOOKS_ERROR:
      return {...state, loading: false, bookListErrorMessage: action.payload};
    default:
      return state;
  }
};
