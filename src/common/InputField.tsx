import {FieldProps} from 'formik';
import React from 'react';
import {View, Text} from 'react-native';
import {Input, InputProps} from 'react-native-elements';

export const InputField = ({
  field,
  form: {errors, touched},
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <View>
      <Input {...field} {...props} />
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
    </View>
  );
};
