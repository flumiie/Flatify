import React from 'react';
import AnimatedLottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

export default (props: AnimatedLottieViewProps) => {
  return (
    <AnimatedLottieView
      {...props}
      autoPlay={props.autoPlay ?? true}
      loop={props.loop ?? false}
      source={props.source}
    />
  );
}
