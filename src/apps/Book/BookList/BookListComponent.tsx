import React, {useEffect, useState} from 'react';
import {FlatList, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {Book} from '../../../../types/Book';
import {AppState} from '../../../../types/AppState';
import {startGetBooks} from './action';

export const BookListComponent = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  // State to Prop
  const bookListProp = useSelector((state: AppState) => state.bookList.books);
  const loading = useSelector((state: AppState) => state.bookList.loading)

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = () => {
      dispatch(startGetBooks());
      setBookList(bookListProp);
    };
    fetchBooks();
  }, []);

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}: {item: Book}) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('BookDetails', {id: item.id})}>
      <ListItem key={item.id} title={item.name} bottomDivider chevron />
    </TouchableWithoutFeedback>
  );

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={bookList}
      renderItem={renderItem}
    />
  );
};
