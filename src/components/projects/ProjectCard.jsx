import React from "react";

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col">
    <img src={image} 
    alt={title} 
    className="rounded-lg mb-4 h-40 object-cover" />
    <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4 flex justify-between items-center">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        GitHub
      </a>
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Live
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
