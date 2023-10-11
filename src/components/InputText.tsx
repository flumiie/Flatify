import React, { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextStyle,
  useColorScheme,
} from 'react-native';
import { theme } from '../theme';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps
} from 'react-native';
import Text from './Text';
import { styles } from '../styles/InputText';

interface TextInputProps extends RNTextInputProps {
  label: string;
  labelSize?: number;
}

export default (props: TextInputProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textInputRef = useRef<RNTextInput>(null);
  const labelTopFromSize = props.labelSize ? props.labelSize + props.labelSize * 0.3 : 30
  const [labelTopPos, setLabelTopPos] = useState(labelTopFromSize);

  return (
    <>
      <Pressable
        style={{
          top: labelTopPos,
          left: !!labelTopPos ? 8 : 0,
          zIndex: 1,
        }}
        onPress={() => {
          setLabelTopPos(0);
          textInputRef.current?.focus();
        }}
      >
        <Text style={{ paddingTop: 8, fontSize: props.labelSize ?? 14 }}>
          {props.label}
        </Text>
      </Pressable>
      <RNTextInput
        {...props}
        ref={textInputRef}
        autoCapitalize={props.autoCapitalize ?? 'none'}
        onFocus={() => setLabelTopPos(0)}
        onEndEditing={(e) => {
          if (!e.nativeEvent.text.length) {
            setLabelTopPos(labelTopFromSize);
          }
        }}
        style={{
          height: 40,
          backgroundColor: isDarkMode ? theme.backgroundColor : theme.backgroundColor,
          ...styles.textInput,
          ...props.style as TextStyle
        }}
      >
        {props.children}
      </RNTextInput>
    </>
  );
}

