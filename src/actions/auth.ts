import React from 'react';
import axios from 'axios';
import qs from 'qs';
import EncryptedStorage from 'react-native-encrypted-storage';
import {auth_token, client_id} from '../vars/env';
import {AuthConfiguration, authorize} from 'react-native-app-auth';

const getAuth = async (
  setSession: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  try {
    setSession(null);
    await EncryptedStorage.removeItem('user_session');

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
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify(response.data),
      );
      const es = await EncryptedStorage.getItem('user_session');
      setSession(es);
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const performAuth = async (
  via: 'spotify' | 'phone' | 'google' | 'facebook',
) => {
  const clientId = client_id ?? '';

  const config: AuthConfiguration = {
    issuer: 'https://accounts.spotify.com',
    redirectUrl: 'http://localhost/--/spotify-auth-callback',
    clientId,
    scopes: [
      'user—read-email',
      'user-library-read',
      'user-read-recently-played',
      'user-top—read',
      'playlist-read-private',
      'playlist-read—cottaborative',
      'playlist-modify-public', // or playlist-modify-private,
    ],
  };

  const res = await authorize(config);
  console.warn(res);
};

export {getAuth, performAuth};
