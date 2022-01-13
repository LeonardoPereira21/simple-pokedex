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
  },
  name: {
    textAlign: "center",
    marginBottom: SPACING.xsmall,
  },
});

export default styles;
