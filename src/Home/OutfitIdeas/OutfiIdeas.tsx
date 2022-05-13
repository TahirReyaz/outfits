import React from "react";
import { Box, Header } from "../../components";

const OutfiIdeas = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => {} }}
        right={{ icon: "shopping-bag", onPress: () => {} }}
      />
    </Box>
  );
};

export default OutfiIdeas;
