import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {LogoutComponent} from '../apps/User/Logout';

const AppLayoutWrapper = styled(View)`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const AppLayout: React.FC<{}> = ({children}) => (
  <AppLayoutWrapper>
    <LogoutComponent />
    {children}
  </AppLayoutWrapper>
);
