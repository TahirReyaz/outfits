import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { Box, Text, BorderlessTap } from "../../components";

const INNER_RADIUS: number = 30;
const OUTER_RADIUS: number = 34;

interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
  };
}

const Category = ({
  category: { color: backgroundColor, title },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
