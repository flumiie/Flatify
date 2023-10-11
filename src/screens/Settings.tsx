import React, { PropsWithChildren } from 'react';
import { styles } from '../styles/App';
import { View, StatusBar, Text, ScrollView } from '../components';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={{ ...styles.sectionTitle }}>{title}</Text>
      <Text style={{ ...styles.sectionDescription }}>{children}</Text>
    </View>
  );
}

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Settings</Text>
      </ScrollView>
    </View>
  );
}
