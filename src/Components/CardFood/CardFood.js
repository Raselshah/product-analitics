import React from "react";

const CardFood = ({ product }) => {
  const { name, picture, rating, comment } = product;
  return (
    <>
      <div className="border rounded p-2 text-left">
        <p className="flex justify-start items-center text">
          Rating :
          <span className="text-yellow-500 text-2xl mx-2"> {rating}</span>⭐
        </p>
        <div className="flex mt-5 justify-start items-center">
          <img
            className="rounded-lg w-10 h-10"
            src={picture ? picture : "not available"}
            alt=""
          />
          <h2 className="text-3xl mx-3 text-gray-600">{name}</h2>
        </div>

        <p className="mt-4 text-gray-500">“ {comment} ”</p>

        <div className="mt-5 py-5"></div>
      </div>
    </>
  );
};

export default CardFood;
