import React from "react";
import { assets } from "../assets/data";

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-2 h-auto md:h-[500px] lg:h-[600px] my-1">
      
      {/* --- left side --- */}
      <div
        className="w-full md:w-[45%] h-64 md:h-full flex justify-center items-center sm:border sm:border-[#A5A29750] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.bridge})` }}
      >
        <img src={assets.main} alt="main" className="h-full object-contain md:h-full" />
      </div>

      {/* --- right side --- */}
      <div
        className="w-[95%] md:w-[55%] h-auto md:h-full flex flex-col gap-4 justify-center px-6 py-8 md:px-10 bg-[#F6F3EA] bg-no-repeat shadow-2xl sm:shadow-2xl md:shadow-none 
                   -mt-6 md:mt-0 mx-auto "
        style={{ backgroundImage: `url(${assets.map2})` }}
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
          I’m Abhygan Sarkar - Welcome to My World. Exploring Places, Tasting
          Cultures, Sharing Stories.
        </h1>

        <p className="text-xs md:text-base lg:text-lg text-gray-700">
          Through this blog, I share my journey across cultures, cuisines, and
          corners of the world — capturing stories, tasting traditions, and
          connecting with people who make every place feel like a part of home.
        </p>

        <button className="w-full md:w-[160px] text-white bg-[#36b0e0] py-2 lg:mt-5 hover:bg-[#2a91b9] transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Hero;
