import FeaturedPostCard from "./FeaturedPostCard";
import { assets, postsData } from "../assets/data";
import BlogCard from "./BlogCard";
import SideBar from "./SideBar";
import BlogCard2 from "./BlogCard2";

const BlogPage = () => {
  const featuredPosts = postsData.filter((post) => post.featured);
  const normalPosts = postsData.filter((post) => !post.featured);

  return (
    <div className="bg-light-secondary dark:bg-dark-primary min-h-screen p-6 max-w-[1240px] mx-auto shadow-[0_0_15px_3px_rgba(0,0,0,0.25)] dark:shadow-shadow-dark m-15 w-[95%] py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white lg:px-5">
        Blogs
      </h2>
      <div className="  grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-5">
        {/* Left Section (Main Content) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Render the first Featured Post at the top */}
          {featuredPosts.length > 0 && (
            <FeaturedPostCard
              featured={true}
              image={featuredPosts[0].image}
              date={featuredPosts[0].date}
              readTime={featuredPosts[0].readTime}
              title={featuredPosts[0].title}
              excerpt={featuredPosts[0].excerpt}
              author={featuredPosts[0].author}
              authorImg={featuredPosts[0].authorImg}
              tags={featuredPosts[0].tags}
            />
          )}

          {/* Render the normal Blog Cards in the middle */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6">
            {normalPosts.slice(0, 2).map((post, index) => (
              <BlogCard2
                key={index}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                tags={post.tags}
                authorImg={post.authorImg}
              />
            ))}
          </div>

          {/* Render the second Featured Post at the bottom */}
          {featuredPosts.length > 1 && (
            <FeaturedPostCard
              featured={true}
              image={featuredPosts[1].image}
              date={featuredPosts[1].date}
              readTime={featuredPosts[1].readTime}
              title={featuredPosts[1].title}
              excerpt={featuredPosts[1].excerpt}
              author={featuredPosts[1].author}
              authorImg={featuredPosts[1].authorImg}
              tags={featuredPosts[1].tags}
            />
          )}
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
