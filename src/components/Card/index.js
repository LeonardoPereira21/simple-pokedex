import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Card = ({ name, url }) => {
  return (
    <View key={name} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
