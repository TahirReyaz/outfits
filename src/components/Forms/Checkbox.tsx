import { Feather as Icon } from "@expo/vector-icons";
import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../theme";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton
      onPress={() => setChecked((prevState) => !prevState)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          backgroundColor={checked ? "primary" : "white"}
          borderRadius="s"
          marginRight="s"
          height={20}
          width={20}
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
