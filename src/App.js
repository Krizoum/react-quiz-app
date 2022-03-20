// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Categorys from "./components/Categorys";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import NavBar from "./components/NavBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [numberOfQuestion, setNumberOfQuestion] = useState(2);
  const [seted, setSeted] = useState(false);
  const location = useLocation();
  let [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <Categorys
                setSelectedCategory={setSelectedCategory}
                setDifficulty={setDifficulty}
                setNumberOfQuestion={setNumberOfQuestion}
                selectedCategory={selectedCategory}
                difficulty={difficulty}
                numberOfQuestion={numberOfQuestion}
                seted={seted}
                setSeted={setSeted}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Game
                selectedCategory={selectedCategory}
                difficulty={difficulty}
                numberOfQuestion={numberOfQuestion}
                seted={seted}
                score={score}
                setScore={setScore}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
              />
            }
          />
          <Route
            path="/game-over"
            element={<GameOver score={score} questionIndex={questionIndex} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
