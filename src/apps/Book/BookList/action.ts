import firestore from '@react-native-firebase/firestore';
import {Dispatch} from 'redux';

import {Book} from '../../../../types/Book';
import {
  BookListAction,
  GET_BOOK,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
} from './types';
import {AppAction} from 'types/AppAction';

export const getBooks = (): BookListAction => ({
  type: GET_BOOK,
});

export const getBookSuccess = (books: Book[]): BookListAction => ({
  type: GET_BOOK_SUCCESS,
  payload: books,
});

export const getBooksError = (message: string): BookListAction => ({
  type: GET_BOOK_ERROR,
  payload: message,
});

export const startGetBooks = () => {
  return async (dispath: Dispatch<AppAction>) => {
    dispath(getBooks());
    try {
      const bookList: Book[] = [];
      const snapshot = await firestore().collection('books').get();

      snapshot.docs.forEach((doc) => {
        const newBook = Object.assign({id: doc.id}, doc.data(), {
          createdAt: doc.data().createdAt.toDate(),
        });
        bookList.push(newBook as Book);
        return dispath(getBookSuccess(bookList));
      });
    } catch (err) {
      console.log(err);
      return dispath(getBooksError('Error when loading books'));
    }
  };
};
