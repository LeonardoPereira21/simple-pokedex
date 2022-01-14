import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    margin: SPACING.large,
    backgroundColor: COLORS.WHITE,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
});

export default styles;
