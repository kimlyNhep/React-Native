import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/HomeScreen";

const navigator = createStackNavigator({
  {
    Home: HomeScreen
  },
  {
    : HomeScreen,
    defaultNavigationOptions: {
      title: "Exchange"
    }
  }
});

export default createAppContainer(navigator);
