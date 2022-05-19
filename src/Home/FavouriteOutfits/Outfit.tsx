import { Dimensions } from "react-native";
import React, { useState } from "react";
import { BorderlessTap, Box, RoundedIcon } from "../../components";

interface OutfitProps {
  outfit: {
    id: number;
    color: string;
    aspectRatio: number;
    selected: boolean;
  };
  width: number;
}

const { width: wWidth } = Dimensions.get("window");

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
        alignItems="flex-end"
        padding="m"
      >
        {selected && (
          <RoundedIcon
            name="check"
            size={24}
            backgroundColor="primary"
            color="white"
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
