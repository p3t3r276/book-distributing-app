import {Book} from '../../../../types/Book';

export const ADD_BOOK = '@BOOK/ADD_BOOK';
export const ADD_BOOK_SUCCESS = '@BOOK/ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAIL = '@BOOK/ADD_BOOK_SUCCESS';

export type startAddBook = {
  type: typeof ADD_BOOK;
};

export type addBookSuccess = {
  type: typeof ADD_BOOK_SUCCESS;
  payload: Book;
};

export type addBookFail = {
  type: typeof ADD_BOOK_FAIL;
  payload: string;
};

export type AddBookActionType = startAddBook | addBookSuccess | addBookFail;

export type AddBookStateType = {
  book: Book | undefined;
  loading: boolean;
  errorMessage: string;
};
