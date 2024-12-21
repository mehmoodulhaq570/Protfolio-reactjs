import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeProvider"; // Import the useDarkMode hook

const NavigationBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function from context
  const location = useLocation();

  // Ensure the correct theme is applied on load (may be handled by context now)
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode); // Apply dark mode class to the body
  }, [darkMode]);

  // Navigation links
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <header className="fixed top-0 w-full z-10 px-6 py-4 bg-black text-white shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "border-b-2 border-blue-500"
                  : ""
              } hover:text-blue-500 transition-all duration-300 pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Day/Night Toggle */}
        <div className="relative flex items-center">
          <button
            onClick={toggleDarkMode}
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
