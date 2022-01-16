import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import pokeApi from "../../services/network/pokeApi";
import { addCaptured, removeCaptured } from "../../services/actions";

import Container from "../../components/Container";
import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import Text from "../../components/Text";

import styles from "./styles";

const Details = ({
  navigation,
  route,
  captured,
  addCaptured,
  removeCaptured,
}) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [order, setOrder] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [species, setSpecies] = useState(null);
  const [eggGroups, setEggGroups] = useState(null);
  const [types, setTypes] = useState(null);
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const detailsUrl = route.params.url;

    setIsLoading(true);
    pokeApi.get(detailsUrl, (data) => {
      setName(data.name);
      setOrder(data.order);
      setImage(data.sprites.other["official-artwork"]["front_default"]);
      setAbilities(data.abilities);
      setTypes(data.types);
      setSpecies(data.species.url);

      const isCaptured = captured.list.filter(
        (item) => item.order === data.order
      );

      setIsDefaultChecked(Boolean(isCaptured.length));
    });
  }, []);

  useEffect(() => {
    if (species) {
      pokeApi.get(species, (data) => {
        setEggGroups(data.egg_groups);
        setIsLoading(false);
      });
    }
  }, [species]);

  return (
    <Container pageTitle={"detalhes"} goBack={navigation.goBack}>
      {!isLoading ? (
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
          <View style={styles.bottom}>
            <Checkbox
              text={"capturado?"}
              defaultChecked={isDefaultChecked}
              onToggle={(isCheked) => {
                if (isCheked) {
                  addCaptured({
                    order,
                    image,
                    name,
                    url: route.params.url,
                  });
                } else {
                  removeCaptured(order);
                }
              }}
            />
          </View>
        </View>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { captured } = state;
  return { captured };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addCaptured,
      removeCaptured,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Details);
