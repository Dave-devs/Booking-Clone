import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontFamily: "montSB",
    fontSize: 14,
    color: Colors.white,
    paddingLeft: 40,
  },
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerRighText: {
    fontFamily: "mont",
    fontSize: 12,
    color: Colors.white,
  },
  modal: {
    backgroundColor: Colors.button,
    marginBottom: 15,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontFamily: "montM",
    fontSize: 13,
    color: Colors.white,
  },
  modalTitle: {
    marginHorizontal: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalTitleText: {
    fontFamily: "montSB",
    textAlign: "left",
  },
  sortTextContaier: {
    justifyContent: "center",
    flex: 2,
    borderRightWidth: 1,
    borderColor: Colors.yellow,
  },
  sortTitleText: {
    fontFamily: "montSB",
    fontSize: 14,
  },
  sortText: {
      marginLeft: 10,
      fontFamily: "montM",
      fontSize: 12,
  }
});
