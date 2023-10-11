import React from 'react';
import { View, StatusBar, Text, ScrollView, InputText, Button } from '../components';

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Login to access all of your Spotify contents.</Text>
        <InputText label='Email or Username' />
        <InputText label='Password' secureTextEntry />
      </ScrollView>
      <Button title="Login" />
    </View>
  );
}