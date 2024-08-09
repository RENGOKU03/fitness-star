import React from "react";
import ShowComponents from "./ShowComponents";

const HorizontalScrollBar = ({ data, setBodyPart, bodyPart, bodyParts }) => {
  let bg = "";
  return (
    <div className="max-w-[800px] overflow-x-auto m-auto p-10 rounded-3xl ">
      <div className="flex gap-20">
        {data.map((item, index) => (
          <div key={index}>
            {bodyParts ? (
              <div
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                onClick={() => {
                  bodyPart === item ? (bg = "red") : (bg = "green");
                  setBodyPart(item);
                  console.log(item);
                }}
                className={`bg-${bg} cursor-pointer flex flex-col items-center min-w-[110px]`}
              >
                <img src="./gym.png" alt={item} className="h-32" />
                <p className="text-xl whitespace-nowrap">{item}</p>
              </div>
            ) : (
              <ShowComponents excercise={item} bodyPart={bodyPart} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
