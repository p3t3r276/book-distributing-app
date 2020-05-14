import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const BookListComponent = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBook = async () => {
      setBookList(await getBooks());
    };
    fetchBook();
  }, [bookList]);

  return (
    <View>
      <Text>Book List</Text>
      <TouchableOpacity onPress={() => getBooks()}>
        <Text>haha</Text>
      </TouchableOpacity>
      {bookList.length !== 0 ? <Text>{JSON.stringify(bookList)}</Text> : null}
    </View>
  );
};

const getBooks = async (): Promise<Book[]> => {
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

type Book = {
  id: string;
  name: string;
  author: string;
  price: string;
  image: string;
  createdAt: Date;
};
