import { StyleSheet } from "react-native";
import { SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    padding: SPACING.xsmall,
  },
  content: {
    borderWidth: 1,
    borderRadius: 5,
    padding: SPACING.small,
  },
  name: {
    textAlign: "center",
    marginBottom: SPACING.xsmall,
    textTransform: "capitalize",
  },
});

export default styles;
