import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Linking } from "react-native";

import { Button, Text, Container, Box } from "../components";
import TextInput from "../components/Forms/TextInput";
import Footer from "./components/Footer";
import { AuthNavigationProps } from "../components/Navigation";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: (values) => {
        console.log(values);
        navigation.navigate("PasswordChanged");
      },
    }
  );

  const footer = (
    <Footer
      title="Didn't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  return (
    <Container pattern={2} footer={footer}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot Password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
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
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset Password"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
