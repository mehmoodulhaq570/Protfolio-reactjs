import React from "react";
import ProjectCard from './projects/ProjectCard';
import { useLocation } from "react-router-dom"; 

const Projects = () => {
    const location = useLocation(); // Get current route
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
        image: "https://via.placeholder.com/150", // Replace with your image URL
      },
      
    {
      title: "Jarvis Google Assistant",
      description:
        "A Cab Sharing web app made using Django for VIT Students. Added user authentication and password reset using SendGrid.",
      techStack: ["Python", "GUI and Widgets", "Speech Recognition", "Text-to-Speech"],
      githubLink: "https://github.com/mehmoodulhaq570/Jarvis-Google-Assistant-Project.git",
      liveLink: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "AI Language Detector and Translator",
      description:
        "An Android App that automatically silences your phone during class hours, designed for VITians.",
      techStack: ["Java", "Android", "Alarm Manager"],
      githubLink: "https://github.com/mehmoodulhaq570/AI-Language-Detector-and-Translator.git",
      liveLink: "https://private-user-images.githubusercontent.com/96229333/306727341-128d68d9-1ae0-4b22-bd7d-056235406f27.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ3ODMxMDgsIm5iZiI6MTczNDc4MjgwOCwicGF0aCI6Ii85NjIyOTMzMy8zMDY3MjczNDEtMTI4ZDY4ZDktMWFlMC00YjIyLWJkN2QtMDU2MjM1NDA2ZjI3Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjIxVDEyMDY0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJmMWMxNDlmYjAzNDMzMjA4OWY1MjdiMGZmNzVjYzc1Y2RhZjBiMjM5YTM5NTk4OThkMTFkNjMxNzk0ZWEwMGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.TI7WuwrkEZfv5N7PmZIqZmk8FbsRSg1tj3mPkpNEUYM",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Air Quality Monitoring System",
      description:
        "An Android App that allows users to send texts in real-time. End-to-End encryption using RSA Algorithm.",
      techStack: ["Arduino-UNO", "IoT", "FirAebase", "RSA"],
      githubLink: "https://github.com/mehmoodulhaq570/Air-Quality-Monitring-System.git",
      liveLink: null,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Book Loan Management System",
      description:
        "An Android App that loads data from mock API and shows in both LinearLayout and GridLayout RecyclerView.",
      techStack: ["Kotlin", "Android", "MVVM"],
      githubLink: "https://github.com/mehmoodulhaq570/Book-Loan-Management-System.git",
      liveLink: "https://private-user-images.githubusercontent.com/96229333/293987595-64264b4d-b074-4bca-99f6-97becf5b2602.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ3ODM1MzIsIm5iZiI6MTczNDc4MzIzMiwicGF0aCI6Ii85NjIyOTMzMy8yOTM5ODc1OTUtNjQyNjRiNGQtYjA3NC00YmNhLTk5ZjYtOTdiZWNmNWIyNjAyLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjIxVDEyMTM1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThjYzZlNzY1NjI5YjdkOTBlMzMyMzJiOTQ5NWE0MTg5Nzc2ZWFhNmQyYzFmNmNlOWIzYjVjMzNmZWI2YjdjZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-11iTG9CTsVyH3rdHPdkZu7ITFqPf3YMoggmZJKUgFQ",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Feed List App",
      description:
        "An Android App that loads list of feeds from a paginated API and shows in a RecyclerView.",
      techStack: ["Kotlin", "Android", "MVVM", "Paging 3"],
      githubLink: "#",
      liveLink: null,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Task Tracker",
      description: "A simple Task Tracker web app made using Angular 12.",
      techStack: ["Angular", "Web"],
      githubLink: "#",
      liveLink: null,
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Image Encryption/Decryption",
      description:
        "A Web App for Image Encryption and Decryption made in Django.",
      techStack: ["Python", "Django"],
      githubLink: "#",
      liveLink: null,
      image: "https://via.placeholder.com/150",
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
