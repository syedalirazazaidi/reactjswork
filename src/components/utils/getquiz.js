export function getQuiz() {
  return fetch("https://opentdb.com/api.php?amount=10").then((data) =>
    data.json()
  );
}
