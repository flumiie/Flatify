import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './navigation';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://68132b554518b9de5c863afd0f142039@o4506111695585280.ingest.sentry.io/4506111695716352',
});

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
