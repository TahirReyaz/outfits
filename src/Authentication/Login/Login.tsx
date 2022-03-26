import { StyleSheet } from "react-native";
import React from "react";

import Container from "../../components/Container";
import SocialLogin from "../components/SocialLogin";
import { Button, Text } from "../../components";
import TextInput from "../../components/Forms/TextInput";
import Checkbox from "../../components/Forms/Checkbox";
import { Box } from "../../components/theme";

const emailValidator = (email: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remeber me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot Password?</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
