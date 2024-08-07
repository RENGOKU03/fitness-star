import React, { useEffect } from "react";
import { excerciseOptions, fetchData } from "./FetchData";

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
          "https://exercisedb.p.rapidapi.com/exercises",
          excerciseOptions
        );
      }
      setExcercise(excerciseData);
    };
    fetchExcerciseData();
  }, [bodyPart]);
  if (!excercise.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div id="excercise">
      <p className="lg:text-7xl m-10 lg:pl-32 whitespace-nowrap text-3xl">
        {text}
      </p>
      <div className="flex flex-wrap gap-x-32 gap-y-20 justify-center">
        {excercise.map((item, index) => (
          <div key={index} className="border-t-red-700 border-t-2 max-w-96">
            <img src={item.gifUrl} alt="" />
            <div className="mt-10 flex gap-5">
              <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-red-300">
                {item.target}
              </button>
              <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-yellow-300">
                {item.bodyPart}
              </button>
            </div>
            <p className="text-xl font-medium pt-10 pl-2 text-black/80">
              {item.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowComponents;
