import React, { useState, useEffect, useCallback } from "react";
import { TouchableOpacity, View, Image } from "react-native";

import iconCheck from "../../assets/png/icon-check.png";

import Text from "../Text";

import styles from "./styles";

const Checkbox = ({ text, onToggle, defaultChecked }) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  const toggleChecked = useCallback(() => {
    setChecked(!isChecked);
    onToggle(!isChecked);
  }, [isChecked, onToggle]);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="checkbox"
        style={[styles.button, isChecked ? styles.checked : {}]}
        onPress={toggleChecked}
      >
        <Image style={styles.icon} source={iconCheck} />
      </TouchableOpacity>

      {text ? <Text>{text}</Text> : null}
    </View>
  );
};

export default Checkbox;
