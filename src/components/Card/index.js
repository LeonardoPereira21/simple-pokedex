import React from "react";
import { View } from "react-native";

import Button from "../Button";
import Text from "../Text";

import styles from "./styles";

const Card = ({ name, onPressButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Button text={"detalhes"} onPress={onPressButton} />
      </View>
    </View>
  );
};

export default Card;
