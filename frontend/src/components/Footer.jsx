import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/data";

export default function Footer( {darkMode}) {
  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary py-12 px-8 mt-15 shadow-[-0px_-4px_10px_rgba(0,0,0,0.25)] dark:shadow-shadow-dark transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          {/* <h2 className="text-xl font-bold text-[#5a4220]">LOGO</h2> */}
          <img src={darkMode ? assets.logoDark : assets.logo2} alt="" />
          <p className="mt-3 text-sm text-text-light dark:text-text-dark-secondary leading-relaxed">
            This blog is a space for thoughts that linger, stories that matter,
            and guest voices that add color to the narrative.
          </p>
          <div className="flex items-center space-x-4 mt-4 text-gray-700 dark:text-text-dark-secondary">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <ul className="space-y-2 text-gray-700 dark:text-text-dark-secondary font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-sm text-gray-700 dark:text-text-dark">
            <span className="font-semibold">Business E-mail:</span> <br />
            <a href="mailto:dobusinss@email.com" className="text-gray-600 dark:text-text-dark-secondary">
              dobusinss@email.com
            </a>
          </p>
          <p className="mt-3 text-sm text-gray-700 dark:text-text-dark">
            <span className="font-semibold">Mobile no:</span> <br />
            <a href="tel:+91894736291" className="text-gray-600 dark:text-text-dark-secondary">
              +91 894736291
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark">
            Never Miss A Blog!
          </h3>
          <p className="text-sm text-gray-600 mb-3 dark:text-text-dark-secondary">
            Subscribe to get latest Blogs
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 dark:border-gray-100/50 rounded px-3 py-2 text-sm focus:outline-none text-gray-700 dark:text-text-dark-primary"
            />
            <button
              type="submit"
              className="bg-btn-light-primary hover:bg-btn-light-secondary dark:bg-btn-dark-primary dark:hover:bg-btn-dark-secondary text-white px-4 py-2 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
