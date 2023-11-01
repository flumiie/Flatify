import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import { View, StatusBar, Text, ScrollView, Button } from '../components';


export default () => {
  const navigation = useNavigation();

  const Logout = async () => {
    await Keychain.resetGenericPassword();
    navigation.navigate('Login')
    return null
  }

  return (
    <>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{
          flex: 1,
          backgroundColor: 'white',
        }}>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Text style={{ color: '#000' }}>My Profile Info</Text>
          <Button onPress={Logout} title='Logout' />
        </ScrollView>
      </View>
    </>
  );
}