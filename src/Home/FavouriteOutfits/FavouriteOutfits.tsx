import React from "react";

import { Box, Header, useTheme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Footer from "./Footer";
import { ScrollView } from "react-native-gesture-handler";
import Outfit from "./Outfit";
import { Dimensions } from "react-native";

const { width: wWidth } = Dimensions.get("window");

const outfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 210 / 145,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
  },
  {
    id: 8,
    color: "#DEEFC4",
    aspectRatio: 160 / 145,
  },
];

const FavouriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavouriteOutfits">) => {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Favourite Outfits"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => {} }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              {outfits
                .filter((_, i) => i % 2 !== 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} {...{ outfit, width }} />
                ))}
            </Box>
            <Box>
              {outfits
                .filter((_, i) => i % 2 === 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} {...{ outfit, width }} />
                ))}
            </Box>
          </Box>
        </ScrollView>
        <Box position="absolute" bottom={0} left={0} right={0}>
          <Footer label="Add to Favourites" onPress={() => true} />
        </Box>
      </Box>
    </Box>
  );
};

export default FavouriteOutfits;
