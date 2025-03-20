import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons } from "../constants/images";
import LoginPage from "../screens/LoginScreen/LoginScreen";
// import SignupPage from "../screens/SignupScreen/SignUpScreen";
import ForgotPasswordPage from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import GetStartPage from "../screens/GetStartScreen/GetStartScreen";
import HomePage from "../screens/HomePage/HomePage";
import SignupPage from "../screens/SignupScreen/SignUpScreen";
import WishlistScreen from "../screens/Wishlist/WishlistScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetailScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const FloatingShopButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.fab}
     
      activeOpacity={0.7}
      onPress={()=>navigation.navigate("CheckoutDetailScreen")}
    >
      <View style={styles.fabInner}>
        <Image source={icons.IC_BOTTOMMENU_CARTUNSELECT} style={styles.fabIcon} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
      initialRouteName="HomePage"
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          headerShown: false,
         
        }}
      >
        <Tab.Screen
          name="HomePage"
        
          component={HomeStack}
          options={{
          
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>
                Home
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.IC_BOTTOMMENU_HOMEUNSELECT}
                style={[styles.icon, focused && styles.iconFocused]}
                resizeMode="contain"
              />
            ),
        
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={ProductStack}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>
               Wishlist
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.IC_BOTTOMMENU_WISHLISTUNSELECT}
                style={[styles.icon, focused && styles.iconFocused]}
                resizeMode="contain"
              />
            ),
          }}
        />
         <Tab.Screen
    name="FloatingButton"
    component={SignupPage}
    options={{
     
      tabBarButton: () => <FloatingShopButton />,
    }}
  />
        <Tab.Screen
          name="Search"
          
          component={ForgotPasswordPage}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>
                Search
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.IC_BOTTOMMENU_SEARCHUNSELECT}
                style={[styles.icon, focused && styles.iconFocused]}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={GetStartPage}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>
                Setting
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.IC_BOTTOMMENU_SETTINGUNSELECT}
                style={[styles.icon, focused && styles.iconFocused]}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>

   
     
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 70,

    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#000000",
  },
  iconFocused: {
    tintColor: "#EB3030",
  },
  fab: {
    width: 54,
    height: 56,
    borderRadius: 50,
    backgroundColor: "#EB3030",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    elevation: 6,
    shadowColor: "#EB3030",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  fabInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EB3030",
    justifyContent: "center",
    alignItems: "center",
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
  },
  tabBarLabelFocused: {
    color: "#EB3030",
    fontWeight: "bold",
  },
});


export default BottomNavigation;
