import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {Dispatch} from 'react';

import {
  AddBookActionType,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
} from './types';
import {Book} from '../../../../types/Book';
import {BookEntry} from '../../../../types/BookEntry';
import {AppAction} from '../../../../types/AppAction';
import {AppState} from '../../../../types/AppState';
import {getBooks} from '../BookList/action';

export const saveBook = (): AddBookActionType => ({
  type: ADD_BOOK,
});

export const saveBookSuccess = (book: Book): AddBookActionType => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

export const saveBookFailed = (message: string): AddBookActionType => ({
  type: ADD_BOOK_FAIL,
  payload: message,
});

export const startAddBook = ({name, author, price}: BookEntry) => {
  return async (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(saveBook());
    try {
      // save book to db
      const createdObjRef = await firestore()
        .collection('books')
        .add({
          name,
          author,
          price,
          image: '',
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        });
      console.log(createdObjRef.id);

      // save quantity (default is 0)
      await firestore()
        .doc('bookQuantities/1-2020')
        .update({
          [createdObjRef.id]: 0,
        });

      // add books to local collections
      // fetch real data
      dispatch(getBooks());
    } catch (err) {
      return dispatch(saveBookFailed('xảy ra lỗi khi lưu sạch'));
    }
  };
};
