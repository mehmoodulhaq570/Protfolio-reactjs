import React from "react";
import ProjectCard from './projects/ProjectCard';

const Projects = () => {
    const isDarkMode = document.body.classList.contains("dark");
  const projects = [
    {
        title: "Dev Portfolio",
        description: (
          <ul className="list-disc pl-5 space-y-0 text-gray-700">
            <li>Developer Portfolio Website made in React</li>
            <li>Fully customizable and dynamic</li>
            <li>Easily change data and images</li>
            <li>Dark Mode Support</li>
          </ul>
        ),
        techStack: ["React", "Portfolio", "JavaScript"],
        githubLink: "https://github.com/mehmoodulhaq570/Protfolio-reactjs.git",
        liveLink: "#",
        image: "/images/react-portfolio.png",
      },
      
    {
      title: "Jarvis Google Assistant",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Voice-activated AI assistant developed in Python.</li>
          <li>Includes voice recognition and password protection.</li>
          <li>Detailed explanations and code documentation.</li>
        </ul>
      ),
      techStack: ["Python", "GUI and Widgets", "Speech Recognition", "Text-to-Speech"],
      githubLink: "https://github.com/mehmoodulhaq570/Jarvis-Google-Assistant-Project.git",
      liveLink: "#",
      image: "/images/jarvis.jpeg",
    },
    {
      title: "AI Language Detector and Translator",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Detects and translates languages like English, French, and Urdu.</li>
          <li>Uses Naive Bayes and diverse datasets.</li>
          <li>Includes model documentation and testing results.</li>
        </ul>
      ),
      techStack: ["Java", "Android", "Alarm Manager"],
      githubLink: "https://github.com/mehmoodulhaq570/AI-Language-Detector-and-Translator.git",
      liveLink: "#",
      image: "/images/translator.jpg",
    },
    {
      title: "Air Quality Monitoring System",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>IoT-based system to analyze pollution levels.</li>
          <li>Measures pollutants with real-time updates.</li>
          <li>Establishes monitoring stations for air quality.</li>
        </ul>
      ),
      techStack: ["Arduino-UNO", "IoT", "MQ-135 Sensor"],
      githubLink: "https://github.com/mehmoodulhaq570/Air-Quality-Monitring-System.git",
      liveLink: null,
      image: "/images/air-quality.jpg",       
    },
    {
      title: "Book Loan Management System",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Manages library data with SQL Server backend.</li>
          <li>Handles authors, categories, and loan statuses.</li>
          <li>Tracks book loans and returns efficiently.</li>
        </ul>
      ),
      techStack: ["SQL", ".NET", "Management System", "C#"],
      githubLink: "https://github.com/mehmoodulhaq570/Book-Loan-Management-System.git",
      liveLink: "#",
      image: "/images/book-loan.png",
    },  
    {
      title: "SpotiStream",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Python tool to download songs from Spotify playlists.</li>
          <li>Supports multiple input methods like CSV and TXT.</li>
          <li>Auto-saves credentials and handles errors.</li>
        </ul>
      ),
      techStack: ["Downloader", "Package", "Music", "Python"],
      githubLink: "https://github.com/mehmoodulhaq570/SpotiStream.git",
      liveLink: null,
      image: "/images/spotistream.jpg",
    },
    {
      title: "DioHunter",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Downloads research papers using DOIs or titles.</li>
          <li>Supports batch downloads via Crossref and Sci-Hub.</li>
          <li>Simplifies research tasks for efficiency.</li>
        </ul>
      ),      
      techStack: ["Python", "Package", "Paper-Downloader", "CLI"],
      githubLink: "https://github.com/mehmoodulhaq570/doi_hunter.git",
      liveLink: null,
      image: "/images/doihunter.png",
    },
    {
      title: "Potato Disease Classification",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Classifies potato diseases using CNNs.</li>
          <li>Achieves 100% accuracy with 6 CNN layers.</li>
          <li>Uses Adam optimizer and softmax activation.</li>
        </ul>
      ),      
      techStack: ["Python", "Deep Learning", "TensorFlow", "Keras"],
      githubLink: "https://github.com/mehmoodulhaq570/Potato-Disease-Classification-using-Deep-Learning.git",
      liveLink: null,
      image: "/images/potato-disease.jpg",
    },
    {
        title: "Banglore Home Price Prediction",
        description: (
            <ul className="list-disc pl-5 space-y-0 text-gray-700">
              <li>Predicts Bangalore home prices using ML models.</li>
              <li>Uses PCA, K-Fold CV, and Grid Search CV.</li>
              <li>Exports the final model in pickle format.</li>
            </ul>
          ), 
        techStack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
        githubLink: "https://github.com/mehmoodulhaq570/Banglore-Home-Price-Prediction-Project.git",
        liveLink: null,
        image: "/images/house-price.jpg",
      },
  ];

  return (
    <div
    className={`min-h-screen flex flex-col justify-start items-center p-8 ${
      isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
    }`}
    style={{ overflow: "hidden" }}
  >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl text-center font-bold mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
