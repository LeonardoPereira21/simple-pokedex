import { StyleSheet } from "react-native";
import { SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: SPACING.xsmall,
  },
  pagination: {
    flexDirection: "row",
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.small,
    paddingBottom: SPACING.medium,
    justifyContent: "space-between",
  },
});

export default styles;
