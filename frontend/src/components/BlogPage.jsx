import FeaturedPostCard from "./FeaturedPostCard";
import { assets } from "../assets/data";
import BlogCard from "./BlogCard";
import SideBar from "./SideBar";
import BlogCard2 from "./BlogCard2";

const BlogPage = () => {
  return (
    <div className="bg-light-secondary dark:bg-dark-primary min-h-screen p-6 max-w-[1240px] mx-auto shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-shadow-dark m-15 w-[95%] py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white lg:px-5">Blogs</h2>
      <div className="  grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-5">
        
        
        {/* Left Section (Main Content) */}
        <div className="lg:col-span-2 space-y-6 ">
          {/* Featured Post */}
          <FeaturedPostCard
            featured={true}
            image={assets.bigImage}
            date="January 1, 2025"
            readTime="5 mins Read"
            title="Through the Scent of Spices and Sound of Azaan: My Evening in Hyderabad’s Old City."
            excerpt="As the sun dipped behind Charminar, I wandered through fragrant alleys and echoing prayers, tasting the richness of biryani, the warmth of strangers, and the soul of a city steeped in history."
            author="Abhi Chatterjee"
            authorImg="https://i.pravatar.cc/100?img=12"
            tags={["KolkataDiaries", "IndianStreetCu"]}
          />

          {/* Blog Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <BlogCard2
              image={assets.chai}
              date="January 1, 2025"
              readTime="5 mins Read"
              title="Chai, Clay Cups, and Conversations: A Morning in Kolkata."
              excerpt="In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers."
              author="Abhi Chatterjee"
              tags={["KolkataDiaries", "IndianStreetCulture"]}
            />

            <BlogCard2
              image={assets.chai}
              date="January 1, 2025"
              readTime="5 mins Read"
              title="Chai, Clay Cups, and Conversations: A Morning in Kolkata."
              excerpt="In the quiet hum of a bustling street, I found warmth not just in tea — but in the stories shared between sips, steam, and strangers."
              author="Abhi Chatterjee"
              tags={["KolkataDiaries", "IndianStreetCulture"]}
            />
          </div>

          {/* Another Featured Post */}
          <FeaturedPostCard
            featured={true}
            image={assets.bigImage}
            date="January 1, 2025"
            readTime="5 mins Read"
            title="Through the Scent of Spices and Sound of Azaan: My Evening in Hyderabad’s Old City."
            excerpt="As the sun dipped behind Charminar, I wandered through fragrant alleys and echoing prayers, tasting the richness of biryani, the warmth of strangers, and the soul of a city steeped in history."
            author="Abhi Chatterjee"
            authorImg="https://i.pravatar.cc/100?img=12"
            tags={["KolkataDiaries", "IndianStreetCu"]}
          />
        </div>

        {/* Right Section (Sidebar) */}
        <div className="lg:col-span-1">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
