import React from "react";
import LoadProducts from "../../Hooks/LoadProducts";
import CardFood from "../CardFood/CardFood";

const Home = () => {
  const [products, setProducts] = LoadProducts();
  const { name, picture, price, rating } = products;

  return (
    <>
      <div className="grid justify-center items-center grid-cols-2">
        <div className="">
          <h2 className="text-orange-500 mb-5 text-5xl">
            Hey are you food lover
          </h2>
          <h2 className="text-orange-300 text-5xl">
            Please Order your favorite foods
          </h2>
          <p className="text-lg text-gray-500 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
            impedit quis nam numquam quaerat distinctio libero at corrupti
            eveniet non iste repellat itaque sed, assumenda officiis, commodi
            ipsum nemo!
          </p>
          <button className="py-3 px-6 rounded bg-indigo-400 mt-5">
            Love With Food
          </button>
        </div>
        <div className="h-3/4 m-auto">
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
      <div className="grid md:grid-cols-3 w-3/4 m-auto">
        {products.map((product) => (
          <CardFood key={product.id} product={product}></CardFood>
        ))}
      </div>
    </>
  );
};

export default Home;
