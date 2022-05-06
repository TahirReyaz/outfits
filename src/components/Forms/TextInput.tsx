import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React, { forwardRef } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme } from "../Theme";
import RoundedIcon from "../RoundedIcon";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const borderColor = !touched ? "text" : error ? "danger" : "primary";
    const iconColor = theme.colors[borderColor];
    const SIZE = theme.borderRadii.m * 2;

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
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            color="white"
            name={!error ? "check" : "x"}
            backgroundColor={!error ? "primary" : "danger"}
            size={SIZE}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({});
