import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../../routes';
import {BookDetailsComponent} from './BookDetailsComponent';

type BookDetailsRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;
type Props = {
  route: BookDetailsRouteProp;
};

export const BookDetailsContainer = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
      <BookDetailsComponent />
    </View>
  );
};
