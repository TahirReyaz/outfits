import React from "react";
import { Theme, useTheme } from "../../components/Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { Box, RoundedIcon, Text } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { useNavigation } from "@react-navigation/native";

export interface DrawerItemProps {
  icon: keyof typeof Icon.glyphMap;
  color: keyof Theme["colors"];
  screen: keyof HomeRoutes;
  label: string;
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
  const theme = useTheme();
  const { navigate } =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.s }}
      onPress={() => navigate(screen)}
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          backgroundColor={color}
          color="white"
          size={36}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
