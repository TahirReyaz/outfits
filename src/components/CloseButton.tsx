import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "./Theme";
import { RectButton } from "react-native-gesture-handler";

interface CloseButtonProps {
  onPress: () => void;
}
const SIZE: number = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary" textAlign="center">
          <Icon size={45} name="x" style={{ textAlign: "center" }} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
