import { useContext, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalContext from "../common/GlobalProvider";
import OperatorButton from "../common/OperatorButton";
import ThemeContext from "../common/Theme";

const Home = () => {
  const { setPage, setTimerStart, timerStart } = useContext(GlobalContext);
  const { light, text, white, secondary } = useContext(ThemeContext);

  const toggleTimer = () => {
    setPage("math");
  };

  const handleInput = (text) => {
    setTimerStart(text);
  };

  const handleBlur = () => {
    if (timerStart <= 0) {
      setTimerStart(0);
      return;
    }
    setTimerStart((prev) => parseFloat(prev));
  };

  const styles = StyleSheet.create({
    title: { fontSize: 50, fontWeight: "700", marginBottom: 30, color: text },
    btnContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "75%",
    },
    textInputContainer: {
      width: "100%",
      alignItems: "center",
      marginVertical: 20,
    },
    textInputLabel: {
      fontSize: 16,
      color: text,
      fontWeight: "500",
      marginBottom: 5,
    },
    textInput: {
      textAlign: "center",
      backgroundColor: light,
      width: "65%",
      height: 40,
      borderRadius: 10,
      color: white,
      fontSize: 16,
      fontWeight: "600",
    },
    startButton: {
      width: "50%",
      height: 40,
      backgroundColor: secondary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginTop: 20,
    },
    startButtonText: {
      color: white,
      fontWeight: "600",
      fontSize: 20,
      textTransform: "uppercase",
    },
  });

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>Minute Math</Text>
      <View style={styles.btnContainer}>
        <OperatorButton sign={"+"} />
        <OperatorButton sign={"-"} />
      </View>
      <View style={{ ...styles.btnContainer, marginTop: 10 }}>
        <OperatorButton sign={"*"} />
        <OperatorButton sign={"/"} />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>{"Timer (seconds)"}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Seconds"
          keyboardType="numeric"
          onChangeText={handleInput}
          onEndEditing={handleBlur}
          value={`${timerStart}`}
        />
      </View>
      <TouchableOpacity style={styles.startButton} onPress={toggleTimer}>
        <Text style={styles.startButtonText}>Start Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
