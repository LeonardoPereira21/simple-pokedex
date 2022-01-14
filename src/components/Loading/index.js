import React from "react";
import { View, ActivityIndicator } from "react-native";

import { COLORS } from "../../services/styles";

import styles from "./styles";

const Loading = () => (
  <View
    testID="screen-loader"
    accessibilityLabel="screen-loader"
    style={styles.container}
  >
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={COLORS.BLUE} testID="loading" />
    </View>
  </View>
);

export default Loading;
