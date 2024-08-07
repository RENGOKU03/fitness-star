import React from "react";

const ShowComponents = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <p className="lg:text-7xl m-10 lg:pl-32 whitespace-nowrap text-3xl">
        Showing Results
      </p>
      <div className="flex flex-wrap gap-x-32 gap-y-20 justify-center">
        {num.map((item) => (
          <div key={item} className="border-t-red-700 border-t-2 max-w-96">
            <img src="./tenor.gif" alt="" />
            <div className="mt-10 flex gap-5">
              <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-red-300">
                Waist
              </button>
              <button className="text-xl py-2 px-3 rounded-3xl min-w-20 bg-yellow-300">
                Leg
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowComponents;
