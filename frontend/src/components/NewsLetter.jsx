import React from "react";
import { assets } from "../assets/data";

const NewsLetter = ({darkMode}) => {
  return (
    <div className="w-full flex justify-center px-4  ">
      <div className="relative bg-light-secondary dark:bg-dark-secondary shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-shadow-dark rounded-md max-w-[1000px] w-full p-6 sm:p-8 md:p-10 text-center overflow-hidden lg:py-15 transition-all duration-300">
        {/* --- Decorative Paper Planes (absolute) --- */}
        <img
          src={darkMode ? assets.planeLeftDark : assets.planeLeftLight}
          alt="plane left"
          className="absolute top-0 left-0 w-10 sm:w-12 md:w-16 lg:w-30"
        />
        <img
          src={darkMode ? assets.planeRightDark : assets.planeRightLight}
          alt="plane right"
          className="absolute bottom-0 right-0 w-10 sm:w-12 md:w-16 lg:w-30"
        />

        {/* --- Text --- */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-6 text-text-light-primary dark:text-text-dark-primary leading-snug">
          To Stay In The Loop With <br className="hidden sm:block" /> My Blog And Newsletter
        </h2>

        {/* --- Input + Button --- */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto w-full">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="w-full border border-gray-300 dark:border-gray-100/50 px-4 py-2 rounded-md focus:outline-none text-sm sm:text-base text-gray-700 dark:text-text-dark-primary"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-btn-light-primary hover:bg-btn-light-secondary dark:bg-btn-dark-primary dark:hover:bg-btn-dark-secondary text-white px-5 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
