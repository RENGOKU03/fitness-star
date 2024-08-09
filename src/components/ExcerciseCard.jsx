import React from "react";
import { Link } from "react-router-dom";

const ExcerciseCard = ({ item }) => {
  return (
    <div>
      <Link to={`/excercise/${item.id}`}>
        <div className="border-t-red-700 border-t-2 max-w-96 shadow-lg rounded-b-2xl">
          <img src={item.gifUrl} alt="" />
          <div className="mt-10 flex gap-5 ml-4">
            <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-red-300">
              {item.target}
            </button>
            <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-yellow-300">
              {item.bodyPart}
            </button>
          </div>
          <p className="text-xl font-medium pt-10 pl-2 text-black/80 pb-5">
            {item.name.toUpperCase()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ExcerciseCard;
