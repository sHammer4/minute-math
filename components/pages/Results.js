import { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import GlobalContext from "../common/GlobalProvider";
import ThemeContext from "../common/Theme";
import ScoreCard from "../common/ScoreCard";

const Results = () => {
  const { score, resetGlobalValues } = useContext(GlobalContext);
  const { text, primary, background, dark } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      minHeight: "100%",
      paddingTop: 80,
      paddingHorizontal: 15,
      alignItems: "center",
    },
    title: {
      fontSize: 48,
      fontWeight: "600",
      color: text,
    },
    scoreContainer: {
      flexGrow: 1,
      paddingHorizontal: 15,
    },
    button: {
      backgroundColor: primary,
      width: "75%",
      alignItems: "center",
      padding: 15,
      marginVertical: 20,
      borderRadius: 5,
    },
    buttonText: {
      textTransform: "uppercase",
      fontSize: 18,
      fontWeight: "700",
      color: background,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESULTS</Text>
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={styles.scoreContainer}
      >
        {score.map((s, index) => (
          <ScoreCard key={index} scoreObj={s} index={index} />
        ))}
      </ScrollView>
      <TouchableHighlight
        style={styles.button}
        underlayColor={dark}
        onPress={resetGlobalValues}
      >
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Results;
