import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Card = ({ name, onPressButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
