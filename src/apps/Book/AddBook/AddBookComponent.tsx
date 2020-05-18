import React from 'react';
import {View, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {useSelector, useDispatch} from 'react-redux';

import {InputField} from '../../../common/InputField';
import {startAddBook} from './actions';

export const AddBookComponent = () => {
  const dispatch = useDispatch();
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
      }}>
      {({handleChange, handleSubmit, values, isSubmitting}) => (
        <View>
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
          {isSubmitting ? <Text>Đang xử lý</Text> : null}
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
