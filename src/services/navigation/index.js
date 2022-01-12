import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from "../../screens/Details";

import TabNavigator from "./tabs";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="TabNavigator"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);
