import {Book} from '../../../../types/Book';

export const GET_BOOKS = 'BOOK/BookList/GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'BOOK/BookList/GET_BOOK_SUCCESS';
export const GET_BOOKS_ERROR = 'BOOK/BookList/GET_BOOK_ERROR';

export interface getBooks {
  type: typeof GET_BOOKS;
}

export interface getBooksSuccss {
  type: typeof GET_BOOKS_SUCCESS;
  payload: Book[];
}

export interface getBooksError {
  type: typeof GET_BOOKS_ERROR;
  payload: string;
}

export type BookListActionType = getBooks | getBooksSuccss | getBooksError;

export type BookListStateType = {
  books: Book[];
  loading: boolean;
  bookListErrorMessage: string;
};

