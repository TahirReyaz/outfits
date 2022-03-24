import { StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

import theme, { Box, Text } from "../../components/theme";
import { Button } from "../../components";

const { width } = Dimensions.get("window");
const img = {
  src: require("../assets/4.png"),
  width: 448,
  height: 656,
};
export const assets = [img.src];

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={img.src}
          style={{
            width: width - theme.borderRadii.xl,
            height: ((width - theme.borderRadii.xl) * img.height) / img.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          flex={1}
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's Get Started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or Signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {}}
          />
          <Button label="Join us, it's Free" onPress={() => {}} />
          <Button
            variant="transparent"
            label="Forgot Password?"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
