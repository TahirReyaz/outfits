import React from "react";

import { Container } from "../components";
import Footer from "./components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Text } from "react-native";

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const footer = (
    <Footer
      title="Didn't work?"
      action="Try another way"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container footer={footer}>
      <Text>Meh</Text>
    </Container>
  );
};

export default PasswordChanged;
