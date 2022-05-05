import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../components/Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";
import Onboarding, { assets as onboardingAssests } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";

export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
export const assets = [...onboardingAssests, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
