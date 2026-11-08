import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeProvider"; // Import the useDarkMode hook

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
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
    { name: "Certifications", path: "/certifications" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  const exploreLinks = [
    { name: "Education", path: "/education" },
    { name: "Achievements", path: "/achievements" },
    { name: "Research Interests", path: "/interests" },
  ];

  return (
    <header className="fixed top-0 w-full z-10 px-4 sm:px-6 py-3 bg-night text-night-ink border-b border-white/10">
      <div className="relative flex justify-between items-center max-w-7xl mx-auto gap-3">
        {/* Navigation Links */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden border border-white/20 rounded px-3 py-2 font-semibold active:bg-white/10" aria-expanded={menuOpen} aria-controls="portfolio-nav">{menuOpen ? "Close" : "Menu"}</button>
        <nav id="portfolio-nav" className={`${menuOpen ? "flex" : "hidden"} absolute xl:static top-full left-0 right-0 mt-3 xl:mt-0 bg-night xl:bg-transparent px-4 xl:px-0 py-3 xl:py-0 border-b border-white/10 xl:border-0 xl:flex flex-col xl:flex-row items-start xl:items-center gap-1 xl:gap-5 text-sm font-semibold`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setMenuOpen(false);
                setExploreOpen(false);
              }}
              className={`${
                location.pathname === link.path
                  ? "border-b-2 border-night-accent"
                  : ""
              } hover:text-night-accent active:text-night-muted transition-colors duration-300 py-2 xl:py-1 w-full xl:w-auto`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative w-full xl:w-auto">
            <button
              type="button"
              onClick={() => setExploreOpen((open) => !open)}
              className={`${
                exploreLinks.some((link) => location.pathname === link.path)
                  ? "border-b-2 border-night-accent"
                  : ""
              } flex items-center justify-between xl:justify-start gap-2 hover:text-night-accent active:text-night-muted transition-colors py-2 xl:py-1 w-full xl:w-auto`}
              aria-expanded={exploreOpen}
              aria-controls="explore-more-menu"
            >
              Explore More
              <span aria-hidden="true" className={`text-xs transition-transform ${exploreOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div
              id="explore-more-menu"
              className={`${exploreOpen ? "flex" : "hidden"} xl:absolute xl:right-0 xl:top-full mt-1 xl:mt-3 min-w-52 flex-col rounded-lg border border-white/10 bg-night p-2`}
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setExploreOpen(false);
                    setMenuOpen(false);
                  }}
                  className={`${location.pathname === link.path ? "bg-white/10 text-night-accent" : "hover:bg-white/5 hover:text-night-accent active:bg-white/10"} rounded-md px-4 py-2.5 whitespace-nowrap transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Day/Night Toggle */}
        <div className="relative flex items-center">
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            // Visual state follows the `dark` class on <html>, so the prerendered toggle never flashes.
            className="relative flex items-center justify-between bg-white/10 ring-1 ring-white/20 rounded-full w-16 h-7 p-1 cursor-pointer active:bg-white/20"
          >
            {/* Circle Button */}
            <div className="w-6 h-6 bg-night-ink rounded-full transition-transform duration-300 translate-x-0 dark:translate-x-8" />

            {/* Sun and Moon Icons */}
            <div className="absolute left-1 flex items-center space-x-2 text-amber-300 opacity-100 transition-opacity duration-300">
              <FaSun size={16} />
            </div>
            <div className="absolute right-1 flex items-center space-x-2 text-night-accent opacity-100 transition-opacity duration-300">
              <FaMoon size={16} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
