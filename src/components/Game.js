import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Answesrs from "./Answers";

const Game = ({ selectedCategory, difficulty, numberOfQuestion }) => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
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
    }
  };
  return (
    <motion.div className="game">
      {isLoading && <div className="loading">Loading ...</div>}
      {data ? (
        <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }}>
          <h3 className="category">{data[questionIndex].category}</h3>
          <h1
            dangerouslySetInnerHTML={{ __html: data[questionIndex].question }}
            className={wrongAnswer ? "question cl" : "question"}
          ></h1>
          <Answesrs
            data={data}
            questionIndex={questionIndex}
            score={score}
            setScore={setScore}
            clicked={clicked}
            setClicked={setClicked}
            wrongAnswer={wrongAnswer}
            setWrongAnswer={setWrongAnswer}
          />
          <div className="question-number">
            <span
              style={{
                width: `${((questionIndex + 1) / numberOfQuestion) * 100}%`,
              }}
            ></span>
            <p>
              Qeustion number : {questionIndex + 1} / {numberOfQuestion}
            </p>
          </div>
          {clicked && (
            <button onClick={nextQuestion}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M40 0C17.9062 0 0 17.9062 0 40C0 62.0938 17.9062 80 40 80C62.0938 80 80 62.0938 80 40C80 17.9062 62.0938 0 40 0ZM56.0312 43.5312L38.5312 61.0312C36.5781 62.9844 33.4141 62.9844 31.4609 61.0312C29.5078 59.0781 29.5078 55.9141 31.4609 53.9609L45.4375 40L31.4688 26.0312C29.5156 24.0781 29.5156 20.9141 31.4688 18.9609C33.4219 17.0078 36.5859 17.0078 38.5391 18.9609L56.0391 36.4609C57.0156 37.4375 57.5 38.7188 57.5 40C57.5 41.2812 57.0156 42.5625 56.0312 43.5312Z"
                  fill="#32E7E7"
                />
              </svg>
            </button>
          )}
        </motion.div>
      ) : (
        !isLoading && (
          <div className="game-over">
            <dir>Game Over</dir>
            <div>
              Score : {score} / {questionIndex + 1}
            </div>
            <div>
              <Link to="/">
                <svg
                  className="house"
                  width="54"
                  height="48"
                  viewBox="0 0 54 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M53.9835 23.9531C53.9835 25.6406 52.5772 26.9625 50.9834 26.9625H47.9832L48.0489 41.9719C48.0489 42.2344 48.0301 42.4781 48.002 42.7312V44.25C48.002 46.3219 46.3238 48 44.2518 48H42.7518C42.6486 48 42.5455 47.9156 42.4424 47.9906C42.3111 47.9156 42.1799 48 42.0486 48H36.7515C34.6796 48 33.0014 46.3219 33.0014 44.25V36C33.0014 34.3406 31.6607 33 30.0012 33H24.001C22.3416 33 21.0009 34.3406 21.0009 36V44.25C21.0009 46.3219 19.3227 48 17.2507 48H12.0099C11.8692 48 11.7286 47.9906 11.588 47.9812C11.4755 47.9906 11.363 48 11.2505 48H9.75041C7.67938 48 6.00025 46.3219 6.00025 44.25V33.75C6.00025 33.6656 6.00306 33.5719 6.00869 33.4875V26.9625H3.00481C1.31443 26.9625 0 25.6406 0 23.9531C0 23.1094 0.281637 22.3594 0.938477 21.7031L24.976 0.7515C25.6323 0.0939375 26.3823 0 27.0386 0C27.6949 0 28.4449 0.187875 29.0168 0.657562L52.9522 21.7031C53.7022 22.3594 54.0866 23.1094 53.9835 23.9531Z"
                    fill="#32E7E7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default Game;
