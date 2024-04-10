import { StyleSheet, Text, View } from "react-native";
import Timer from "../common/Timer";
import { useContext } from "react";
import GlobalContext from "../common/GlobalProvider";
import Problem from "../common/Problem";

const Math = () => {
  const { setPage, active } = useContext(GlobalContext);

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      paddingVertical: 60,
      paddingHorizontal: 50,
      justifyContent: "flex-start",
      alignItems: "center",
    },
  });

  const goToResults = () => {
    setPage("results");
  };

  return (
    <View style={styles.container}>
      <Timer onTimerEnd={goToResults} />
      {active && <Problem />}
    </View>
  );
};

export default Math;
