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
          {abilities && abilities.map((item) => item.ability.name).join(", ")}
        </Text>
        <Text>
          Tipos: {types && types.map((item) => item.type.name).join(", ")}
        </Text>
        <Text>
          Espécies: {eggGroups && eggGroups.map((item) => item.name).join(", ")}
        </Text>
      </View>
    </Container>
  );
};

export default Details;
