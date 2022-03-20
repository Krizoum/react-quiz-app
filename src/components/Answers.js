import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Answesrs = ({
  data,
  questionIndex,
  score,
  setScore,
  clicked,
  setClicked,
  wrongAnswer,
  setWrongAnswer,
}) => {
  const [options, setOptions] = useState();
  // const [wrongAnswer, setWrongAnswer] = useState(false);

  useEffect(() => {
    setClicked(false);
    setWrongAnswer(false);
    setOptions(
      data &&
        shuffle([
          data[questionIndex]?.correct_answer,
          ...data[questionIndex]?.incorrect_answers,
        ])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, questionIndex]);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let oldValue = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = oldValue;
    }
    return array;
  }

  return (
    <>
      {wrongAnswer && (
        <motion.div
          className="correct-answer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="correct-answer-chaild">
            the correct answer is :{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: data[questionIndex].correct_answer,
              }}
            ></span>
          </div>
        </motion.div>
      )}
      <div className="answesrs">
        <div className="score">Score : {score}</div>
        {options &&
          options.map((option) => (
            <div
              className="answer"
              dangerouslySetInnerHTML={{ __html: option }}
              key={option}
              onClick={(e) => {
                if (!clicked) {
                  if (
                    e.target.innerHTML === data[questionIndex].correct_answer
                  ) {
                    e.target.classList.add("correct");
                    setScore(score + 1);
                  } else {
                    e.target.classList.add("incorrect");
                    setWrongAnswer(true);
                  }

                  setClicked(true);
                }
              }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Answesrs;
