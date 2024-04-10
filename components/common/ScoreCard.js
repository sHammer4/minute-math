import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "./Theme";

const ScoreCard = ({ scoreObj, index }) => {
  const { light, secondary, green, red } = useContext(ThemeContext);
  console.log("scoreObj", scoreObj);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: light,
      width: "100%",
      marginVertical: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    title: {
      color: secondary,
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
    scoreContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      color: secondary,
    },
    h2: {
      color: secondary,
      fontWeight: "600",
    },
    userAnswer: {
      color: scoreObj.correct ? green : red,
      fontWeight: "600",
      textAlign: "right",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question {index + 1}:</Text>
      <View style={styles.scoreContainer}>
        <View>
          <Text style={styles.h2}>Question:</Text>
          <Text style={styles.text}>
            {scoreObj.valuesProvided.map((v, i) => {
              return `${v} ${
                i !== scoreObj.valuesProvided.length - 1
                  ? `${scoreObj.operator} `
                  : "= "
              }`;
            })}
            <Text style={styles.h2}>{scoreObj.actualAnswer}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.h2}>Your Answer:</Text>
          <Text style={styles.userAnswer}>{scoreObj.submittedValue}</Text>
        </View>
      </View>
    </View>
  );
};

export default ScoreCard;
