import React from 'react';
import AnimatedLottieView, { LottieViewProps } from 'lottie-react-native';

export default (props: LottieViewProps) => {
  return (
    <AnimatedLottieView
      {...props}
      autoPlay={props.autoPlay ?? true}
      loop={props.loop ?? false}
      source={props.source}
    />
  );
}
