import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  default: {
    backgroundColor: COLORS.YELLOW,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: SPACING.medium,
  },
  disabled: {
    backgroundColor: COLORS.GRAY,
  },
});

export default styles;
