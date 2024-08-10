import React from "react";
import Loader from "./Loader";

const Allvideos = ({ name, exerciseVideo }) => {
  console.log(exerciseVideo);
  if (!exerciseVideo) return <Loader />;
  return (
    <div>
      <p className="text-7xl ">
        Watch <span className="text-red-500">{name}</span> Exercise Videos
      </p>
      <div className="max-w-[1600px] min-h-[400px] overflow-x-auto overflow-y-hidden  m-auto p-10 rounded-3xl ">
        <div className="flex overflow-auto gap-8">
          {exerciseVideo.map((item) => (
            <div
              key={item.video}
              className="min-w-[300px] bg-gray-100 rounded-xl"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="rounded-t-xl"
              />
              <div className="p-2 flex flex-col items-start gap-2">
                <p>{item.video.title}</p>
                <p className="text-[15px]">{item.video.channelName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allvideos;
