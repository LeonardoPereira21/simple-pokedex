import { StyleSheet } from "react-native";
import { SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.xsmall,
    paddingBottom: SPACING.medium,
    justifyContent: "space-between",
  },
});

export default styles;
