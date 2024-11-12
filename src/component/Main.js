import React, { useContext } from "react";
import MainItem from "./MainIItem";
import {
  levelFive,
  levelFour,
  levelOne,
  levelThree,
  levelTwo,
} from "../questions/Questions";
import { GraContext } from "../context/AppContext";
import Finish from "./Finish";

const Main = () => {
  const { level, setLevel } = useContext(GraContext);
  const { q1, setQ1 } = useContext(GraContext);
  const { fetchedQ, setFetchedQ } = useContext(GraContext);

  // const item1 = levelOne[Math.floor(Math.random() * (24 - 1 + 1) + 1)];
  const item1 =
    fetchedQ[0]?.array[Math.floor(Math.random() * (24 - 1 + 1) + 1)];

  return level >= 16 ? (
    <Finish />
  ) : (
    <MainItem theme={item1.theme} item={item1} />
  );
};
export default Main;
