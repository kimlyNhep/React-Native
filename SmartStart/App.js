import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/HomeScreen";

const navigator = createStackNavigator({
  DrawNav: {
    screen: HomeScreen,
    defaultNavigationOptions: ({ navigation }) => ({
      //Hide the shadow of the header
      headerStyle: {
        elevation: 0,
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffsest: {
          height: 0
        }
      },
      headerLeft: (
        <View>
          <Button
            onPress={() => {
              navigation.toggleDrawer();
            }}
            title="Info"
            color="#2220"
          />
        </View>
      )
    })
  }
});

const navigationOptionsHeader = ({ navigation }) => {
  return {
    headerRight: (
      <Button
        onPress={() => {
          navigation.toggleDrawer();
        }}
        title="Info"
        color="#2220"
      />
    )
  };
};

export default createAppContainer(navigator);
