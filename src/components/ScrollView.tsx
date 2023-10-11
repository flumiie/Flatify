import React from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { theme } from '../theme';

export default (props: ScrollViewProps) => {
  const translucent = props.translucent ?? true;
  const isDarkMode = useColorScheme() === 'dark';
  const barStyle =
    props.barStyle ?? isDarkMode ? 'light-content' : 'dark-content';
  const backgroundColor =
    props.backgroundColor ?? theme.backgroundColor;
  return (
    <RNScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 16,
        ...props.contentContainerStyle as ViewStyle
      }}
    >
      {props.children}
    </RNScrollView>
  );
}
