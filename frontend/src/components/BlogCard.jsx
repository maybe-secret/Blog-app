import React from "react";
import { Calendar, Clock } from "lucide-react";

const BlogCard = ({ image, date, readTime, title, excerpt, author, tags, authorImg}) => {
  return (
    <div className={`w-full overflow-hidden
      flex flex-col md:flex-row lg:flex-col md:gap-4 cursor-pointer`}>
      
      {/* --- Image --- */}
      <div className="w-full md:w-1/3 lg:w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-52 md:h-full lg:h-64 object-cover"
        />
      </div>

      {/* --- Content --- */}
      <div className={`py-2 flex flex-col gap-3 w-full md:w-2/3 lg:w-full md:gap-4`}>
        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-text-light-primary dark:text-text-dark-primary leading-snug">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">{excerpt}</p>

        {/* Author + Tags */}
        <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
          {/* Author DP + Name */}
          <div className="flex items-center gap-2">
            <img
              src={authorImg}
              alt={author}
              className="w-8 h-8 rounded-full object-cover border border-border-light dark:border-border-dark"
            />
            <span className="text-sm font-medium text-text-light dark:text-text-dark">{author}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-[#43AECD] hover:underline cursor-pointer truncate max-w-[100px]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
