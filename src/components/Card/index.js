import React from "react";
import { View, Text } from "react-native";

import Button from "../Button";

import styles from "./styles";

const Card = ({ name, onPressButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Button text={"Detalhes"} onPress={onPressButton} />
      </View>
    </View>
  );
};

export default Card;
