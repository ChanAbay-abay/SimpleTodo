import { StyleSheet } from "react-native";
import Theme from "../Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
  taskContainer: {
    padding: 12,
    backgroundColor: currentTheme.backgroundColor,
    borderWidth: 1,
    // borderColor: currentTheme.textColor, //temp
    borderColor: "orange",
    flexDirection: "row",
    borderRadius: 16,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: "#d0d0d0",
    borderWidth: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 4,
  },
  checkboxText: {
    color: "#d0d0d0",
    lineHeight: 17,
    fontSize: 14,
  },
  taskContent: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    color: currentTheme.textColor,
    fontSize: 18,
    fontWeight: "500",
  },
  taskDesc: {
    fontSize: 14,
    color: currentTheme.textColor,
  },
  dateDue: {
    color: currentTheme.textColor,
    fontSize: 10,
  },
  completed: {
    backgroundColor: "transparent",
    borderColor: "#d0d0d0",
  },
  completedText: {
    color: "#a0a0a0",
    textDecorationLine: "line-through",
  },
});

export default styles;
