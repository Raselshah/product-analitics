import React from "react";

const CardFood = ({product}) => {
    const {name,picture,rating,price} = product;
  return (
    <div className="grid md:grid-cols-3">
      <h2>{name}</h2>
    </div>
  );
};

export default CardFood;
