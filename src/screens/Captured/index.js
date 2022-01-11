import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";

import Header from "../../components/Header";

const Captured = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header pageTitle={"Captured"} />

      <ScrollView
        scrollEnabled
        keyboardShouldPersistTaps="handled"
        style={{ flexGrow: 1 }}
      >
        <Text>Captured</Text>
      </ScrollView>
    </View>
  );
};

export default Captured;
