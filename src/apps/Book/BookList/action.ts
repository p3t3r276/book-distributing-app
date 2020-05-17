import firestore from '@react-native-firebase/firestore';
import {Dispatch} from 'redux';

import {Book} from '../../../../types/Book';
import {
  BookListActionType,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
} from './types';
import {AppAction} from 'types/AppAction';

export const getBooks = (): BookListActionType => ({
  type: GET_BOOKS,
});

export const getBookSuccess = (books: Book[]): BookListActionType => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});

export const getBooksError = (message: string): BookListActionType => ({
  type: GET_BOOKS_ERROR,
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
          quantity: 0,
        });
        bookList.push(newBook as Book);
      });

      // get quantities
      const bookQuantitysnapshot = await firestore()
        .doc('bookQuantities/1-2020')
        .get();

      const bookQuantitydata = bookQuantitysnapshot.data();

      if (bookQuantitydata) {
        bookList.forEach((book) => {
          book.quantity = bookQuantitydata[book.id]
            ? bookQuantitydata[book.id]
            : 0;
        });
      }

      console.log(bookList);

      return dispath(getBookSuccess(bookList));
    } catch (err) {
      console.log(err);
      return dispath(getBooksError('Error when loading books'));
    }
  };
};
