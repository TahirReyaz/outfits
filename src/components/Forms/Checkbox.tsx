import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../Theme";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{ justifyContent: "center" }}
      rippleColor="transparent"
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
    </BorderlessButton>
  );
};

export default Checkbox;
