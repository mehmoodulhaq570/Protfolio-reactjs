import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeProvider"; // Import the useDarkMode hook

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function from context
  const location = useLocation();

  // Navigation links
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Research", path: "/research" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <header className="fixed top-0 w-full z-10 px-4 sm:px-6 py-3 bg-black text-white shadow-lg">
      <div className="relative flex justify-between items-center max-w-7xl mx-auto gap-3">
        {/* Navigation Links */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden border border-gray-600 rounded px-3 py-2 font-semibold" aria-expanded={menuOpen} aria-controls="portfolio-nav">{menuOpen ? "Close" : "Menu"}</button>
        <nav id="portfolio-nav" className={`${menuOpen ? "flex" : "hidden"} absolute md:static top-full left-0 right-0 mt-3 md:mt-0 bg-black md:bg-transparent px-4 md:px-0 py-3 md:py-0 shadow-lg md:shadow-none md:flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-5 text-sm font-semibold`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`${
                location.pathname === link.path
                  ? "border-b-2 border-blue-500"
                  : ""
              } hover:text-blue-500 transition-all duration-300 py-2 md:py-1 w-full md:w-auto`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Day/Night Toggle */}
        <div className="relative flex items-center">
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            className={`relative flex items-center justify-between ${
              darkMode
                ? "bg-gradient-to-r from-blue-900 to-gray-700"
                : "bg-gradient-to-r from-yellow-300 to-yellow-500"
            } rounded-full w-16 h-7 p-1 transition-all duration-500 cursor-pointer`} // Adjusted height here
          >
            {/* Circle Button */}
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 transform ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`} // Circle size remains unchanged
            />

            {/* Sun and Moon Icons */}
            <div className="absolute left-1 flex items-center space-x-2 text-yellow-500 opacity-100 transition-opacity duration-300">
              <FaSun size={16} />
            </div>
            <div className="absolute right-1 flex items-center space-x-2 text-blue-500 opacity-100 transition-opacity duration-300">
              <FaMoon size={16} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
