import React, {useEffect, useState} from 'react';
import {FlatList, TouchableWithoutFeedback} from 'react-native';
import {ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import {Book} from '../../../../types/Book';

export const BookListComponent = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  const navigation = useNavigation();
  useEffect(() => {
    const fetchBook = async () => {
      setBookList(await getBooks());
    };
    fetchBook();
  }, [bookList]);

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}: {item: Book}) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('BookDetails')}>
      <ListItem key={item.id} title={item.name} bottomDivider chevron />
    </TouchableWithoutFeedback>
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
