import React from 'react'
import BlogCard from './BlogCard'
import { assets, postsData } from '../assets/data'
import Button from './Button'

const RecentPost = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-10 shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-[#3C2E1D] relative bg-light-secondary dark:bg-dark-secondary transition-all duration-300 w-[95%] lg:w-full">

      <img src={assets.book} className='absolute left-0 top-0 w-6 sm:w-8 md:w-30 lg:w-50 h-auto' alt="" />

      <h2 className="text-2xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary">Recent Posts</h2>

      {/* Responsive grid instead of raw flex */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
          postsData
            .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sort by date in descending order
            .slice(0, 3)  // Get the top 3 most recent posts
            .map((post, index) => (
              <BlogCard
                key={index}  // Ideally use a unique identifier like post.id, if available
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                tags={post.tags}
                authorImg={post.authorImg}
              />
            ))
        }
      </div>

      <div className='w-full flex justify-center items-center mt-5 sm:mt-8 md:m-0'>
        <Button value={"View All"} />
      </div>

    </div>
  )
}

export default RecentPost
