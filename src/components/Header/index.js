import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Header = ({ pageTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pageTitle}</Text>
    </View>
  );
};

export default Header;
