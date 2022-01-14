import { StyleSheet } from "react-native";
import { SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  search: {
    paddingTop: SPACING.medium,
    paddingHorizontal: SPACING.xsmall,
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginVertical: SPACING.large,
  },
  pagination: {
    flexDirection: "row",
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.xsmall,
    paddingBottom: SPACING.medium,
    justifyContent: "space-between",
  },
});

export default styles;
