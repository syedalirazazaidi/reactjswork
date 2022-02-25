import React from "react";
import "./styles.css";
import { nanoid } from "nanoid";
import ScoreCard from "./score";
const Question = ({ questions, answers, correct_answer }) => {
  var btnStyle = {
    margin: "10px",
    backgroundColor: "#F5F7FB",
    borderRadius: "15px",
    padding: "15px 10px",
    border: "1px solid #293264",
    cursor: "pointer",
  };
  console.log(correct_answer);
  const [score, setScore] = React.useState(0);
  const [selected, setSelect] = React.useState();
  const [checking, setChecking] = React.useState(true);
  const [disable, setDisable] = React.useState(false);
  let id = nanoid();

  const styles = { backgroundColor: checking ? "orange" : "grey" };

  const markAnswer = (i) => {
    btnStyle = {
      backgroundColor: "black",
    };

    // if ( newValue.le? setScore((prev) => prev++) : setScore(score));
    if (i === correct_answer) {
      setScore((prev) => prev++);
      //setChecking(!checking);
    } else {
      setScore(score);
    }
  };
  console.log(score, "-------------------");
  const allanswer = answers.map((i, index) => {
    return (
      <button style={btnStyle} onClick={() => markAnswer(i)} key={index}>
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
          textOverflow: "ellipsis",
        }}
      >
        {" "}
        {allanswer}
      </p>

      <hr />
      {/* {score} */}
      {/* <ScoreCard score={score} /> */}
    </div>
  );
};

export default Question;
