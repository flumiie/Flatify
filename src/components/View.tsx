import React, { PropsWithChildren } from 'react';
import {
  Platform,
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ViewProps extends RNViewProps {
  style?: ViewStyle;
}

export default (props: ViewProps) => {
  const insets = useSafeAreaInsets();
  const useInsets = Platform.OS === 'ios';
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;
  return (
    <RNView
      style={
        useInsets
          ? {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor,
            ...props.style,
          } : {
            backgroundColor,
            ...props.style,
          }
      }>
      {props.children}
    </RNView>
  );
}
