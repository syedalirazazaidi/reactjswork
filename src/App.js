import Startpage from "./components/startpage";
import "./App.css";
import Quizpage from "./components/quizpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/quizpage" element={<Quizpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
