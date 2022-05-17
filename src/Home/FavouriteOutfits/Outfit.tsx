import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme } from "../../components";

interface OutfitProps {
  outfit: {
    id: number;
    color: string;
    aspectRatio: number;
  };
  width: number;
}

const { width: wWidth } = Dimensions.get("window");

const Outfit = ({
  outfit: { color: backgroundColor, aspectRatio },
  width,
}: OutfitProps) => {
  const theme = useTheme();
  return (
    <Box
      borderRadius="m"
      marginBottom="m"
      style={{ backgroundColor, width, height: width * aspectRatio }}
    >
      <Text>Outfit</Text>
    </Box>
  );
};

export default Outfit;
