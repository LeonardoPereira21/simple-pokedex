import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import pokeApi from "../../services/network/pokeApi";

import Button from "../Button";
import Text from "../Text";


import styles from "./styles";

const Card = ({ image, name, onPressButton, url }) => {
  const [uri, setUri] = useState()

  useEffect(() => {
    handleImage()
  }, [url])
  const handleImage = () => {
    if (!image && url) {
      pokeApi.get(url, (data) => {
        setUri(data.sprites.other["official-artwork"]["front_default"]);
      });
    }
  }
  
  return (
    <View testID="card" style={styles.container}>
      <View style={styles.content}>
        {image || uri ? (
          <Image
            style={styles.image}
            source={{
              uri: image || uri,
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
