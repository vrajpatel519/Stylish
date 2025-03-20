import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import LoginPage from "../screens/LoginScreen/LoginScreen";
import Walkthrough from "../screens/OnBoardingScreen/WalkthroughScreen";
import SignupPage from "../screens/SignupScreen/SignUpScreen";
import ForgotPasswordPage from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import GetStartPage from "../screens/GetStartScreen/GetStartScreen";
import Dashboard from "../screens/Dashboard/Dashboard";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetailScreen";
import WishlistScreen from "../screens/Wishlist/WishlistScreen";
import HomePage from "../screens/HomePage/HomePage";
import CheckoutDetailScreen from "../screens/CheckoutDetailScreen/CheckoutDetailScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import ShopBagScreen from "../screens/ShopBagScreen/ShopBagScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginPage: undefined;
  Walkthrough: undefined;
  SignUpPage: undefined;
  ForgotPasswordPage: undefined;
  GetStartPage:undefined;
  Dashboard:undefined;
  ProductDetailScreen:undefined;
  WishlistScreen:undefined;
  HomePage:undefined;
  CheckoutDetailScreen:undefined;
  CartScreen:undefined;
  ShopBagScreen:undefined;
  PaymentScreen:undefined;
  
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} options={{ headerShown: false }} />
        <Stack.Screen name="GetStartPage" component={GetStartPage} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="CheckoutDetailScreen" component={CheckoutDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ShopBagScreen" component={ShopBagScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
