import axios from "axios";
import React from "react";
import Question from "./questionpage";
import { getQuiz } from "./utils/getquiz";
import { nanoid } from "nanoid";

const ShuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const Quizpage = () => {
  const [quiz, setQuiz] = React.useState([]);
  const id = nanoid();
  React.useEffect(() => {
    getquiz();
  }, []);
  const getquiz = () => {
    axios
      .get("https://opentdb.com/api.php?amount=5")
      .then((res) => {
        setQuiz(res.data);
      })
      .catch((err) => console.error(err));
  };

  const quizData = quiz?.results?.map((item, index) => {
    const answers = ShuffleArray([
      ...item.incorrect_answers,
      item.correct_answer,
    ]);

    return (
      <Question
        key={index}
        questions={item.question}
        answers={answers}
        correct_answer={item.correct_answer}
      />
    );
  });

  return <div>{quizData}</div>;
};

export default Quizpage;
