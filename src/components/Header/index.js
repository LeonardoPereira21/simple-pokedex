import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import iconLeftArrow from "../../assets/png/icon-left-arrow.png";

import Text from "../Text";

import styles from "./styles";

const Header = ({ pageTitle, goBack }) => {
  return (
    <View style={styles.container}>
      {goBack ? (
        <TouchableOpacity
          testID="go-back-button"
          style={styles.button}
          onPress={goBack}
        >
          <Image style={styles.icon} source={iconLeftArrow} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{pageTitle}</Text>
    </View>
  );
};

export default Header;
