import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

export const BookListComponent = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBook = async () => {
      setBookList(await getBooks());
    };
    fetchBook();
  }, [bookList]);

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}) => (
    <ListItem key={item.id} title={item.name} bottomDivider />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={bookList}
      renderItem={renderItem}
    />
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
