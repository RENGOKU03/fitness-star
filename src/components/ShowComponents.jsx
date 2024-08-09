import React, { useEffect } from "react";
import { excerciseOptions, fetchData } from "./FetchData";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import ExcerciseCard from "./ExcerciseCard";

const ShowComponents = ({ text, excercise, setExcercise, bodyPart }) => {
  useEffect(() => {
    const fetchExcerciseData = async () => {
      let excerciseData = [];
      if (bodyPart === "all") {
        excerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          excerciseOptions
        );
      } else {
        excerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          excerciseOptions
        );
      }
      setExcercise(excerciseData);
    };
    fetchExcerciseData();
  }, [bodyPart]);
  if (!excercise.length) {
    return (
      <div className="w-full flex justify-center">
        <Loader />;
      </div>
    );
  }
  return (
    <div id="excercise">
      <p className="lg:text-7xl m-10 lg:pl-32 whitespace-nowrap text-3xl">
        {text}
      </p>
      <div className="flex flex-wrap gap-x-32 gap-y-20 justify-center">
        {excercise.map((item, index) => (
          <ExcerciseCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowComponents;
