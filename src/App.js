// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Categorys from "./components/Categorys";
import Game from "./components/Game";
import NavBar from "./components/NavBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [numberOfQuestion, setNumberOfQuestion] = useState(2);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
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
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
