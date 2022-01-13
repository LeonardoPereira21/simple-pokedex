import React from "react";
import { View, ScrollView } from "react-native";

import Header from "../../components/Header";

import styles from "./styles";

const Container = ({ pageTitle, children, goBack }) => {
  return (
    <View style={styles.container}>
      <Header pageTitle={pageTitle} goBack={goBack} />

      <ScrollView
        scrollEnabled
        keyboardShouldPersistTaps="handled"
        style={styles.scroll}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;
