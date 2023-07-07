import { StyleSheet } from "react-native";

const loaderSize = 120;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingRight: 26,
    paddingLeft: 26,
  },
  animation: {
    width: loaderSize,
    height: loaderSize,
    alignSelf: "center",
  },
});

export default styles;
