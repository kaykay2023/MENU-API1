import React from "react";

const Recipeindex = ({ LetterIndex }) => {
  const Letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  var num = 0;
  return (
    <>
      {Letter.map((item) => {
        return (
          <div className="numBox" key={num++} onClick={() => LetterIndex(item)}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Recipeindex;
