import React from "react";
import {
  FaJava,
  FaPhp,
  FaJs,
  FaPython,
  FaAndroid,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { SiMysql, SiDocker } from "react-icons/si";
import { useLocation } from "react-router-dom"; // For route handling

const Skills = () => {
  const location = useLocation(); // Get current route

  // Check if dark mode is applied to the body
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Conditionally render the header/nav */}
      {location.pathname !== "/skills" && (
        <header className="bg-gray-900 text-white p-4">
          {/* Add navigation bar content if needed */}
        </header>
      )}

      <main className="container mx-auto p-8 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        
        {/* Description Text */}
        <p
          className={`${
            isDarkMode ? "text-white" : "text-gray-600"
          } mb-12`}
        >
          I love to learn new things and experiment with new technologies. These
          are some of the major languages, technologies, tools, and platforms I
          have worked with:
        </p>

        {/* Skills Sections */}
        <div className="flex flex-col items-center space-y-12">
          {/* Languages & Databases */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Languages & Databases</h2>
            <div className="flex justify-center space-x-6 text-5xl">
              <FaJava className="text-[#f89820]" title="Java" />
              <FaPhp className="text-[#777BB4]" title="PHP" />
              <FaJs className="text-[#F0DB4F]" title="JavaScript" />
              <FaPython className="text-[#3776AB]" title="Python" />
              <SiMysql className="text-[#4479A1]" title="MySQL" />
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">
              Frameworks & Technologies
            </h2>
            <div className="flex justify-center space-x-6 text-5xl">
              <FaAndroid className="text-[#3DDC84]" title="Android" />
              <FaReact className="text-[#61DAFB]" title="React" />
              <FaNodeJs className="text-[#68A063]" title="Node.js" />
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Tools & Platforms</h2>
            <div className="flex justify-center space-x-6 text-5xl">
              <FaGit className="text-[#F1502F]" title="Git" />
              <SiDocker className="text-[#2496ED]" title="Docker" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
