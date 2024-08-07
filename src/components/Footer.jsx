import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-100 mt-10">
      <div className="p-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-4 text-xl">
          <img src="./Logo.png" alt="logo-image" className="h-12 w-fit" />
          <p>Fitness Star</p>
        </div>
        <p className="text-xl">Made with ❤️ by Chetan Patil</p>
      </div>
    </div>
  );
};

export default Footer;
