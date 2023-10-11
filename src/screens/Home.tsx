import React from 'react';
import { RefreshControl } from 'react-native';
import { View, StatusBar, Text, ScrollView } from '../components';

const isRefreshing = false;
const onRefresh = () => null

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text>Home</Text>
      </ScrollView>
    </View>
  );
}