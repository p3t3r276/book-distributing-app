import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../routes';
import {BookDetailsComponent} from '../apps/Book/BookDetails';
import {AppLayout} from '../common/AppLayout';

type BookDetailsRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;
type Props = {
  route: BookDetailsRouteProp;
};

export const BookDetails = ({route}: Props) => {
  return (
    <AppLayout>
      <BookDetailsComponent id={route.params.id} />
    </AppLayout>
  );
};
