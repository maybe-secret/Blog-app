import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { assets } from "../assets/data";
import RecentPost from "../components/RecentPost";
import BlogPage from "../components/BlogPage";
import useLocalStorage from "../components/useLocalStorage";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Home = ({darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className="bg-light-primary dark:bg-dark-primary m-0 p-0 transition-all duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <div className="relative z-10 md:-mt-20 mt-6">
        <RecentPost />
      </div>
      <BlogPage />
      <Newsletter darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <Copyright />
    </div>
  );
};

export default Home;
