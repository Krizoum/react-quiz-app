import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categorys = ({
  setSelectedCategory,
  setDifficulty,
  setNumberOfQuestion,
  selectedCategory,
  difficulty,
  numberOfQuestion,
  setSeted,
}) => {
  const [categorys] = useState([
    {
      id: 0,
      name: "All",
    },
    {
      id: 9,
      name: "General Knowledge",
    },
    {
      id: 10,
      name: "Entertainment: Books",
    },
    {
      id: 11,
      name: "Entertainment: Film",
    },
    {
      id: 12,
      name: "Entertainment: Music",
    },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
    },
    {
      id: 14,
      name: "Entertainment: Television",
    },
    {
      id: 15,
      name: "Entertainment: Video Games",
    },
    {
      id: 16,
      name: "Entertainment: Board Games",
    },
    {
      id: 17,
      name: "Science & Nature",
    },
    {
      id: 18,
      name: "Science: Computers",
    },
    {
      id: 19,
      name: "Science: Mathematics",
    },
    {
      id: 20,
      name: "Mythology",
    },
    {
      id: 21,
      name: "Sports",
    },
    {
      id: 22,
      name: "Geography",
    },
    {
      id: 23,
      name: "History",
    },
    {
      id: 24,
      name: "Politics",
    },
    {
      id: 25,
      name: "Art",
    },
    {
      id: 26,
      name: "Celebrities",
    },
    {
      id: 27,
      name: "Animals",
    },
    {
      id: 28,
      name: "Vehicles",
    },
    {
      id: 29,
      name: "Entertainment: Comics",
    },
    {
      id: 30,
      name: "Science: Gadgets",
    },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
    },
  ]);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
    >
      <h1 className="heading-one">Welcom to simpel quiz app </h1>
      <form className="categorys">
        <label>category</label>
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          value={selectedCategory ? selectedCategory : ""}
        >
          {categorys.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>difficulty</label>
        <select
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          value={difficulty ? difficulty : ""}
        >
          <option value="0">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label>Number of question</label>
        <input
          type="number"
          onChange={(e) => {
            e.target.value <= 50
              ? setNumberOfQuestion(e.target.value)
              : setNumberOfQuestion(50);
          }}
          placeholder="from 2 to 50"
          required="required"
          min="2"
          max="50"
          value={numberOfQuestion}
        />
        <Link to="/game" onClick={setSeted(true)}>
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
        </Link>
      </form>
    </motion.div>
  );
};

export default Categorys;
