import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Box, useTheme } from "../../components/Theme";

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box
      marginHorizontal="m"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Image source={require("../assets/icons/google.png")} />
      </SocialIcon>
      <SocialIcon>
        <Image source={require("../assets/icons/facebook.png")} />
      </SocialIcon>
      <SocialIcon>
        <Image source={require("../assets/icons/apple.png")} />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
