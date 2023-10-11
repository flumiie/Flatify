import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  useColorScheme,
} from 'react-native';
import { theme } from '../theme';

export default (props: RNStatusBarProps) => {
  const translucent = props.translucent ?? true;
  const isDarkMode = useColorScheme() === 'dark';
  const barStyle =
    props.barStyle ?? isDarkMode ? 'light-content' : 'dark-content';
  const backgroundColor =
    props.backgroundColor ?? theme.backgroundColor;
  return (
    <RNStatusBar
      {...props}
      translucent={translucent}
      barStyle={barStyle}
      backgroundColor={backgroundColor}
    />
  );
}
