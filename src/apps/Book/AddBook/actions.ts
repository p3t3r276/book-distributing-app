import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {Dispatch} from 'react';

import {
  AddBookActionType,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
} from './types';
import {BookEntry} from '../../../../types/BookEntry';
import {AppAction} from '../../../../types/AppAction';

export const saveBook = (): AddBookActionType => ({
  type: ADD_BOOK,
});

export const saveBookSuccess = (): AddBookActionType => ({
  type: ADD_BOOK_SUCCESS,
});

export const saveBookFailed = (message: string): AddBookActionType => ({
  type: ADD_BOOK_FAIL,
  payload: message,
});

export const startAddBook = ({name, author, price}: BookEntry) => {
  return async (dispatch: Dispatch<AppAction>) => {
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
      dispatch(saveBookSuccess());
    } catch (err) {
      return dispatch(saveBookFailed('xảy ra lỗi khi lưu sạch'));
    }
  };
};
