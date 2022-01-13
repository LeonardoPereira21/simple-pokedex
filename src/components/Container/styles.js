import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../services/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.small,
  },
});

export default styles;
