import {Book} from '../../../../types/Book';

export const GET_BOOK = 'BookDetails/GET_BOOK';
export const GET_BOOK_SUCCESS = 'BookDetails/GET_BOOK_SUCCESS';
export const GET_BOOK_FAIL = 'BookDetails/GET_BOOK_FAIL';

export interface GetBook {
  type: typeof GET_BOOK;
}

export interface GetBookSuccess {
  type: typeof GET_BOOK_SUCCESS;
  payload: Book;
}

export interface GetBookFail {
  type: typeof GET_BOOK_FAIL;
  payload: string;
}

export type BookDetailsActionType = GetBook | GetBookSuccess | GetBookFail;

export type BookDetailsStateType = {
  book: Book | undefined;
  loading: boolean;
  errorMessage: string;
};
