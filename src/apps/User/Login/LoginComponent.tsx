import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {AppState} from '../../../../types/AppState';
import {InputField} from '../../../common/InputField';
import {startLogin, beforeLogin} from './actions';

export const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {loading, errorMessage, isAuthenticated} = useSelector(
    (state: AppState) => state.auth,
  );

  useEffect(() => {
    dispatch(beforeLogin());
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
        dispatch(startLogin(email, password));

        setSubmitting(false);

        console.log(isAuthenticated);
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
