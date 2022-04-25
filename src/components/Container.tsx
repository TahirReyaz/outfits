import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React, { ReactNode } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Box, useTheme } from "./Theme";

export const assets = [require("./assets/patterns/1.jpg")];
const { width } = Dimensions.get("window");
const aspectRatio = 500 / 750;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <KeyboardAvoidingView style={{ height: Dimensions.get("screen").height }}>
      <Box flex={1} backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image source={assets[0]} style={{ width, height }} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden" borderBottomLeftRadius="xl">
          <Image
            source={assets[0]}
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
          >
            {children}
          </Box>
        </Box>
        <Box paddingVertical="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({});
