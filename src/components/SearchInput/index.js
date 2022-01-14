import React, { useState, useCallback, useEffect } from "react";
import { View, TextInput, Image } from "react-native";

import iconSeach from "../../assets/png/icon-search.png";

import styles from "./styles";

const SearchInput = ({ onChangeText, value }) => {
  const [text, setText] = useState(value);

  const changeText = useCallback(
    (newText) => {
      setText(newText);
      onChangeText(newText);
    },
    [text, onChangeText]
  );

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput
        testID={"seach-input"}
        style={styles.input}
        placeholder="Buscar"
        onChangeText={(value) => changeText(value)}
        value={text}
      />

      <Image style={styles.icon} source={iconSeach} />
    </View>
  );
};

export default SearchInput;
