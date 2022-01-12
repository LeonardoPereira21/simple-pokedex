import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import pokemonService from "../../services/network/pokemonService";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";

import styles from "./styles";
import Container from "../../components/Container";

const FIRST_PAGE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=21";

const Home = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    pokemonService.getList(FIRST_PAGE, (data) => {
      setIsLoading(false);
      setPageDetails(data.results, data.previous, data.next);
    });
  }, []);

  const getNextPage = () => {
    setIsLoading(true);
    pokemonService.getList(nextPage, (data) => {
      setIsLoading(false);
      setPageDetails(data.results, data.previous, data.next);
    });
  };

  const getPreviousPage = () => {
    setIsLoading(true);

    pokemonService.getList(previousPage, (data) => {
      setIsLoading(false);
      setPageDetails(data.results, data.previous, data.next);
    });
  };

  const setPageDetails = (results, previous, next) => {
    setPokemonList(results);
    setPreviousPage(previous);
    setNextPage(next);
  };

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
          onPress={getPreviousPage}
        />

        <Button
          text={"Próxima página"}
          loading={isLoading}
          disabled={Boolean(!nextPage)}
          onPress={getNextPage}
        />
      </View>
    </Container>
  );
};

export default Home;
