import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState("home");
  const [timerStart, setTimerStart] = useState(10);
  const [operator, setOperator] = useState("+");
  const [score, setScore] = useState([]);

  const resetGlobalValues = () => {
    setActive(false);
    setScore([]);
    setPage("home");
  };

  const values = {
    active,
    setActive,
    page,
    setPage,
    timerStart,
    setTimerStart,
    operator,
    setOperator,
    score,
    setScore,
    resetGlobalValues,
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
