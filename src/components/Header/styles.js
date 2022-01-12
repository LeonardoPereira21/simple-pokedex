import { StyleSheet } from "react-native";
import { COLORS } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.RED,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.WHITE,
  },
});

export default styles;
