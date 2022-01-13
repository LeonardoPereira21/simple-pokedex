import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/services/navigation";
import reducers from "./src/services/reducers";

const store = createStore(reducers);

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};
