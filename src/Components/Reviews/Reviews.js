import React from "react";
import LoadProducts from "../../Hooks/LoadProducts";
import CardFood from "../CardFood/CardFood";

const Reviews = () => {
  const [products] = LoadProducts();
  return (
    <div className="grid md:grid-cols-3 mt-10 mb-5 gap-6 w-3/4 m-auto">
      {products.map((product) => (
        <CardFood key={product.id} product={product}></CardFood>
      ))}
    </div>
  );
};

export default Reviews;
