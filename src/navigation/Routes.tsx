import React, { useState } from 'react';
import AuthStack from './AuthStack';
import RootBottomTab from './RootBottomTab';

export default () => {
  const [isLoggedOut, setLoggedOut] = useState(true);

  if (isLoggedOut) {
    return <AuthStack />;
  }
  return <RootBottomTab />;
}

