import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Facebook, GoogleCircle, Phone, Spotify } from 'iconoir-react-native';
import { View, StatusBar, Text, Button } from '../components';
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
        <View style={{ paddingTop: 80 }} />
        <Spotify color="white" height={80} width={80} />
        <View style={{ marginVertical: 20 }} />
        <Text style={{
          color: 'white',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          {`Millions of Songs ready for you\non Spotify`}
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
    </>
  );
}