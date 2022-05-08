import React from "react";

import {
  Container,
  Text,
  Box,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from "../components";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../components/Navigation";

const SIZE: number = 60;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            size={60}
            color="secondary"
            backgroundColor="white"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcon
          size={SIZE}
          name="check"
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Your Password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Close this window and login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Login again"
          onPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
