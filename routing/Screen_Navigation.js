import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screen/auth/Login";
import Sign_up from "../src/screen/auth/Sign_up";
import Splash from "../src/screen/auth/Splash";
import Landing from "../src/screen/auth/Landing";
import Home from "../src/screen/Home/Home";
import Otp from "../src/screen/auth/Otp";
import Register from "../src/screen/auth/Register";
const Screen_Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="Splash" component={Splash} options={false} />
        <Stack.Screen name="Home" component={Home} options={false} />
        <Stack.Screen name="Otp" component={Otp} options={false} />
        <Stack.Screen name="Register" component={Register} options={false} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screen_Navigation;

const styles = StyleSheet.create({});
