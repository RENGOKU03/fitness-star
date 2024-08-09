import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between h-16 items-center p-8 lg:px-20 lg:pl-32 text-2xl ">
        <img src="/./Logo.png" alt="logo" className="h-12" />
        <div className="flex gap-5 underline decoration-red-700 decoration-2 underline-offset-4">
          <button>
            <Link to={"/"} href="#home">
              <span>Home</span>
            </Link>
          </button>
          <button>
            <a href="#excercise">
              <span>Exercises</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
