import React from "react";

const Home = () => {
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

      <h2 className="mt-20 mb-4 text-4xl">Customer Review</h2>
      <div className="grid md:grid-cols-3">
        <div className="card border-2 rounded">
          <h2>head</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus veritatis rerum at quis ex ea quas minus illum
            doloremque fugiat?
          </p>
          <p><small>Rating</small></p>
          <button>Show more review</button>
        </div>
      </div>
    </>
  );
};

export default Home;
