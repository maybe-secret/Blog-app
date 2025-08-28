import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { assets } from "../assets/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      } bg-[#f6f3ea]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* SVG Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={assets.logo2}
              alt="Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[15px]">
            <a href="#" className="font-semibold text-[#8a6f2f]">
              Home
            </a>
            <a href="#" className="text-black hover:text-[#8a6f2f]">
              About
            </a>
            <a href="#" className="text-black hover:text-[#8a6f2f]">
              Travel
            </a>
            <a href="#" className="text-black hover:text-[#8a6f2f]">
              Blogs
            </a>
            <a href="#" className="text-black hover:text-[#8a6f2f]">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center bg-[#f6f3ea] border rounded-lg px-2 py-1 w-40 sm:w-56">
                <FiSearch className="text-gray-500 mr-2 cursor-pointer hover:text-[#8a6f2f] hover:scale-105" onClick={() => {console.log(`Searching for: ${searchValue}`); setSearchValue('')}} />
                <input
                  type="text"
                  placeholder="search..."
                  className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full text-sm"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 text-gray-600 hover:text-black"
                >
                  <FiX size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-black hover:text-[#8a6f2f]"
              >
                <FiSearch size={20} />
              </button>
            )}

            {/* Hide theme, login, and hamburger when search is open */}
            {!searchOpen && (
              <>
                {/* Dark mode toggle */}
                <button onClick={() => setDarkMode(!darkMode)} className="p-1">
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                      <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.414l1.414 1.414M17.95 17.95l1.414 1.414" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-black"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                  )}
                </button>

                {/* Login button (desktop only) */}
                <button className="hidden md:block bg-gradient-to-r from-[#8a6f2f] to-[#4b3a1f] text-white px-4 py-1 rounded-lg">
                  Login
                </button>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none"
                  >
                    {menuOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f6f3ea] px-4 pb-3 space-y-2">
          <a href="#" className="block text-black hover:text-[#8a6f2f]">
            Home
          </a>
          <a href="#" className="block text-black hover:text-[#8a6f2f]">
            About
          </a>
          <a href="#" className="block text-black hover:text-[#8a6f2f]">
            Travel
          </a>
          <a href="#" className="block text-black hover:text-[#8a6f2f]">
            Blogs
          </a>
          <a href="#" className="block text-black hover:text-[#8a6f2f]">
            Contact
          </a>
          <button className="w-full bg-gradient-to-r from-[#8a6f2f] to-[#4b3a1f] text-white px-4 py-1 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
