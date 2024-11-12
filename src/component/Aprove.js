import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Aprove = ({ childen }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <MdOutlineDone size={50} style={{ color: "white", paddingBottom: 20 }} />
      <div
        style={{
          textAlign: "start",
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          paddingBottom: 10,
        }}
      >
        Тест успішно {childen}
      </div>
      <button className="button-91" onClick={() => navigate("/")}>
        Повернутися до старту
      </button>
    </div>
  );
};

export default Aprove;
