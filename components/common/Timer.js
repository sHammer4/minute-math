import { useContext, useEffect, useState } from "react";
import GlobalContext from "./GlobalProvider";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "./Theme";

const Timer = ({ onTimerEnd }) => {
  const { active, setActive, setPage, timerStart } = useContext(GlobalContext);
  const { green, yellow } = useContext(ThemeContext);

  const DEFAULT_START = 3;

  const [countDown, setCountdown] = useState(DEFAULT_START);
  const [seconds, setSeconds] = useState(timerStart);

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else {
      setActive(true);
    }
  }, [countDown]);

  useEffect(() => {
    if (!active) return;

    if (seconds > 0) {
      setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    } else {
      setActive(false);
      onTimerEnd();
    }
  }, [seconds, active]);

  const styles = StyleSheet.create({
    timer: {
      color: active ? green : yellow,
      fontSize: 54,
      fontWeight: "600",
    },
  });

  return (
    <View>
      <Text style={styles.timer}>{countDown || seconds}</Text>
    </View>
  );
};

export default Timer;
