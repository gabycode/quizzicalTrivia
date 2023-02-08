import { useEffect, useState } from "react";
import "./categories.css";

const Categories = ({ chooseCategory }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategory(data.trivia_categories));
  }, []);

  const categoryJSX = category.map((c) => {
    return (
      <option className="option" key={c.id} value={c.id}>
        {c.name}
      </option>
    );
  });

  return (
    <>
      <select
        className="select"
        defaultValue="default"
        onChange={(e) => {
          chooseCategory(e.target.value);
        }}>
        <option value="default">Choose a category</option>
        {categoryJSX}
      </select>
    </>
  );
};

export default Categories;
