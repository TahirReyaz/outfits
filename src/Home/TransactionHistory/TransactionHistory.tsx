import React from "react";

import { Box, Button, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Graph from "./Graph";

const data = [
  { date: new Date("2021-09-01").getTime(), value: 0 },
  { date: new Date("2021-10-01").getTime(), value: 0 },
  { date: new Date("2021-11-01").getTime(), value: 139.42 },
  { date: new Date("2021-12-01").getTime(), value: 281.23 },
  { date: new Date("2022-01-01").getTime(), value: 0 },
  { date: new Date("2022-02-01").getTime(), value: 198.54 },
  { date: new Date("2022-03-01").getTime(), value: 0 },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"FavouriteOutfits">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => {} }}
      />
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box>
            <Button label="All Time" onPress={() => true} variant="primary" />
          </Box>
        </Box>
        <Graph {...{ data }} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
