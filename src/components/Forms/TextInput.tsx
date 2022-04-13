import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const borderColor = !touched ? "text" : error ? "danger" : "primary";
  const iconColor = theme.colors[borderColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      borderRadius="s"
      alignItems="center"
      borderWidth={StyleSheet.hairlineWidth}
      {...{ borderColor }}
    >
      <Box padding="s">
        <Icon name={icon} size={16} color={iconColor} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={iconColor}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          backgroundColor={!error ? "primary" : "danger"}
          justifyContent="center"
          alignItems="center"
          margin="m"
        >
          <Icon name={!error ? "check" : "x"} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
