import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

const FeaturedPostCard = ({
  image,
  date,
  readTime,
  title,
  excerpt,
  author,
  authorImg,
  tags = [],
  featured = false,
}) => {
  return (
    <article className="bg-card-light dark:bg-card-dark dark:shadow-shadow-dark shadow overflow-hidden flex flex-col">
      {/* Image with featured badge */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-[#15A5FF70] text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5 py-4 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <FiCalendar className="shrink-0" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="shrink-0" /> {readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-secondary text-text-light-primary dark:text-text-dark-primary leading-snug mb-2 line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
          {title}
        </h2>

        {/* Excerpt (truncate on small screens, full on large) */}
        <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-4 line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
          {excerpt}
        </p>

        {/* Author + Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
          {/* Author */}
          <div className="flex items-center gap-3 text-sm">
            {authorImg ? (
              <img
                src={authorImg}
                alt={author}
                className="w-8 h-8 rounded-full border border-border-light dark:border-border-dark object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-300 border border-gray-300"></div>
            )}
            <span className="text-text-light dark:text-text-dark font-medium">{author}</span>
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
    </article>
  );
};

export default FeaturedPostCard;
