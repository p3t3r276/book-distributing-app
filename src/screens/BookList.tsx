import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import styled from 'styled-components';

import {BookListComponent} from '../apps/Book/BookList';
import {AppLayout} from '../common/AppLayout';

export const BookList = () => (
  <AppLayout>
    <TitleWrapper>
      <Title h3>Đầu Sách</Title>
    </TitleWrapper>
    <Main>
      <BookListComponent />
    </Main>
  </AppLayout>
);

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
