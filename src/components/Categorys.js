import { useState } from "react";
import { Link } from "react-router-dom";

const Categorys = ({
  setSelectedCategory,
  setDifficulty,
  setNumberOfQuestion,
  selectedCategory,
  difficulty,
  numberOfQuestion,
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
    <form className="categorys">
      <h1>Welcom to simpel quiz app </h1>
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
          setNumberOfQuestion(e.target.value);
        }}
        placeholder="from 2 to 50"
        required="required"
        min="2"
        max="50"
        value={numberOfQuestion}
      />
      <Link to="/game">Play Game</Link>
    </form>
  );
};

export default Categorys;
