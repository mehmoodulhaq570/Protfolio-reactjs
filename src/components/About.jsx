import React from "react";

const About = () => {
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>

      {/* Content */}
      <div className="flex flex-wrap justify-between w-full max-w-6xl px-4 mb-12">
        {/* Left Content */}
        <div className="flex-1 pr-5 text-justify">
          <p className="mb-4 leading-relaxed text-lg">
            I am a computer engineering student with a keen interest in machine learning, deep learning, and coding.
            Currently, I am conducting research in the Artificial Intelligence Lab at the KICS building, UET Lahore.
            My research focuses on global issues, such as smog and energy-related challenges, with my current project
            centered around solar energy forecasting.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            With a strong foundation in both hardware and software, I have experience in building systems like a
            real-time heat and smog detection system integrated with IoT, and I am actively working on projects related
            to AI-driven improvements in energy and environmental systems.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            I have also developed various tools, including DoiHunter, a CLI tool that automates the downloading of
            research papers using DOIs or titles via Sci-Hub. Additionally, I am working on multiple Python-based
            projects, ranging from YouTube song downloaders to fire detection systems using computer vision techniques
            like YOLOv9. My ultimate goal is to contribute to research and development in AI, especially in areas that
            can address real-world environmental challenges.
          </p>
        </div>

        {/* Right Content (Avatar or Image) */}
        <div className="flex-1 flex justify-center items-center mt-5">
          <div className="bg-gray-200 rounded-xl w-72 h-96 flex flex-col items-center justify-end overflow-hidden relative">
            {/* User Image */}
            <img
              src="/images/my-photo.png" // Update this with the path to your image
              alt="My Avatar"
              className="w-full h-full object-cover absolute top-0 left-0 z-10"
            />
            {/* Name Section */}
            <div className="w-full bg-black bg-opacity-60 text-white text-center py-2 font-bold z-20">
              Mehmood Ul Haq
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
