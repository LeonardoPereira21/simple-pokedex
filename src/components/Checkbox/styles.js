import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 12,
    height: 12,
  },
  button: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.RED,
    borderRadius: BORDER_RADIUS.small,
    marginRight: SPACING.small,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: COLORS.RED,
  },
});

export default styles;
