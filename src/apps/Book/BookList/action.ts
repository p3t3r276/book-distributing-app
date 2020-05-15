import firestore from '@react-native-firebase/firestore';
import {Book} from '../../../../types/Book';
import {BookListAction, GET_BOOK, GET_BOOK_SUCCESS} from './types';

export const getBooks = (): BookListAction => ({
  type: GET_BOOK,
});

export const getBookSuccess = (books: Book[]): BookListAction => ({
  type: GET_BOOK_SUCCESS,
  payload: books,
});

export const startGetBooks = async (): Promise<Book[]> => {
  const bookList: Book[] = [];
  const snapshot = await firestore().collection('books').get();

  snapshot.docs.forEach((doc) => {
    const newBook = Object.assign({id: doc.id}, doc.data(), {
      createdAt: doc.data().createdAt.toDate(),
    });
    bookList.push(newBook as Book);
  });
  return bookList;
};
