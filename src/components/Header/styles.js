import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  SPACING,
} from "../../services/styles";

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
  button: {
    position: "absolute",
    top: SPACING.large,
    left: SPACING.medium,
  },
  icon: { width: 15, height: 15 },
});

export default styles;
