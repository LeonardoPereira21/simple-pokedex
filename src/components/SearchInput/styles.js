import { StyleSheet } from "react-native";
import { COLORS, BORDER_RADIUS, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.GRAY,
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: SPACING.medium,
  },
  input: {
    height: 40,
    flexGrow: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default styles;
