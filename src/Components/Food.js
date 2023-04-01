import React from "react";
import Fooditem from "./Fooditem";
import Recipeindex from "./Recipeindex";
import { useState } from "react";
import { useEffect } from "react";

const Food = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (Letter) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`);
  };
  const searchRecipe = (evt) => {
    if (evt.key == "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>You want it. We get it.</h1>
          <h4>
            Food, African dishes, italian recipes, and more available just for
            you.
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
            placeholder="Enter food"
          />
        </div>
        <div className="container">
          {show ? <Fooditem data={item} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <Recipeindex LetterIndex={(Letter) => setIndex(Letter)} />
        </div>
      </div>
    </>
  );
};

export default Food;
