import { Image, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import theme, { Box } from "../../components/theme";

const SIZE = theme.borderRadii.l * 2;

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
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
