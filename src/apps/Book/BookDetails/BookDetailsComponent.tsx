import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../../../types/AppState';
import {startGetBook} from './actions';

type Props = {
  id: string;
};

export const BookDetailsComponent = ({id}: Props) => {
  const {book, loading, errorMessage} = useSelector(
    (state: AppState) => state.bookDetails,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getBook = () => {
      dispatch(startGetBook(id));
    };
    getBook();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!book) {
    return <Text>{errorMessage}</Text>;
  }

  return (
    <View>
      <Text>{book.name}</Text>
      <Text>Số lượng: {book.quantity}</Text>
      <Text>{book.author}</Text>
    </View>
  );
};
