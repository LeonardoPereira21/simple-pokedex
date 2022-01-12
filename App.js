import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/services/navigation";

export default () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
