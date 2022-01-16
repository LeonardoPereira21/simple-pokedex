import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.RED,
    height: Platform.OS === "ios" ? 80 : 60,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.xlarge,
  },
  button: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : SPACING.large,
    left: SPACING.medium,
  },
  icon: { width: 15, height: 15 },
});

export default styles;
