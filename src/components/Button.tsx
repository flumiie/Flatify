import React from 'react';
import { Pressable, PressableProps, ViewStyle, useColorScheme } from 'react-native';
import { theme } from '../theme';

interface ButtonProps extends PressableProps {
  type: 'outline' | 'green-fill';
}

export default (props: ButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? theme.backgroundColor : theme.backgroundColor;

  if (props.type === 'green-fill') {
    return (
      <Pressable
        style={{
          backgroundColor: '#1D8954',
          padding: 10,
          marginHorizontal: 'auto',
          width: 300,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          ...props.style as ViewStyle
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
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 'auto',
        width: 300,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...props.style as ViewStyle
      }}
      {...props}
    >
      {props.children}
    </Pressable>
  );
}
