import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState("");
  const borderColor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const iconColor = theme.colors[borderColor];

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    console.log({ valid });
    setState(valid);
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          backgroundColor={state === Valid ? "primary" : "danger"}
          justifyContent="center"
          alignItems="center"
          margin="m"
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
