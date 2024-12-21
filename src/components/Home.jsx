import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

const Portfolio = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const phrases = ["Computer Engineer", "Developer", "Researcher"];
  const staticText = "I'm a";

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isRemoving) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText((prevText) => currentPhrase.slice(0, prevText.length + 1));
        } else {
          setTimeout(() => setIsRemoving(true), 1000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText((prevText) => currentPhrase.slice(0, prevText.length - 1));
        } else {
          setIsRemoving(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentText, isRemoving, currentPhraseIndex, phrases]);

  return (
    <div>
      {/* Main Content */}
      <div className="pt-0">
        <main className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-5xl font-bold">Engr. Mehmood Ul Haq</h1>
          <p className="text-3xl mt-4">
            <span className="font-normal">{staticText}</span>{" "}
            <span className="text-blue-500 font-bold">{currentText}</span>
          </p>
          <div className="flex mt-8 space-x-6">
            <a
              href="https://www.linkedin.com/in/mehmodulhaq570/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-4"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/mehmoodulhaq570"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-500 text-white rounded-full p-4"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="mailto:mehmoodulhaq1040@gmail.com"
              className="bg-red-500 hover:bg-red-400 text-white rounded-full p-4"
            >
              <FaEnvelope size={40} />
            </a>
          </div>
        </main>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/skills" element={<div>Skills Page</div>} />
          <Route path="/education" element={<div>Education Page</div>} />
          <Route path="/experience" element={<div>Experience Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/resume" element={<div>Resume Page</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Portfolio;
