import React from "react";
import { TouchableOpacity } from "react-native";

import Text from "../Text";

import styles from "./styles";

const Button = ({ text, disabled, loading, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.default, disabled || loading ? styles.disabled : {}]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {text ? <Text>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default Button;
