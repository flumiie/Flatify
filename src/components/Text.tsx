import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface TextProps extends RNTextProps {
  style?: TextStyle;
}

export default (props: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? Colors.white : Colors.black;
  return (
    <RNText
      {...props}
      style={{
        color: color,
        ...props.style,
      }}>
      {props.children}
    </RNText>
  );
}
