import React from "react";

const HeroDetail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: "/./body-part.png",
      name: bodyPart,
    },
    {
      icon: "/./target.png",
      name: target,
    },
    {
      icon: "/./equipment.png",
      name: equipment,
    },
  ];
  return (
    <div>
      <div className="flex max-w-[80%] m-auto gap-32 main-div mt-[10%]">
        <img src={gifUrl} alt="Excercie-gif" className="h-[500px]" />
        <div>
          <p className="text-7xl font-medium mb-10">{name}</p>
          <p>
            Excercises Keep you strong. {name} bup is one of the best excercises
            to target your {target}. It will help you improve your <br /> mood
            and gain energy
          </p>
          {extraDetail?.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 mt-10 items-center text-[15px]"
            >
              <div className="bg-yellow-100 rounded-full overflow-hidden h-16 w-16 flex">
                <img
                  src={item.icon}
                  alt="body-part-image"
                  className="h-10 w-10 m-auto"
                />
              </div>

              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
