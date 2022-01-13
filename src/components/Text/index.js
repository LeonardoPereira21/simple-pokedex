import React from "react";
import { Text as NativeText } from "react-native";
import styles from "./styles";

const Text = ({ children, style }) => {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
};

export default Text;
