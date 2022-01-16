import React, { useState, useEffect } from "react";
import { View } from "react-native";

import pokeApi from "../../services/network/pokeApi";

import Card from "../../components/Card";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import Container from "../../components/Container";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import Text from "../../components/Text";

import styles from "./styles";

const FIRST_PAGE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  const [nextPage, setNextPage] = useState(null);

  const [previousPage, setPreviousPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState()

  const updatePage = (url) => {
    setIsLoading(true);
    setSearchText("");
    setCurrentPage(url);

    pokeApi.get(url, (data) => {
      setIsLoading(false);
      setPokemonList(data.results);
      setPreviousPage(data.previous);
      setNextPage(data.next);
    });
  };

  useEffect(() => {
    updatePage(FIRST_PAGE);
  }, []);

  useEffect(() => {
    handleTimer();
  }, [searchText]);

  const handleSearch = () => {
    if (currentPage) {
      if (!searchText) {
        updatePage(currentPage)
      } else {
        pokeApi.get(
          `https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`,
          (data) => {
            setPokemonList([{ name: data.species.name, url: `https://pokeapi.co/api/v2/pokemon/${data.id}` }])
          },
          () => {
            setPokemonList([])
          })
      }
    }

  }

  const handleTimer = () => {
    clearTimeout(timer)
    setTimer(setTimeout(handleSearch, 800))
  }

  const goToDetails = (url) =>
    navigation.navigate("Details", {
      url,
    });

  const handleChangeSearch = (text) => {
    setSearchText(text);
  };
  
  return (
    <Container pageTitle={"home"}>
      <View style={styles.search}>
        <SearchInput
          value={searchText}
          onChangeText={handleChangeSearch}
        />
      </View>

      {!isLoading ? (
        <CardList>
          {pokemonList.length ? (
            pokemonList.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                url={item.url}
                onPressButton={() => {
                  goToDetails(item.url);
                }}
              />
            ))
          ) : (
            <Text style={styles.text}>
              Ops, não encontramos nenhum Pokémon :(
            </Text>
          )}
        </CardList>
      ) : (
        <Loading />
      )}

      <View style={styles.pagination}>
        <Button
          text={"página anterior"}
          disabled={Boolean(!previousPage)}
          loading={isLoading}
          onPress={() => updatePage(previousPage)}
        />

        <Button
          text={"próxima página"}
          loading={isLoading}
          disabled={Boolean(!nextPage)}
          onPress={() => updatePage(nextPage)}
        />
      </View>
    </Container>
  );
};

export default Home;
