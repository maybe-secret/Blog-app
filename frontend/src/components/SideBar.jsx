import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { postsData } from "../assets/data";

// Sidebar Wrapper
const SideBar = () => {
  return (
    <aside className="space-y-6">
      {/* Profile Card */}
      <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-md border border-[#e9e1cf] dark:border-dark-primary p-6 text-center hover:shadow-lg dark:shadow-shadow-dark transition-all duration-300">
        <img
          src="https://plus.unsplash.com/premium_photo-1669835163484-a7adc48849a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // or post.image depending on what you want
          alt="name"
          className="w-20 h-20 mx-auto rounded-full object-cover shadow-md border border-border-light dark:border-border-dark"
        />
        <h3 className="mt-3 font-semibold text-lg text-text-light-primary dark:text-text-dark-primary">
          Raj Sinha
        </h3>
        <p className="text-xs text-text-light dark:text-text-dark mb-3">
          Writer
        </p>
        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-3">
          I write to capture moments that often go unnoticed—the smell of
          streets, the sound of city life, and the beauty of everyday
          interactions.
        </p>
        <div className="flex justify-center gap-5 my-3 text-gray-600 text-lg">
          <FiFacebook className="hover:text-blue-600 cursor-pointer transition-colors" />
          <FiTwitter className="hover:text-sky-400 cursor-pointer transition-colors" />
          <FiInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
        </div>
        <button className="mt-2 px-5 py-2 rounded-full border dark:border-1 border-[#e9e1cf] dark:border-btn-dark-primary dark:hover:bg-btn-dark-primary/40  dark:text-text-dark-primary text-sm hover:bg-[#f5efe0] transition-colors">
          View Profile
        </button>
      </div>

      {/* Featured Posts */}
      <Card title="Featured Posts">
        <ul className="space-y-4">
          {postsData
            .filter((post) => post.featured) // only featured
            .slice(2) // skip first two
            .map((post, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-6 h-6 rounded-full flex-shrink-0 shadow-sm object-cover"
                />
                <a className="text-text-light-primary dark:text-text-dark-secondary leading-tight group-hover:underline transition-colors">
                  {post.title}
                </a>
              </li>
            ))}
        </ul>
      </Card>

      {/* Tags */}
      <Card title="Tags">
        <div className="flex flex-wrap gap-2">
          {[
            "food",
            "streetfood",
            "teaTalks",
            "chai",
            "stories",
            "indianStreets",
            "weekend",
            "wander",
            "hiddenGems",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full border border-[#e9e1cf] hover:bg-[#f5efe0] dark:border-btn-dark-primary dark:hover:bg-btn-dark-primary/40 dark:text-text-dark-secondary hover:shadow-sm transition cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Card>

      {/* Featuring Section */}
      <Card title="Featuring">
        <ul className="space-y-3">
          {Array(5)
            .fill("Abhi Chatterjee")
            .map((name, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 shadow-sm"
                  style={{ background: getGradient(i) }}
                />
                <span className="text-text-light-primary dark:text-text-dark-secondary">
                  {name}
                </span>
              </li>
            ))}
        </ul>
      </Card>
    </aside>
  );
};

// Reusable card component
const Card = ({ title, children }) => (
  <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-md border border-[#e9e1cf] dark:border-dark-primary p-5 hover:shadow-lg dark:shadow-shadow-dark transition-all">
    <h4 className="font-semibold text-sm text-text-light-primary dark:text-text-dark-primary mb-3 border-b border-gray-200 dark:border-[#917833] pb-2">
      {title}
    </h4>
    {children}
  </div>
);

// Helper function for gradient colors
const getGradient = (index) => {
  const gradients = [
    "linear-gradient(135deg, #F87171, #FBBF24)", // red-yellow
    "linear-gradient(135deg, #60A5FA, #3B82F6)", // blue
    "linear-gradient(135deg, #34D399, #10B981)", // green
    "linear-gradient(135deg, #FBBF24, #F59E0B)", // yellow
    "linear-gradient(135deg, #A78BFA, #8B5CF6)", // purple
  ];
  return gradients[index % gradients.length];
};

export default SideBar;
