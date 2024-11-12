import React, { useContext, useEffect, useState } from "react";
import { GraContext } from "../context/AppContext";
import { pass } from "../questions/Questions";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";
import { adress } from "../adress";
import Aprove from "./Aprove";

const Edit = () => {
  const { password, setPassword } = useContext(GraContext);
  const { q1, setQ1 } = useContext(GraContext);
  const { results, setResults } = useContext(GraContext);
  const { fetchedResults, setFetchedResults } = useContext(GraContext);
  const { fetchedQ, setFetchedQ } = useContext(GraContext);

  const [theme, setTheme] = useState("");
  const [b1Value, setB1value] = useState("");
  const [b2Value, setB2value] = useState("");
  const [b3Value, setB3value] = useState("");
  const [b4Value, setB4value] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const [deleted, setDeleted] = useState(false);
  console.log(password);
  const navigate = useNavigate();

  const handleSend = async () => {
    try {
      const response = await fetch(`${adress}/question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ array: q1 }),
      });
      if (response) {
      } else {
        console.log("error", response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleQuestion = async () => {
    try {
      const response = await fetch(`${adress}/get-question`);

      const data = await response.json();

      if (response.ok) {
        setFetchedQ(data);
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async () => {
    try {
      const response = await fetch(`${adress}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        setQ1([]);
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleQuestion();
  }, []);
  const clickHandler = () => {
    q1?.push({
      theme: theme,
      answers: [b1Value, b2Value, b3Value, b4Value],
      true: answerValue,
    });
    setTheme("");
    setB1value("");
    setB2value("");
    setB3value("");
    setB4value("");
    setAnswerValue("");
  };

  return password === pass &&
    (fetchedQ[0]?.array.length >= 25 || q1.length >= 25) ? (
    <div className="container">
      {fetchedResults?.length !== "undefined" && (
        <div
          style={{
            textAlign: "start",
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            paddingBottom: 10,
          }}
        >
          <div style={{ paddingBottom: 20 }}>Результати</div>
          {fetchedResults &&
            fetchedResults?.map((item) => (
              <div style={{}}>
                {item.name}
                {` `}
                {item.win}
              </div>
            ))}
        </div>
      )}
      {fetchedQ[0]?.array.length >= 25 ? (
        <button
          className="button-91"
          onClick={() => (deleteHandler(), setDeleted(true), navigate("/"))}
        >
          Видалити тест
        </button>
      ) : (
        <button
          className="button-91"
          onClick={() => (navigate("/"), handleSend())}
        >
          Запустити тест
        </button>
      )}

      <button
        className="button-91"
        onClick={() => (navigate("/"), setPassword(""))}
      >
        Повернутися до старту
      </button>
    </div>
  ) : password !== pass ? (
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
          Пароль
        </div>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
    </div>
  ) : (
    <div
      className="container"
      style={{ textAlign: "start", fontWeight: "bold" }}
    >
      <div style={{ color: "white", paddingBottom: 20 }}>{q1?.length}</div>
      <div>
        <div style={{ color: "white" }}>Тема</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <div style={{ color: "white" }}>В1</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={b1Value}
          onChange={(e) => setB1value(e.target.value)}
        />
        <div style={{ color: "white" }}>В2</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={b2Value}
          onChange={(e) => setB2value(e.target.value)}
        />
        <div style={{ color: "white" }}>В3</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={b3Value}
          onChange={(e) => setB3value(e.target.value)}
        />
        <div style={{ color: "white" }}>В4</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={b4Value}
          onChange={(e) => setB4value(e.target.value)}
        />
        <div style={{ color: "white" }}>Правильний</div>
        <input
          className="input1"
          style={{ width: "500px" }}
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
      </div>
      <button
        className="button-91"
        style={{ width: "500px" }}
        role="button"
        onClick={clickHandler}
      >
        Вперед
      </button>
    </div>
  );
};

export default Edit;
