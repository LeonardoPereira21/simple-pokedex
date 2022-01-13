import { StyleSheet } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "../../services/styles";

const styles = StyleSheet.create({
  default: {
    backgroundColor: COLORS.YELLOW,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: SPACING.medium,
  },
  disabled: {
    backgroundColor: COLORS.GRAY,
  },
});

export default styles;
