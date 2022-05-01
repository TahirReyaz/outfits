import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Text, Container, Box } from "../components";
import TextInput from "../components/Forms/TextInput";
import Footer from "./components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => console.log(values),
    }
  );
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);

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
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              secureTextEntry
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
        </Box>
        <TextInput
          ref={passwordConfirmation}
          icon="lock"
          placeholder="Confirm Password"
          onChangeText={handleChange("passwordConfirmation")}
          onBlur={handleBlur("passwordConfirmation")}
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          onSubmitEditing={() => handleSubmit()}
        />
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Create your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
