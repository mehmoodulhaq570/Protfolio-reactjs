import React from 'react';

const Resume = () => {
  const isDarkMode = document.body.classList.contains("dark");
  const googleDriveLink = "https://drive.google.com/file/d/1Z2bWyoo65ET9V7XQSX0N0tAwy7N-T0YL/view?usp=sharing"; // Updated Google Drive file link

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center mb-12">
          My Resume
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => window.open(googleDriveLink, "_blank")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
