import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home, Library, MyProfile } from '../screens';

import {
  Home as HomeIcon,
  Layers as LibraryIcon,
  User as UserIcon
} from 'react-native-feather';
import { theme } from '../theme';
import { AnimatedIcon } from '../components';

const RNBottomTab = createMaterialBottomTabNavigator();

export default () => {
  const iconColor = (focused: boolean) => {
    if (focused) {
      return theme.iconSelectedColor;
    }
    return theme.iconDefaultColor
  }

  return (
    <RNBottomTab.Navigator
      barStyle={{ backgroundColor: 'transparent' }}
      activeColor={theme.iconSelectedColor}
      inactiveColor={theme.iconDefaultColor}
    >
      <RNBottomTab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <AnimatedIcon
                source={require('../assets/icons/home.json')}
              />
            );
          }
          return <HomeIcon color={iconColor(focused)} />;
        },
        tabBarColor: theme.iconSelectedColor,
        // tabBarActiveTintColor: theme.iconSelected,
        // tabBarInactiveTintColor: 'gray',
      }} />
      <RNBottomTab.Screen name="Library" component={Library} options={{
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <AnimatedIcon
                source={require('../assets/icons/home.json')}
              />
            );
          }
          return <LibraryIcon color={iconColor(focused)} />;
        },
      }} />
      <RNBottomTab.Screen name="Account" component={MyProfile} options={{
        tabBarIcon: ({ focused }) => {
          return <UserIcon color={iconColor(focused)} />;
        },
      }} />
    </RNBottomTab.Navigator>
  );
}
