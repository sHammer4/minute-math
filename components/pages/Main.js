import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import GlobalContext from "../common/GlobalProvider";
import Home from "./Home";
import Math from "./Math";
import ThemeContext from "../common/Theme";
import Results from "./Results";

const Main = () => {
  const { page } = useContext(GlobalContext);
  const [currPage, setCurrPage] = useState(<Home />);
  const { background } = useContext(ThemeContext);

  useEffect(() => {
    let current;
    switch (page) {
      case "home":
        current = <Home />;
        break;
      case "math":
        current = <Math />;
        break;
      case "results":
        current = <Results />;
        break;
      default:
        break;
    }
    setCurrPage(current);
  }, [page]);

  const styles = StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      backgroundColor: background,
    },
  });

  return <View style={styles.background}>{currPage}</View>;
};

export default Main;
