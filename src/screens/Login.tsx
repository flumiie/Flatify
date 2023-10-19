import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StatusBar, Text, InputText, Button } from '../components';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import qs from 'qs';
import EncryptedStorage from 'react-native-encrypted-storage';
import { auth_token } from '../vars/env';
import LinearGradient from 'react-native-linear-gradient';
import { Facebook, GoogleCircle, Phone, Spotify } from 'iconoir-react-native';

const getAuth = async (setSession: React.Dispatch<React.SetStateAction<string | null>>) => {
  try {
    setSession(null);
    await EncryptedStorage.removeItem('user_session')

    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({ 'grant_type': 'client_credentials' });

    const response = await axios.post(token_url, data, {
      headers: {
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    if (response.data.access_token) {
      // await Keychain.setGenericPassword("token", response.data.access_token);
      await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify(response.data)
      );
      const es = await EncryptedStorage.getItem('user_session');
      setSession(es);
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

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

  const performAuth = (via: "spotify" | "phone" | "google" | "facebook") => {

  }

  return (
    <>
      <StatusBar />
      <LinearGradient
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16
        }}
        colors={['#040306', '#131624']}

      >
        <View style={{ paddingTop: 80 }} />
        <Spotify color="white" height={80} width={80} />
        <View style={{ marginVertical: 20 }} />
        <Text style={{
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          Millions of Songs on Spotify
        </Text>
        <View style={{ marginVertical: 40 }} />
        <Button type='green-fill' onPress={() => performAuth('spotify')}>
          <View style={{ paddingVertical: 4 }}>
            <Text>Continue with Spotify</Text>
          </View>
        </Button>
        <View style={{ marginVertical: 10 }} />
        <Button type="outline" onPress={() => performAuth('phone')}>
          <Phone color="white" height={24} width={24} />
          <View style={{ marginHorizontal: 4 }} />
          <Text style={{ textAlign: 'center' }}>Continue with Phone Number</Text>
        </Button>
        <View style={{ marginVertical: 10 }} />
        <Button type="outline" onPress={() => performAuth('google')}>
          <GoogleCircle color="red" height={24} width={24} />
          <View style={{ marginHorizontal: 4 }} />
          <Text>Continue with Google</Text>
        </Button>
        <View style={{ marginVertical: 10 }} />
        <Button type="outline" onPress={() => performAuth('facebook')}>
          <Facebook color="cyan" height={24} width={24} />
          <View style={{ marginHorizontal: 4 }} />
          <Text style={{ textAlign: 'center' }}>Continue with Facebook</Text>
        </Button>
      </LinearGradient>
      {/* <Formik
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
      </Formik> */}
    </>
  );
}