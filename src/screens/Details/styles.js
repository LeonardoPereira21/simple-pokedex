import { StyleSheet } from "react-native";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  SPACING,
} from "../../services/styles";

const styles = StyleSheet.create({
  details: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginVertical: SPACING.medium,
    backgroundColor: COLORS.BLUE,
    borderColor: COLORS.YELLOW,
    borderWidth: 5,
  },
  image: {
    width: 300,
    height: 300,
  },
  head: {
    flexDirection: "row",
  },
  order: {
    fontFamily: FONT_FAMILY.pokemon.solid,
    fontSize: FONT_SIZES.xlarge,
  },
  name: {
    fontFamily: FONT_FAMILY.pokemon.solid,
    fontSize: FONT_SIZES.xlarge,
    textTransform: "capitalize",
  },
  table: {
    width: 300,
    maxWidth: "100%",
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.small,
  },
});

export default styles;
