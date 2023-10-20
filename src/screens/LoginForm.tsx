import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StatusBar, Text, InputText, Button } from '../components';
import { Formik } from 'formik';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import { getAuth } from '../actions';

export default () => {
  const [session, setSession] = useState<string | null>(null);
  const navigation = useNavigation();
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <>
      <StatusBar />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={() => {
          getAuth(setSession);
          if (session) {
            navigation.navigate('RootBottomTab' as never)
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <LinearGradient
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 16
            }}
            colors={['#040306', '#131624']}

          >
            <Text style={{ fontSize: 20 }}>Login to access</Text>
            <Text style={{ fontSize: 20 }}>all of your Spotify contents.</Text>
            <InputText
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              label='Email'
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />
            <InputText
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              label='Password'
              value={values.password}
              touched={touched.password}
              error={errors.password}
              secureTextEntry
            />
            <View style={{ paddingVertical: 12 }} />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </LinearGradient>
        )}
      </Formik>
    </>
  );
}