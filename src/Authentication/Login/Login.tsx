import { StyleSheet } from "react-native";
import React from "react";

import Container from "../../components/Container";
import SocialLogin from "../components/SocialLogin";
import { Button, Text } from "../../components";
import { Box } from "../../components/theme";

const Login = () => {
  const Footer = () => (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SignUp!")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container footer={<Footer />}>
      <Text>Login</Text>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
