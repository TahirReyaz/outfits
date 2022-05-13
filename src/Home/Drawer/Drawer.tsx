import React from "react";
import { Dimensions, Image } from "react-native";

import { Box, useTheme, Text, Header } from "../../components";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const assets = [require("./assets/drawer.png")];
const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 500 / 750;
const height = DRAWER_WIDTH * aspectRatio;
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favourites Outfits",
    screen: "FavouritesOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
  const theme = useTheme();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="menu"
            left={{ icon: "x", onPress: () => {} }}
            right={{ icon: "shopping-bag", onPress: () => {} }}
            dark={true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="white"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
            backgroundColor="primary"
          />
          <Box marginVertical="xl">
            <Text variant="title1" textAlign="center">
              Tahir Reyaz
            </Text>
            <Text variant="body" textAlign="center">
              tahirreyaz5@gmail.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            height,
            width: DRAWER_WIDTH,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
