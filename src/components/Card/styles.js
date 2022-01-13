import { StyleSheet } from "react-native";
import { SPACING, COLORS } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    padding: SPACING.xsmall,
  },
  content: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.GRAY,
    padding: SPACING.small,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginBottom: SPACING.xsmall,
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default styles;
