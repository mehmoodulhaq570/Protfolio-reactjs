import React from "react";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation(); // Get current route
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-16">Experience</h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute border-l-4 border-blue-500 left-1/2 transform -translate-x-1/2 h-full"></div>

          {/* AI/ML Intern Experience Block */}
          <div className="relative flex items-start mb-12 justify-center">
            {/* Date on Top */}
            <div className="absolute bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center -top-6 left-1/2 transform -translate-x-1/2 shadow-lg">
              Jul 2024 – Oct 2024
            </div>
            {/* Content Box */}
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg mt-8 transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                AI/ML Intern
              </h2>
              <a
                href="https://kics.edu.pk/web/"
                className="text-blue-600 dark:text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSL Lab, KICS
              </a>{" "}
              · Internship
              <ul className="list-disc ml-6 mt-2 text-gray-600 dark:text-gray-400">
                <li>Hands-on experience with ML and DL concepts.</li>
                <li>Analyzed datasets and applied ML/DL techniques.</li>
                <li>Deployed ML models on AWS.</li>
                <li>Developed problem-solving skills for technical challenges.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
