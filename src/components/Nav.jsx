import React from "react";
import NavBar from "./NavBar";

const Nav = () => {
  return (
    <div className="lg:h-screen h-[700px] font-semibold relative overflow-hidden">
      <div className="flex">
        <div className="lg:w-1/2">
          <NavBar />
          <div className="lg:p-10 px-10 py-10 lg:mt-32 flex flex-col gap-10 lg:pl-32">
            <p className="text-red-700 text-2xl">Fitness Club</p>
            <p className=" text-5xl">
              Sweat, Smile <br /> and Repeat
            </p>
            <p className="text-xl font-normal">
              Check out the most effective excercises
            </p>
            <button className="bg-red-700 text-white p-3 text-xl whitespace-nowrap rounded-md lg:w-60">
              EXPLORE EXCERCISES
            </button>
          </div>
        </div>
        <div className="w-1/2 z-10 hidden lg:block">
          <img src="./banner.png" alt="banner-image" className="h-[85%] w-" />
        </div>
        <div className="absolute text-[100px] md:text-[200px] lg:text-[300px] top-[500px] lg:left-28 text-red-700/15 ">
          <h1>Excercises</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
