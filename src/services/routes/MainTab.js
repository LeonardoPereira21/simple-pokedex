import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import iconHome from "../../assets/png/icon-home.png";
import iconPokedex from "../../assets/png/icon-pokedex.png";

import Home from "../../screens/Home";
import Captured from "../../screens/Captured";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: "#ccc",
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => (
          <Image style={{ width: 25, height: 25 }} source={iconHome} />
        ),
      }}
    />

    <Tab.Screen
      name="Captured"
      component={Captured}
      options={{
        tabBarIcon: () => (
          <Image style={{ width: 25, height: 25 }} source={iconPokedex} />
        ),
      }}
    />
  </Tab.Navigator>
);
