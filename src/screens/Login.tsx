import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Facebook, GoogleCircle, Phone, Spotify } from 'iconoir-react-native';
import { StatusBar, Text, Button } from '../components';
import { performAuth } from '../actions';

export default () => {
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