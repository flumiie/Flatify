import React, { PropsWithChildren, useEffect, useState } from 'react';
import { styles } from '../styles/App';
import { View, StatusBar, Text, ScrollView, Button } from '../components';
import axios from 'axios';
import qs from 'qs';
import { auth_token } from '../vars/env';
import EncryptedStorage from 'react-native-encrypted-storage';

type MyPlaylistsProps = PropsWithChildren<{
  title: string;
}>;

function MyPlaylists({ children, title }: MyPlaylistsProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={{ ...styles.sectionTitle }}>{title}</Text>
      <Text style={{ ...styles.sectionDescription }}>{children}</Text>
    </View>
  );
}

export default () => {
  const [playlists, setPlaylists] = useState<string | null>(null)

  const getPlaylists = async () => {
    try {
      const uri = 'https://api.spotify.com/v1/playlists/7LWmnjYwvb0JH6g1X4TgPE';
      const data = qs.stringify({ 'grant_type': 'client_credentials' });

      const response = await axios.post(uri, data, {
        headers: {
          'Authorization': `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      if (response.data.access_token) {
        await EncryptedStorage.setItem(
          "user_playlists",
          JSON.stringify(response.data)
        );
        console.log(response.data)
        const es = await EncryptedStorage.getItem('user_playlists');
        setPlaylists(es);
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Playlists</Text>
        <Button onPress={() => { }} title="Play" />
      </ScrollView>
    </View>
  );
}
