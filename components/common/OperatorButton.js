import { useContext, useState } from "react";
import GlobalContext from "./GlobalProvider";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import ThemeContext from "./Theme";

const OperatorButton = ({ sign }) => {
  const { operator, setOperator } = useContext(GlobalContext);
  const { primary, dark, white, light, text, halfDark } =
    useContext(ThemeContext);

  const disabled = sign === "/";

  const buttonText = () => {
    switch (sign) {
      case "+":
        return "Add";
      case "-":
        return "Subtract";
      case "*":
        return "Multiply";
      case "/":
        return "Divide";
      default:
        return "Unknown";
    }
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: operator === sign ? dark : disabled ? light : primary,
      width: "45%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    text: {
      fontSize: 16,
      fontWeight: "700",
      color: disabled ? text : white,
    },
  });

  const handleClick = () => {
    setOperator(sign);
  };

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={handleClick}
      underlayColor={halfDark}
      disabled={disabled}
    >
      <Text style={styles.text}>{buttonText()}</Text>
    </TouchableHighlight>
  );
};

export default OperatorButton;
