import {BookListAction, BookListStateType} from './types';

const bookListInitialState: BookListStateType = {
  books: [],
  loading: false,
  message: '',
};

export const bookListReducer = (
  state = bookListInitialState,
  action: BookListAction,
): BookListStateType => {
  return state;
};
