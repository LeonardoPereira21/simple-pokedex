import React from "react";
import { connect } from "react-redux";

import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Container from "../../components/Container";
import Text from "../../components/Text";

import styles from "./styles";

const Captured = ({ navigation, captured }) => {
  const goToDetails = (url) =>
    navigation.navigate("Details", {
      url,
    });

  return (
    <Container pageTitle={"capturados"}>
      {captured.list.length ? (
        <CardList>
          {captured.list
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                url={item.url}
                onPressButton={() => {
                  goToDetails(item.url);
                }}
              />
            ))}
        </CardList>
      ) : (
        <Text style={styles.text}>Você ainda não capturou nenhum Pokémon.</Text>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { captured } = state;
  return { captured };
};

export default connect(mapStateToProps)(Captured);
