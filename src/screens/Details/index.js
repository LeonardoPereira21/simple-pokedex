import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";

import Container from "../../components/Container";

import pokemonService from "../../services/network/pokemonService";

const Details = ({ route }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [order, setOrder] = useState(null);

  const [abilities, setAbilities] = useState(null);
  const [species, setSpecies] = useState(null);
  const [types, setTypes] = useState(null);

  useEffect(() => {
    const params = route.params.url;

    pokemonService.getDetails(params, (data) => {
      setName(data.name);
      setOrder(data.order);
      setImage(data.sprites.other["official-artwork"]["front_default"]);
      setAbilities(data.abilities);
      setTypes(data.types);
      const species = data.species.url;

      pokemonService.getSpecies(species, (data) => {
        setSpecies(data.egg_groups);
      });
    });
  }, []);

  return (
    <Container pageTitle={"Details"}>
      <View>
        {image ? (
          <Image
            style={{ width: 300, height: 300 }}
            source={{
              uri: image,
            }}
          />
        ) : null}
        <Text>#{order}</Text>
        <Text>Name: {name}</Text>
        <Text>
          Habilidades:{" "}
          {abilities &&
            abilities.map((item, index) => item.ability.name + ", ")}
        </Text>
        <Text>
          Tipos: {types && types.map((item, index) => item.type.name + ", ")}
        </Text>
        <Text>
          Espécies: {species && species.map((item) => item.name + ", ")}
        </Text>
      </View>
    </Container>
  );
};

export default Details;
