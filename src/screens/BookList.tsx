import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import {BookListComponent} from '../apps/Book/BookList';
import {AppLayout} from '../common/AppLayout';

export const BookList = () => {
  const navigation = useNavigation();
  return (
    <AppLayout>
      <TitleWrapper>
        <Title h3>Đầu Sách</Title>
      </TitleWrapper>
      <Main>
        <Button
          title="Thêm sách"
          onPress={() => navigation.navigate('AddBook')}
          style={{marginBottom: '20px'}}
        />
        <BookListComponent />
      </Main>
    </AppLayout>
  );
};

const TitleWrapper = styled(View)`
  flex: 1;
  justify-content: center;
`;

const Title = styled(Text)`
  align-self: center;
`;

const Main = styled(View)`
  flex: 3;
  width: 100%;
`;
