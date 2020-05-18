import React from 'react';
import {View, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {InputField} from '../../../common/InputField';
import {startAddBook} from './actions';

export const AddBookComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        name: '',
        author: '',
        price: '',
      }}
      onSubmit={({name, author, price}, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        dispatch(
          startAddBook({
            name,
            author,
            price,
          }),
        );
        setSubmitting(false);
        resetForm();
        setTimeout(() => {}, 500);
        navigation.navigate('BookList');
      }}>
      {({handleChange, handleSubmit, values, isSubmitting}) => (
        <View>
          {isSubmitting ? <Text>Đang xử lý</Text> : null}
          <Text>Tên sách:</Text>
          <Field
            name="name"
            placeholder="Tên sách"
            onChangeText={handleChange('name')}
            component={InputField}
            value={values.name}
          />
          <Text>Tác giả:</Text>
          <Field
            name="author"
            placeholder="Tác giả"
            onChangeText={handleChange('author')}
            component={InputField}
            value={values.author}
          />
          <Text>Giá:</Text>
          <Field
            name="price"
            placeholder="Giá"
            onChangeText={handleChange('price')}
            component={InputField}
            value={values.price}
          />
          <Button
            title="Submit"
            disabled={isSubmitting}
            onPress={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
};
