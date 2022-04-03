import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-indigo-400">
      <div className="flex justify-around h-20 items-center">
        <h2 className="text-white text-2xl">Food Hut</h2>
        <nav>
          <CustomLink to="/home" className="mx-5">
            Home
          </CustomLink>
          <CustomLink to="/review" className="mx-5">
            Review
          </CustomLink>
          <CustomLink to="/dashboard" className="mx-5">
            Dashboard
          </CustomLink>
          <CustomLink to="/blogs" className="mx-5">
            Blogs
          </CustomLink>
          <CustomLink to="/about" className="mx-5">
            About
          </CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
