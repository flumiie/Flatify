import React from 'react';
import { View, StatusBar, Text, ScrollView, Button } from '../components';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';


export default () => {
  const navigation = useNavigation();

  const Logout = async () => {
    await EncryptedStorage.removeItem("user_session");
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