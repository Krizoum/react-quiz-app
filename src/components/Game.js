/* eslint-disable react-hooks/exhaustive-deps */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Answesrs from "./Answers";

const Game = ({
  selectedCategory,
  difficulty,
  numberOfQuestion,
  seted,
  score,
  setScore,
  questionIndex,
  setQuestionIndex,
}) => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    seted
      ? fetch(
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
          .catch((err) => console.log(err))
      : navigate("/");
  }, []);

  let nextQuestion = () => {
    if (clicked) {
      if (questionIndex > numberOfQuestion - 2) {
        setQuestionIndex(0);
        setData(false);
        navigate("/game-over");
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
  };
  return (
    <motion.div
      className="game"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
    >
      <motion.div>
        {isLoading && <div className="loading">Loading ...</div>}
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 400, x: -200 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
          >
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
              <motion.button
                onClick={nextQuestion}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
              >
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
                    fill="#909090"
                  />
                </svg>
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Game;
