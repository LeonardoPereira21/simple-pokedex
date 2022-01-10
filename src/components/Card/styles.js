import { upperFirst } from "lodash";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    padding: 5,
  },
  content: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    textAlign: "center",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: "#feca1b",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default styles;
