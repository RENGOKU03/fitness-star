import React, { useEffect, useRef, useState } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import ShowComponents from "./ShowComponents";
import Footer from "./Footer";
import { excerciseOptions, fetchData } from "./FetchData";

const Hero = ({ excercise, setExcercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExcerciseData();
  }, []);

  const handleSearch = async () => {
    console.log(search);
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );
      const searchedExcercises = excerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      const showingResults = document.getElementById("excercise");
      showingResults.scrollIntoView({ behavior: "smooth" });
      setSearch("");
      setExcercise(searchedExcercises);
    }
  };
  return (
    <>
      <div id="home" className="w-full lg:mt-20 mt-10  bg-red-50 pt-20">
        <h1 className="lg:text-7xl text-3xl text-center ">
          Awesome Excercises You <br /> Should Know
        </h1>
        <div className="lg:w-[70%] w-10/12 h-20 flex m-auto mt-10 gap-3 flex-col lg:flex-row lg:h-14">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            className=" w-full rounded-lg border-2 px-4 focus:outline-none focus:border-2 focus:border-black/40 text-xl h-10 lg:h-full text-black/80 font-medium"
            placeholder="Search Excercises"
          />
          <button
            className="bg-red-500 px-4 text-2xl rounded-xl text-white w-32 lg:w-auto mx-auto"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <HorizontalScrollBar
            data={bodyParts}
            bodyParts={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
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
      <ShowComponents
        text={"Showing Results"}
        excercise={excercise}
        setExcercise={setExcercise}
        bodyPart={bodyPart}
      />
      <Footer />
    </>
  );
};

export default Hero;
