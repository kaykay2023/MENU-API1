import React from "react";

const Fooditem = ({ data }) => {
  console.log(data);

  return (
    <>
      {!data
        ? "not found"
        : data.map((item) => {
            return (
              <div className="card">
                <img src={item.strMealThumb} alt="food" />
                <div className="info">
                  <h2>{item.strMeal}</h2>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Fooditem;
