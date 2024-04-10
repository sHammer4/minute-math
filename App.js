import { StyleSheet, View, Text } from "react-native";
import { GlobalProvider } from "./components/common/GlobalProvider";
import Main from "./components/pages/Main";
import { ThemeProvider } from "./components/common/Theme";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <GlobalProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </GlobalProvider>
    </View>
  );
}
