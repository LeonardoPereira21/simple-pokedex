import React from "react";
import { View } from "react-native";

import Text from "../Text";

import styles from "./styles";

const Header = ({ pageTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pageTitle}</Text>
    </View>
  );
};

export default Header;
