import React from "react";

const About = () => {
  return (
    <div className="h-[80vh] w-3/4 m-auto flex justify-center items-center">
      <div className="border border-emerald-300">
        <h2 className="text-2xl text-green-400 p-4">
          Hello there! <br />
          My name is Rasel and i develop a website
        </h2>
        <p className="mt-10 text-lg p-4 text-gray-400">
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.” – Martin Fowler
        </p>
      </div>
    </div>
  );
};

export default About;
