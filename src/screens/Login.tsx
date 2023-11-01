import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Facebook, GoogleCircle, Phone, Spotify } from 'iconoir-react-native';
import { StatusBar, Text, Button } from '../components';
import { useNavigation } from '@react-navigation/native';
import { AuthConfiguration, authorize } from 'react-native-app-auth';
import { client_id } from '../vars/env';

export default () => {
  const navigation = useNavigation();

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
        <Spotify
          color="white"
          width={80}
          height={80}
          style={{
            marginTop: 80,
            marginBottom: 40
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 36,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 80
          }}
        >
          {`Millions of Songs ready for you\non Spotify`}
        </Text>
        <Button
          type='green-fill'
          buttonStyle={{ marginBottom: 20 }}
          onPress={() => performAuth('spotify')}
        >
          <Text
            style={{
              paddingVertical: 4,
              color: 'white'
            }}
          >
            Continue with Spotify
          </Text>
        </Button>
        <Button
          type="outline"
          buttonStyle={{ marginBottom: 20 }}
          onPress={() => performAuth('phone')}
        >
          <Phone color="white"
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
          <Text style={{
            color: 'white',
            textAlign: 'center',
          }}>
            Continue with Phone Number
          </Text>
        </Button>
        <Button
          type="outline"
          buttonStyle={{ marginBottom: 20 }}
          onPress={() => performAuth('google')}
        >
          <GoogleCircle color="red"
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
          <Text style={{
            color: 'white',
            textAlign: 'center',
          }}>
            Continue with Google
          </Text>
        </Button>
        <Button
          type="outline"
          buttonStyle={{ marginBottom: 20 }}
          onPress={() => performAuth('facebook')}
        >
          <Facebook color="cyan"
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
          <Text style={{
            color: 'white',
            textAlign: 'center',
          }}>
            Continue with Facebook
          </Text>
        </Button>
      </LinearGradient>
    </>
  );
}