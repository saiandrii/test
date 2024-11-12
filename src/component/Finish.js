import React, { useContext } from "react";
import { useState } from "react";
import { AppProvider, GraContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { adress } from "../adress";

const Finish = () => {
  const { text, setText } = useContext(GraContext);
  const { level, setLevel } = useContext(GraContext);
  const { win, setWin } = useContext(GraContext);
  const { clicked, setClicked } = useContext(GraContext);
  const { results, setResults } = useContext(GraContext);

  const navigate = useNavigate();
  const handleSend = async () => {
    try {
      const response = await fetch(`${adress}/results`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: text, win: win }),
      });
      if (response) {
        setLevel(0);
        navigate("/");
        setWin(0);
        results.push({ name: text, number: win });
      } else {
        console.log("error", response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div
        style={{
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 50,
            fontWeight: "bold",
            paddingBottom: 10,
          }}
        >
          Вітаю! {text} твій результат {win} балів
        </div>

        <div style={{ paddingTop: 20 }}></div>
        <button className="button-9" role="button" onClick={handleSend}>
          Знову
        </button>
      </div>
    </div>
  );
};

export default Finish;
