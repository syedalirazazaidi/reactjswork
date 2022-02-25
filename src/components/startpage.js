import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

const Startpage = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/quizpage");
  }
  return (
    <main
      style={{
        textAlign: "center",
        width: "400px",
        height: "350px",
        margin: "240px auto",
      }}
    >
      <h1 style={{ color: "#293264", margin: " 0 auto" }}>Quizzical</h1>
      <p style={{ color: "#293264", fontSize: "17px" }}>
        {" "}
        Some description if needed
      </p>

      <button
        style={{
          backgroundColor: "#4D5B9E",
          color: "#F5F7FB",
          borderRadius: "9px",
          padding: "12px 40px",
          border: "none",
          fontSize: "17px",
        }}
        onClick={handleClick}
      >
        Start quiz
      </button>
    </main>
  );
};

export default Startpage;
