import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AppProvider, GraContext } from "../context/AppContext";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { adress } from "../adress";

const Welcome = () => {
  const { clicked, setClicked } = useContext(GraContext);
  const { text, setText } = useContext(GraContext);
  const { level, setLevel } = useContext(GraContext);
  const { q1, setQ1 } = useContext(GraContext);
  const { fetchedResults, setFetchedResults } = useContext(GraContext);
  const { fetchedQ, setFetchedQ } = useContext(GraContext);

  const navigate = useNavigate();
  const clickHandler = () => (navigate("Main"), setLevel(level + 1));

  useEffect(() => {
    setTimeout(() => {
      handleQuestion();
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      handleResults();
    }, 3000);
  }, []);
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
  const handleResults = async () => {
    try {
      const response = await fetch(`${adress}/get-results`);

      const data = await response.json();

      if (response) {
        setFetchedResults(data);
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
          Вітаю!
        </div>

        {fetchedQ &&
        fetchedQ[0]?.array.length !== 0 &&
        typeof fetchedQ[0]?.array.length !== "undefined" ? (
          <div>
            <div
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Напиши своє ім'я
            </div>
            <div style={{ paddingTop: 20 }}>
              <input
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <button className="button-9" role="button" onClick={clickHandler}>
              Вперед
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Наразі тест ще не зроблений {":("}
            </div>
          </div>
        )}

        <div
          style={{
            paddingTop: 20,
          }}
          onClick={() => (navigate("/edit"), handleResults(), handleQuestion())}
        >
          <RiAdminFill className="admin" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
