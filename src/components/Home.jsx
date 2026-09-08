import React, { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const phrases = useMemo(() => ["Computer Engineer", "Developer", "Researcher"], []);
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
        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Engr. Mehmood Ul Haq</h1>
          <p className="text-xl sm:text-3xl mt-4 min-h-10">
            <span className="font-normal">{staticText}</span>{" "}
            <span className="text-blue-500 font-bold">{currentText}</span>
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/mehmodulhaq570/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-3 sm:p-4"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/mehmoodulhaq570"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-500 text-white rounded-full p-3 sm:p-4"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="mailto:mehmoodulhaq1040@gmail.com"
              className="bg-red-500 hover:bg-red-400 text-white rounded-full p-3 sm:p-4"
            >
              <FaEnvelope size={40} />
            </a>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Portfolio;
