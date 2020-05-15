import React, {useEffect, useState} from 'react';
import {FlatList, TouchableWithoutFeedback} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {Book} from '../../../../types/Book';
import {AppState} from '../../../../types/AppState';
import {startGetBooks} from './action';

export const BookListComponent = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const bookListState = useSelector((state: AppState) => state.bookList.books);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = () => {
      dispatch(startGetBooks());
      setBookList(bookListState);
    };
    fetchBooks();
  }, []);

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
