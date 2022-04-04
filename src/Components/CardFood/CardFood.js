import React from "react";

const CardFood = ({ product }) => {
  const { name, picture, rating, comment } = product;
  return (
    <div className="border rounded p-2">
      <p className="flex justify-start items-center">
        Rating : <small>{rating} </small> star
      </p>
      <div className="flex mt-5 justify-start items-center">
        <img
          className="rounded-lg w-10 h-10"
          src={picture ? picture : "not available"}
          alt=""
        />
        <h2 className="text-3xl mx-3">{name}</h2>
      </div>

      <p>{comment}</p>

      <div className="mt-5 py-5"></div>
    </div>
  );
};

export default CardFood;
