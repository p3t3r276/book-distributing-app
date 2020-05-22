import React from 'react';
import {Button} from 'react-native-elements';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {AppAction} from '../../../../types/AppAction';
import {startLogout} from './actions';
import {beforeLogin} from '../Login';

type LogoutComponentProps = LinkedDispatchProps;

export const LogoutComponent = ({
  startLogout,
  resetUser,
}: LogoutComponentProps) => {
  const navigation = useNavigation();
  return (
    <Button
      title="Đăng xuất"
      onPress={() => {
        startLogout();

        resetUser();

        navigation.navigate('Login');
      }}
    />
  );
};

interface LinkedDispatchProps {
  startLogout: () => void;
  resetUser: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AppAction>,
  {},
): LinkedDispatchProps => ({
  startLogout: bindActionCreators(startLogout, dispatch),
  resetUser: bindActionCreators(beforeLogin, dispatch),
});

export const LogoutComp = connect(null, mapDispatchToProps)(LogoutComponent);
