import React, { createContext, useState } from "react";
const GraContext = createContext();
const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [answerItem, setAnswerItem] = useState({});
  const [win, setWin] = useState(0);
  const [level, setLevel] = useState(0);
  const [q1, setQ1] = useState([]);
  const [results, setResults] = useState([]);
  const [fetchedResults, setFetchedResults] = useState({});
  const [fetchedQ, setFetchedQ] = useState({});

  return (
    <GraContext.Provider
      value={{
        clicked,
        setClicked,
        text,
        setText,
        answerItem,
        setAnswerItem,
        win,
        setWin,
        level,
        setLevel,
        password,
        setPassword,
        q1,
        setQ1,
        results,
        setResults,
        fetchedResults,
        setFetchedResults,
        fetchedQ,
        setFetchedQ,
      }}
    >
      {children}
    </GraContext.Provider>
  );
};

export { GraContext, AppProvider };
