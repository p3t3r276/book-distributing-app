import {
  GET_BOOK,
  GET_BOOK_SUCCESS,
  BookDetailsActionType,
  GET_BOOK_FAIL,
} from './types';
import {Book} from '../../../../types/Book';
import {Dispatch} from 'react';
import {AppAction} from '../../../../types/AppAction';
import {AppState} from '../../../../types/AppState';

export const getBook = (): BookDetailsActionType => ({
  type: GET_BOOK,
});

export const getBookSuccessed = (book: Book): BookDetailsActionType => ({
  type: GET_BOOK_SUCCESS,
  payload: book,
});

export const getBookFailed = (message: string): BookDetailsActionType => ({
  type: GET_BOOK_FAIL,
  payload: message,
});

export const startGetBook = (id: string) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(getBook());
    try {
      const book: Book | undefined = getState().bookList.books.find(
        (b) => b.id === id,
      );

      if (!book) {
        return dispatch(getBookFailed('Không tìm thấy sách'));
      }

      return dispatch(getBookSuccessed(book));
    } catch (err) {
      console.log('BookDetailsError: ', err);
      return dispatch(getBookFailed('Xảy ra lỗi khi tìm sách'));
    }
  };
};
