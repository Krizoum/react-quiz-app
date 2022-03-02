import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Answesrs from "./Answers";
const Game = ({ selectedCategory, difficulty, numberOfQuestion }) => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [notClicked, setNotClicked] = useState(false);
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${
        numberOfQuestion ? numberOfQuestion : "2"
      }&category=${selectedCategory ? selectedCategory : ""}&difficulty=${
        difficulty ? difficulty : ""
      }&type=multiple`
    )
      .then((res) => res.json())
      .then((dat) => {
        setData(dat.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  let nextQuestion = () => {
    if (clicked) {
      if (questionIndex > numberOfQuestion - 2) {
        setQuestionIndex(0);
        setData(false);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
      setNotClicked(false);
    } else {
      setNotClicked(true);
    }
  };
  return (
    <div className="game">
      {isLoading && <div className="loading">Loading ...</div>}
      {data ? (
        <>
          <h3>{data[questionIndex].category}</h3>
          <h1
            dangerouslySetInnerHTML={{ __html: data[questionIndex].question }}
          ></h1>
          {notClicked && (
            <div className="not-clicked">please choose an answer</div>
          )}
          <Answesrs
            data={data}
            questionIndex={questionIndex}
            score={score}
            setScore={setScore}
            clicked={clicked}
            setClicked={setClicked}
          />
          <div className="score">Score : {score}</div>
          <div className="score">
            Qeustion number : {questionIndex + 1} / {numberOfQuestion}
          </div>
          <button onClick={nextQuestion}>Next question {">>>"}</button>
        </>
      ) : (
        !isLoading && (
          <div className="game-over">
            <dir>Game Over</dir>
            <div>
              Score : {score} / {questionIndex + 1}
            </div>
            <div>
              <Link to="/">Go back To Home Page</Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Game;
