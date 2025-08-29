import React from 'react'
import BlogCard from './BlogCard'
import { assets } from '../assets/data'

const RecentPost = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-10 shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-[#3C2E1D] relative bg-light-secondary dark:bg-dark-secondary transition-all duration-300 w-[95%] lg:w-full">

      <img src={assets.book} className='absolute left-0 top-0 w-6 sm:w-8 md:w-30 lg:w-50 h-auto' alt="" />

      <h2 className="text-2xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary">Recent Posts</h2>

      {/* Responsive grid instead of raw flex */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BlogCard
          image={assets.chai}
          date="January 1, 2025"
          readTime="5 mins Read"
          title="Chai, Clay Cups, and Conversations: A Morning in Kolkata."
          excerpt="In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers."
          author="Abhi Chatterjee"
          tags={["KolkataDiaries", "IndianStreetCulture"]}
        />

        <BlogCard
          image={assets.chai}
          date="January 1, 2025"
          readTime="5 mins Read"
          title="Chai, Clay Cups, and Conversations: A Morning in Kolkata."
          excerpt="In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers."
          author="Abhi Chatterjee"
          tags={["KolkataDiaries", "IndianStreetCulture"]}
        />

        <BlogCard
          image={assets.chai}
          date="January 1, 2025"
          readTime="5 mins Read"
          title="Chai, Clay Cups, and Conversations: A Morning in Kolkata."
          excerpt="In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers."
          author="Abhi Chatterjee"
          tags={["KolkataDiaries", "IndianStreetCulture"]}
        />
      </div>

      <div className='w-full flex justify-center items-center mt-5 sm:mt-8 md:m-0'>
        <button className="w-full md:w-[160px] text-white bg-[#36b0e0] dark:bg-btn-dark-primary py-2 lg:mt-5 hover:bg-btn-dark-secondary transition">
          View All
      </button>
      </div>

    </div>
  )
}

export default RecentPost
