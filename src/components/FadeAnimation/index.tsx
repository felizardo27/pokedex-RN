import React, { useEffect } from "react";
import { ViewProps, useWindowDimensions } from "react-native";
import * as S from "./styles";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
} & ViewProps;

export function FadeAnimation({ children, ...rest }: Props) {
  const { width: displayWidth } = useWindowDimensions();

  const cardOpacity = useSharedValue(0);
  const cardOffSet  = useSharedValue(0.25 * displayWidth);
  
  const animatedStyle = useAnimatedStyle(() => {
    'worklet'
    return {
      opacity: cardOpacity.value,
      transform: [
        {
          translateX: cardOffSet.value,
        }
      ]
    }
  });

  useEffect(() => {
    cardOpacity.value = withTiming(1, {duration: 1000});
    cardOffSet.value  = withTiming(0, {duration: 1000}); 
  },[]);

  return (
    <S.AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </S.AnimationContainer>
  );
}
