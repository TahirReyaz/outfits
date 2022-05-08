import { Dimensions, Image, StyleSheet, Platform } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { Box } from "./Theme";

export const assets = [
  require("./assets/patterns/1.jpg"),
  require("./assets/patterns/1.jpg"),
  require("./assets/patterns/1.jpg"),
] as const;
const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 500 / 750;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image source={asset} style={{ width, height }} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden" borderBottomLeftRadius="xl">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
            padding="xl"
            justifyContent="center"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
