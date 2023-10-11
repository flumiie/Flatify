import React from 'react';
import {
  TextStyle,
  useColorScheme,
} from 'react-native';
import { theme } from '../theme';
import { Button as RNButton, ButtonProps } from 'react-native';

export default (props: ButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? theme.backgroundColor : theme.backgroundColor;
  return (
    <RNButton
      {...props}
    // style={{
    //   backgroundColor,
    //   ...props.style as TextStyle
    // }}
    >
    </RNButton>
  );
}
