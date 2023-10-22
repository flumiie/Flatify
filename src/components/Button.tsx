import React from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle, useColorScheme } from 'react-native';
import { theme } from '../theme';

interface ButtonProps extends PressableProps {
  type: 'outline' | 'green-fill';
  buttonStyle?: ViewStyle;
}

export default (props: ButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? theme.backgroundColor : theme.backgroundColor;

  if (props.type === 'green-fill') {
    return (
      <Pressable
        style={{
          backgroundColor: '#1D8954',
          ...styles.button,
          ...props.buttonStyle,
        }}
        {...props}
      >
        {props.children}
      </Pressable>
    );
  }

  return (
    <Pressable
      style={{
        backgroundColor: '#131624',
        borderColor: '#c0c0c0',
        ...styles.button,
        ...props.buttonStyle,
      }}
      {...props}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 'auto',
    padding: 10,
    width: 300,
    borderRadius: 30,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})