import React, { useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

export default () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    async () => {
      const session = await EncryptedStorage.getItem("user_session");
      setLoggedIn(!!session)
    }
  })

  useEffect(() => {
    console.log(loggedIn)
  }, [loggedIn])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

