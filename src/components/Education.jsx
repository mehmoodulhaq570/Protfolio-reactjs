import React from "react";
import { useLocation } from "react-router-dom";

const Education = () => {
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
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Education
        </h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute border-l-4 border-blue-500 dark:border-blue-400 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* First Education Block */}
          <div className="relative mb-14 w-full max-w-md">
            {/* Timeline Circle */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
            {/* Date Label */}
            <div className="absolute bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold left-1/2 transform -translate-x-1/2 -translate-y-6">
              Sept 2021 - June 2025
            </div>
            {/* Content Box */}
            <div className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                BS Computer Engineering
              </h2>
              <a
                href="https://www.uet.edu.pk/home/"
                className="text-blue-600 dark:text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Engineering and Technology, Lahore
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-2">CGPA - 3.4</p>
            </div>
          </div>

          {/* Second Education Block */}
          <div className="relative mb-14 w-full max-w-md">
            {/* Timeline Circle */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
            {/* Date Label */}
            <div className="absolute bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold left-1/2 transform -translate-x-1/2 -translate-y-6">
              May 2014 - July 2021
            </div>
            {/* Content Box */}
            <div className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-lg mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                High School
              </h2>
              <a
                href="https://www.facebook.com/DaanishBoysSchoolChishtian/"
                className="text-blue-600 dark:text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daanish Boys School, Chistian
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Marks - 98%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
