import React from "react";
import LoadProducts from "../../Hooks/LoadProducts";
import CardFood from "../CardFood/CardFood";

const Reviews = () => {
  const [products] = LoadProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-5 gap-6 w-3/4 m-auto">
      {products.map((product) => (
        <CardFood key={product.id} product={product}></CardFood>
      ))}
    </div>
  );
};

export default Reviews;
