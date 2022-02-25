import React from "react";

import { nanoid } from "nanoid";
const Question = ({ questions, answers }) => {
  let id = nanoid();

  const markAnswer = (e) => {
    const anse = e.target.value;
    console.log(anse);
  };
  const allanswer = answers.map((i) => {
    return (
      <button
        key={id}
        style={{
          margin: "10px",
          backgroundColor: "#F5F7FB",
          borderRadius: "15px",
          padding: "5px 10px",
          border: "1px solid #293264",
          cursor: "pointer",
        }}
        onClick={markAnswer}
      >
        {i}
      </button>
    );
  });
  return (
    <div
      style={{
        color: "#293264",
        fontSize: "16px",
        fontWeight: 700,
        font: "Karla",
        margin: "70px auto",
        width: "600px",
        height: "60px",
      }}
    >
      {questions}
      <br />

      <p
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        {allanswer}
      </p>

      <hr />
    </div>
  );
};

export default Question;
