import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from "../../screens/Details";

import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);