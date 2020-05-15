import {Book} from '../../../../types/Book';

export const GET_BOOK = 'BOOK/GET_BOOK';
export const GET_BOOK_SUCCESS = 'BOOK/GET_BOOK_SUCCESS';
export const GET_BOOK_ERROR = 'BOOK/GET_BOOK_ERROR';

export interface getBooks {
  type: typeof GET_BOOK;
}

export interface getBooksSuccss {
  type: typeof GET_BOOK_SUCCESS;
  payload: Book[];
}

export interface getBooksError {
  type: typeof GET_BOOK_ERROR;
  payload: string;
}

export type BookListAction = getBooks | getBooksSuccss | getBooksError;

export type BookListStateType = {
  books: Book[];
  loading: boolean;
  message: string;
};

