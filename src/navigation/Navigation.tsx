import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Wallpaper from "../screens/wallpaper/Wallpaper";
import Home from "../screens/home/Home";

export type RootParams = {
  Wallpaper: undefined;
  Home: undefined;
  RootTab: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();
const Tab = createBottomTabNavigator<RootParams>();

const RootTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Wallpaper'>
        <Stack.Screen name="RootTab" component={RootTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Wallpaper" component={Wallpaper} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
