import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.8;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      margin="m"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon {...{ name }} size={iconSize} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
