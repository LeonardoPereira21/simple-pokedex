import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

import pokemonService from "../../services/network/pokemonService";

import Container from "../../components/Container";
import Text from "../../components/Text";

import styles from "./styles";

const Details = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [order, setOrder] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [species, setSpecies] = useState(null);
  const [eggGroups, setEggGroups] = useState(null);
  const [types, setTypes] = useState(null);

  useEffect(() => {
    const detailsUrl = route.params.url;

    pokemonService.getDetails(detailsUrl, (data) => {
      setName(data.name);
      setOrder(data.order);
      setImage(data.sprites.other["official-artwork"]["front_default"]);
      setAbilities(data.abilities);
      setTypes(data.types);
      setSpecies(data.species.url);
    });
  }, []);

  useEffect(() => {
    if (species) {
      pokemonService.getSpecies(species, (data) => {
        setEggGroups(data.egg_groups);
      });
    }
  }, [species]);

  return (
    <Container pageTitle={"detalhes"} goBack={navigation.goBack}>
      <View style={styles.details}>
        <View style={styles.head}>
          <Text style={styles.order}># {order} - </Text>
          <Text style={styles.name}>{name}</Text>
        </View>

        {image ? (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </View>
        ) : null}

        <View style={styles.table}>
          <View style={styles.line}>
            <Text>habilidades: </Text>
            <Text>
              {abilities &&
                abilities.map((item) => item.ability.name).join(", ")}
            </Text>
          </View>
          <View style={styles.line}>
            <Text>tipos: </Text>
            <Text>
              {types && types.map((item) => item.type.name).join(", ")}
            </Text>
          </View>
          <View style={styles.line}>
            <Text>espécies: </Text>
            <Text>
              {eggGroups && eggGroups.map((item) => item.name).join(", ")}
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Details;
