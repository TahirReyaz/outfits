import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: { icon: keyof typeof Icon.glyphMap; onPress: () => void };
  title: string;
  right: { icon: keyof typeof Icon.glyphMap; onPress: () => void };
}

const Header = ({ left, title, right }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
        size={24}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
        size={24}
      />
    </Box>
  );
};

export default Header;
