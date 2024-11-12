import React, { useContext } from "react";
import { GraContext } from "../context/AppContext";

const MainItem = ({ theme, item }) => {
  const { answerItem, setAnswerItem } = useContext(GraContext);
  const { win, setWin } = useContext(GraContext);
  const { level, setLevel } = useContext(GraContext);

  return (
    <div className="container">
      <div
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "white",
          paddingBottom: 20,
        }}
      >
        {theme}
      </div>
      {item.answers.map((i, index) => {
        return (
          <button
            key={index}
            className="button-91"
            role="button"
            index={index}
            children={i}
            onClick={() => {
              setAnswerItem(i);
              if (i === item.true[0]) {
                setWin(win + 1);
                setLevel(level + 1);
              } else {
                setLevel(level + 1);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default MainItem;
