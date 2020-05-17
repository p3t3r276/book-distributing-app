import React from 'react';
import {View, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {InputField} from '../../../common/InputField';

export const AddBookComponent = () => (
  <Formik
    validateOnBlur={false}
    validateOnChange={false}
    onSubmit={() => {}}
    initialValues={{
      name: '',
      author: '',
      price: '',
      quantity: '',
    }}>
    {({handleChange, handleSubmit, values}) => (
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
        <Text>Số lượng:</Text>
        <Field
          name="quantity"
          placeholder="Số lượng"
          onChangeText={handleChange('quantity')}
          component={InputField}
          value={values.quantity}
        />
        <Button title="Submit" onPress={() => handleSubmit()} />
      </View>
    )}
  </Formik>
);
