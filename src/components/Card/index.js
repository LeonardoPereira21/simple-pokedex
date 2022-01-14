import React from "react";
import { View, Image } from "react-native";

import Button from "../Button";
import Text from "../Text";

import styles from "./styles";

const Card = ({ image, name, onPressButton }) => {
  return (
    <View testID="card" style={styles.container}>
      <View style={styles.content}>
        {image ? (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        ) : null}

        <Text style={styles.name}>{name}</Text>
        <Button text={"detalhes"} onPress={onPressButton} />
      </View>
    </View>
  );
};

export default Card;
