import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigationbar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import SkillsPage from "./components/Skills";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import ProjectsPage from "./components/Projects";
import ResumePage from "./components/Resume";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeProvider"; // Import DarkModeProvider

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
};

// Separate AppContent to access dark mode from context
const AppContent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode and toggle function from context

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-500`} // Global dark mode transition
    >
      {/* Static Navigation Bar */}
      <NavigationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Content Below Navigation */}
      <div className="pt-16">
        <Routes>
          {/* Adding key to Route to force re-render for each page */}
          <Route
            path="/"
            element={<HomePage />}
            key={darkMode ? "dark-home" : "light-home"}
          />
          <Route
            path="/about"
            element={<AboutPage />}
            key={darkMode ? "dark-about" : "light-about"}
          />
          <Route
            path="/skills"
            element={<SkillsPage />}
            key={darkMode ? "dark-skills" : "light-skills"}
          />
          <Route
            path="/education"
            element={<EducationPage />}
            key={darkMode ? "dark-education" : "light-education"}
          />
          <Route
            path="/experience"
            element={<ExperiencePage />}
            key={darkMode ? "dark-experience" : "light-experience"}
          />
          <Route
            path="/projects"
            element={<ProjectsPage />}
            key={darkMode ? "dark-projects" : "light-projects"}
          />
          <Route
            path="/resume"
            element={<ResumePage />}
            key={darkMode ? "dark-resume" : "light-resume"}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
