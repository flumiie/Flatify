import React from 'react';
import axios from 'axios';
import qs from 'qs';
import * as Keychain from 'react-native-keychain';
import {auth_token} from '../vars/env';

const getAuth = async (
  setSession: React.Dispatch<
    React.SetStateAction<Keychain.UserCredentials | null>
  >,
) => {
  try {
    setSession(null);
    await Keychain.resetGenericPassword();

    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({grant_type: 'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (response.data.access_token) {
      // await Keychain.setGenericPassword("token", response.data.access_token);
      await Keychain.setGenericPassword(
        'user_session',
        JSON.stringify(response.data),
      );
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        setSession(credentials);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export {getAuth};
