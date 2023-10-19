import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Library, Profile } from '../screens';
import { theme } from '../theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Iconoir } from 'iconoir-react-native';

const BottomTab = createBottomTabNavigator();

export default () => {
  const iconColor = (focused: boolean) => {
    if (focused) {
      return theme.iconSelectedColor;
    }
    return theme.iconDefaultColor
  }

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4
          },
          borderTopWidth: 0
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: Colors.white },
          tabBarIcon: ({ focused }) => {
            return <Iconoir color="red" height={36} width={36} />
          },
          tabBarActiveTintColor: theme.iconSelectedColor,
          tabBarInactiveTintColor: theme.iconDefaultColor
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: Colors.white },
          tabBarIcon: ({ focused }) => {
            return <Iconoir color="red" height={36} width={36} />
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: Colors.white },
          tabBarIcon: ({ focused }) => {
            return <Iconoir color="red" height={36} width={36} />
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
