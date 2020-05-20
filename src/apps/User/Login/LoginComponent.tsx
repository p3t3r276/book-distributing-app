import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {AppState} from '../../../../types/AppState';
import {InputField} from '../../../common/InputField';
import {startLogin, beforeLogin} from './actions';
import {User} from './types';
import {ThunkDispatch} from 'redux-thunk';
import {AppAction} from 'types/AppAction';
import {bindActionCreators} from 'redux';

type LoginComponentProps = LinkedStateProps & LinkedDispatchProps;

export const LoginComponent = ({
  startLogin,
  beforeLogin,
  currentUser,
  loading,
  errorMessage,
}: LoginComponentProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    beforeLogin();
  }, []);

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={({email, password}, {setSubmitting}) => {
        setSubmitting(true);
        // Do stuff
        try {
          startLogin(email, password);
          setSubmitting(false);

          // chuyển screen sau khi login
          navigation.navigate('BookList');
        } catch (err) {
          console.log('Login error: ', err);
        }
      }}>
      {({values, handleChange, handleSubmit, isSubmitting}) => (
        <View>
          {isSubmitting || loading ? <ActivityIndicator size="large" /> : null}
          {!!errorMessage && <Text>{errorMessage}</Text>}
          <Text>Email/Tên đăng nhập:</Text>
          <Field
            name="email"
            placeholder="Email/Tên đăng nhập"
            onChangeText={handleChange('email')}
            autoCapitalize="none"
            component={InputField}
            value={values.email}
          />
          <Text>Password:</Text>
          <Field
            name="password"
            placeholder="Password"
            onChangeText={handleChange('password')}
            autoCapitalize="none"
            component={InputField}
            value={values.password}
            secureTextEntry={true}
          />
          <Button
            disabled={isSubmitting || loading}
            title="Đăng nhập"
            onPress={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
};

interface LinkedStateProps {
  currentUser: User | undefined;
  loading: boolean;
  errorMessage: string | undefined;
}

interface LinkedDispatchProps {
  startLogin: (email: string, password: string) => void;
  beforeLogin: () => void;
}

const mapStateToProps = (state: AppState, {}): LinkedStateProps => ({
  ...state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppAction>,
  {},
): LinkedDispatchProps => ({
  startLogin: bindActionCreators(startLogin, dispatch),
  beforeLogin: bindActionCreators(beforeLogin, dispatch),
});

export const LoginComp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
