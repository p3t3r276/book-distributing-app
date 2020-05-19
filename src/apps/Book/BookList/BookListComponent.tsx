import React, {useEffect} from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {Book} from '../../../../types/Book';
import {AppState} from '../../../../types/AppState';
import {startGetBooks} from './action';

export const BookListComponent = () => {
  const bookListProp = useSelector((state: AppState) => state.bookList.books);
  const loading = useSelector((state: AppState) => state.bookList.loading);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchBooks() {
      dispatch(startGetBooks());
    }
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
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={bookListProp}
      renderItem={renderItem}
    />
  );
};
