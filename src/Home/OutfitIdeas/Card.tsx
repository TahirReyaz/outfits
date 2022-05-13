import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";
// import Animated, { add, withSpring } from "react-native-reanimated";
// import { mix, mixColor, usePanGestureHandler } from "react-native-redash";

import { Box } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
interface CardProps {
  position: number;
}

const Card = ({ position }: CardProps) => {
  // const { gestureHandler, translation, velocity, state } =
  //   usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateY = mix(position, 0, -50);
  // const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  // const translateX = withSpring({
  //   value: translation.x,
  //   velocity: velocity.x,
  //   state,
  //   snapPoints: [-width, 0, width],
  // });
  // const translateY = add(
  //   translateYOffset,
  //   withSpring({
  //     value: translation.y,
  //     velocity: velocity.y,
  //     state,
  //     snapPoints: [0],
  //   })
  // );

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      {/* <PanGestureHandler {...gestureHandler}> */}
      <Animated.View
        style={{
          backgroundColor,
          width,
          height,
          borderRadius,
          transform: [{ translateY }, { scale }],
        }}
      />
      {/* </PanGestureHandler> */}
    </Box>
  );
};

export default Card;
