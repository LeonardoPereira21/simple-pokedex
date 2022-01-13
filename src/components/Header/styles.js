import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZES } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.RED,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.pokemon.hollow,
    fontSize: FONT_SIZES.xlarge,
  },
});

export default styles;
