import { StyleSheet } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Text, Container, Box } from "../components";
import TextInput from "../components/Forms/TextInput";
import Checkbox from "../components/Forms/Checkbox";
import Footer from "./components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: { email: "", password: "", passwordConfirmation: "" },
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container footer={footer}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know what's your name, email and password
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />
          </Box>
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
          />
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
