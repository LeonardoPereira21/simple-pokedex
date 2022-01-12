import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ text, disabled, loading, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.default, disabled || loading ? styles.disabled : {}]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
