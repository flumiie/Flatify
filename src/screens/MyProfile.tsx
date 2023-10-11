import React from 'react';
import { View, StatusBar, Text, ScrollView } from '../components';


export default () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>My Profile Info</Text>
      </ScrollView>
    </View>
  );
}