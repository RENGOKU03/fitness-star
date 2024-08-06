import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";

const Hero = () => {
  return (
    <div className="w-full mt-20 h-[1200px] bg-red-50 pt-20">
      <h1 className="text-7xl text-center ">
        Awsome Excercises You <br /> Should Know
      </h1>
      <div className="w-[70%] h-14 flex m-auto mt-10 gap-3">
        <input
          type="text"
          className=" w-full rounded-lg border-2 px-4 focus:outline-none focus:border-2 focus:border-black/40 text-xl text-black/80 font-medium"
          placeholder="Search Excercises"
        />
        <button className="bg-red-500 px-4 text-2xl rounded-xl text-white">
          Search
        </button>
      </div>
      <div>
        <HorizontalScrollBar />
      </div>
      <div className="max-w-40 flex gap-20 m-auto ">
        <button>
          <img src="./left-arrow.png" alt="" />
        </button>
        <button>
          <img src="./right-arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
