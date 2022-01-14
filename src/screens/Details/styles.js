import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  details: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SPACING.medium,
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
    fontSize: FONT_SIZES.xlarge,
  },
  name: {
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
  bottom: {
    marginVertical: SPACING.large,
  },
});

export default styles;
