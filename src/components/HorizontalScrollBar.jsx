import React from "react";

const HorizontalScrollBar = ({ bodyParts }) => {
  return (
    <div className="max-w-[800px] overflow-x-auto m-auto p-10 rounded-3xl ">
      <div className="flex gap-20">
        {bodyParts.map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[110px]">
            <img src="./gym.png" alt={item} className="h-32" />
            <p className="text-xl whitespace-nowrap">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
