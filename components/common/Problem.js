import { Fragment, useContext, useEffect, useState } from "react";
import GlobalContext from "./GlobalProvider";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import ThemeContext from "./Theme";

const Problem = () => {
  const { setScore, operator, setPage } = useContext(GlobalContext);
  const { light, secondary, primary, white } = useContext(ThemeContext);

  const NUM_OF_VALUES = 2;
  const MIN = 1;
  const MAX = 12;

  const [values, setValues] = useState(
    Array.from({ length: NUM_OF_VALUES }, () => 0)
  );
  const [entered, setEntered] = useState("");

  const getRandomNumber = () =>
    Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  const formatScore = (actualAnswer) => ({
    valuesProvided: values,
    operator,
    submittedValue: entered,
    actualAnswer,
    correct: actualAnswer === entered,
  });

  const resetProblem = () => {
    setValues(Array.from({ length: NUM_OF_VALUES }, () => getRandomNumber()));
    setEntered("");
  };

  const validateScore = () => {
    const actualAnswer = values.reduce((acc, curr) => {
      switch (operator) {
        case "+":
          return acc + curr;
        case "-":
          return acc - curr;
        case "*":
          return acc * curr;
        case "/":
          return acc / curr;
        default:
          setPage("main");
          return;
      }
    }, 0);

    const result = formatScore(actualAnswer);

    setScore((prev) => [...prev, result]);
    resetProblem();
  };

  const handleChangeText = (newValue) => {
    if (!/^-?\d*$/.test(newValue)) return;
    if (!newValue) {
      setEntered("");
      return;
    }
    setEntered(parseFloat(newValue));
  };

  useEffect(() => {
    resetProblem();
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      height: "100%",
      marginVertical: "25%",
    },
    numberBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    number: {
      fontSize: 84,
      fontWeight: "600",
      color: secondary,
    },
    operator: {
      fontSize: 48,
      marginHorizontal: 10,
      color: secondary,
    },
    input: {
      backgroundColor: light,
      width: "100%",
      height: 70,
      borderRadius: 8,
      marginTop: 30,

      textAlign: "center",
      color: white,
      fontSize: 48,
      fontWeight: "600",
    },
    submitButton: {
      marginTop: 40,
      padding: 10,
      backgroundColor: primary,
      width: "75%",
      borderRadius: 5,
    },
    submitText: {
      fontSize: 24,
      textAlign: "center",
      textTransform: "uppercase",
      color: white,
      fontWeight: "600",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.numberBox}>
        {values.map((value, index) => (
          <Fragment key={index}>
            <Text style={styles.number}>{value}</Text>
            {index !== values.length - 1 && (
              <Text style={styles.operator}>{operator}</Text>
            )}
          </Fragment>
        ))}
      </View>
      <TextInput
        style={styles.input}
        value={`${entered}`}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        autoFocus
        onSubmitEditing={validateScore}
        blurOnSubmit={false}
      />
      <TouchableHighlight style={styles.submitButton} onPress={validateScore}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Problem;
