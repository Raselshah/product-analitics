import React from "react";
import { useNavigate } from "react-router-dom";
import LoadProducts from "../../Hooks/LoadProducts";
import CardFood from "../CardFood/CardFood";

const Home = () => {
  const [products] = LoadProducts();

  const navigate = useNavigate();
  const handleReview = () => {
    const path = "/review";
    navigate(path);
  };

  return (
    <>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 w-3/4 m-auto">
        <div className="text-left">
          <h2 className="text-orange-500 mb-5 text-5xl">
            Hey are you food lover
          </h2>
          <h2 className="text-orange-300 text-5xl">
            Please Order your favorite foods
          </h2>
          <p className="text-lg text-gray-500 mt-5">
            While it may not be the most popular dining brand in the country,
            the King is still a top choice for many. Those Whoppers are still as
            tasty as ever, especially if you go for the Impossible Whopper. Want
            to chow down on more juicy hamburgers? Here's where you can get The
            Absolute Best Burger in Every State.
          </p>
          <button className="py-3 px-6 rounded text-white bg-indigo-400 mt-5">
            Love With Food
          </button>
        </div>
        <div className="m-auto mt-10">
          <img
            className="h-[70vh] rounded"
            src="https://images.pexels.com/photos/8104576/pexels-photo-8104576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <h2 className="mt-20 mb-4 text-4xl">
        Customer Review ( {products.length} )
      </h2>
      <div className="grid md:grid-cols-3 mb-5 gap-6 w-3/4 m-auto">
        {products.slice(0, 3).map((product) => (
          <CardFood key={product.id} product={product}></CardFood>
        ))}
      </div>

      <button
        onClick={() => handleReview()}
        className="bg-indigo-400 px-4 py-2 mb-4 rounded text-white text-lg"
      >
        Show more review
      </button>
    </>
  );
};

export default Home;
