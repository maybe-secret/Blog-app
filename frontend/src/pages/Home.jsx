import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { assets } from "../assets/data";
import RecentPost from "../components/RecentPost";

const Home = () => {
  return (
    <div className="bg-[#F6F3EA]">
      <Navbar />
      <Hero />
      <div className="relative z-10 md:-mt-20 mt-6">
        <RecentPost />
      </div>
    </div>
  );
};

export default Home;
