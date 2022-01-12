import React, { useState, useEffect } from "react";
import { View } from "react-native";

import pokemonService from "../../services/network/pokemonService";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Container from "../../components/Container";

import styles from "./styles";

const FIRST_PAGE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=21";

const Home = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updatePage = (url) => {
    setIsLoading(true);

    pokemonService.getList(url, (data) => {
      setIsLoading(false);

      setPokemonList(data.results);
      setPreviousPage(data.previous);
      setNextPage(data.next);
    });
  };

  useEffect(() => {
    updatePage(FIRST_PAGE);
  }, []);

  const goToDetails = (url) =>
    navigation.navigate("Details", {
      url,
    });

  return (
    <Container pageTitle={"Home"}>
      <View style={styles.list}>
        {pokemonList.length
          ? pokemonList.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  url={item.url}
                  onPressButton={() => {
                    goToDetails(item.url);
                  }}
                />
              );
            })
          : null}
      </View>

      <View style={styles.pagination}>
        <Button
          text={"Página anterior"}
          disabled={Boolean(!previousPage)}
          loading={isLoading}
          onPress={() => updatePage(previousPage)}
        />

        <Button
          text={"Próxima página"}
          loading={isLoading}
          disabled={Boolean(!nextPage)}
          onPress={() => updatePage(nextPage)}
        />
      </View>
    </Container>
  );
};

export default Home;
