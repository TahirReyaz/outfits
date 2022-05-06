import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Container, Text, Box, Button, CloseButton } from "../components";
import Footer from "./components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SIZE: number = 60;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center" paddingBottom="m">
          <CloseButton onPress={() => navigation.navigate("Login")} />
        </Box>
      }
    >
      <Box padding="xl" flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2 }}
          marginBottom="m"
        >
          <Text color="primary" textAlign="center">
            <Icon size={32} name="check" style={{ textAlign: "center" }} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your Password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close the window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
