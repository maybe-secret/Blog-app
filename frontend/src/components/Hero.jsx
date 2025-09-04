import React from "react";
import { assets } from "../assets/data";
import Button from "./Button";

const Hero = ({darkMode}) => {
  return (
    <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row gap-2 h-auto md:h-[500px] lg:h-[600px] my-1">
      
      {/* --- left side --- */}
      <div
        className="w-full md:w-[45%] h-64 md:h-full flex justify-center items-center sm:border sm:border-[#A5A29750] bg-cover bg-center"
        style={{ backgroundImage: `url(${darkMode ? assets.bridgeDark : assets.bridge})` }}
      >
        <img src={assets.main} alt="main" className="h-full object-contain md:h-full" />
      </div>

      {/* --- right side --- */}
      <div
        className="w-[95%] md:w-[55%] h-auto md:h-full flex flex-col gap-4 justify-center px-6 py-8 md:px-10 bg-light-primary dark:bg-dark-primary bg-no-repeat shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-lg md:dark:shadow-none dark:shadow-[#3C2E1D] sm:shadow-2xl md:shadow-none 
                   -mt-6 md:mt-0 mx-auto transition-all duration-300"
        style={{ backgroundImage: `url(${assets.map2})` }}
      >
        <h1 className="text-xl text-text-light-primary md:text-2xl dark:text-text-dark-primary lg:text-3xl font-semibold leading-snug">
          I’m Soumyajit Chakraborty - Welcome to My World. Exploring Places, Tasting
          Cultures, Sharing Stories.
        </h1>

        <p className="text-xs md:text-base lg:text-lg dark:text-text-dark-secondary text-text-light-secondary">
          Through this blog, I share my journey across cultures, cuisines, and
          corners of the world — capturing stories, tasting traditions, and
          connecting with people who make every place feel like a part of home.
        </p>

        <Button value={"Subscribe"} />
      </div>
    </div>
  );
};

export default Hero;
