import React from "react";

const HeroDetail = () => {
  const num = [1, 2, 3];
  return (
    <div>
      <div className="flex max-w-[80%] m-auto gap-32 main-div mt-[10%]">
        <img src="./tenor.gif" alt="Excercie-gif" className="h-[500px]" />
        <div>
          <p className="text-7xl font-medium">All Fours Squad Stretch</p>
          <p>
            Excercises Keep you strong. All Fours Squad bup is one of the best
            excercises to target your quads. It will help you inprove your mood
            and gain energy
          </p>
          {num.map((item) => (
            <div className="flex gap-4 items-center text-[15px]">
              <div className="bg-yellow-100 rounded-full overflow-hidden h-16 w-16 flex">
                <img
                  src="./body-part.png"
                  alt="body-part-image"
                  className="h-10 w-10 m-auto"
                />
              </div>

              <p>Upper Legs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
