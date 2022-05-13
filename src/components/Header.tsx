import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: { icon: keyof typeof Icon.glyphMap; onPress: () => void };
  title: string;
  right: { icon: keyof typeof Icon.glyphMap; onPress: () => void };
  dark: boolean;
}

const Header = ({ left, title, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";

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
        onPress={left.onPress}
        size={44}
        iconRatio={0.5}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" color={color}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        onPress={right.onPress}
        size={44}
        iconRatio={0.5}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
