import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import pokemonService from "../../services/network/pokemonService";

import Header from "../../components/Header";
import Card from "../../components/Card";

import styles from "./styles";

const Home = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    pokemonService.getList((data) => {
      setPokemonList(data);
    });
  }, []);

  const goToDetails = (url) =>
    navigation.navigate("Details", {
      url,
    });

  return (
    <View style={{ flex: 1 }}>
      <Header pageTitle={"Home"} />

      <ScrollView
        scrollEnabled
        keyboardShouldPersistTaps="handled"
        style={{ flexGrow: 1 }}
      >
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
      </ScrollView>
    </View>
  );
};

export default Home;
