import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const roles = ["AI Engineer", "Data Scientist", "AI/ML Researcher"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState(roles[0]);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const finishedTyping = currentText === role;
    const finishedRemoving = currentText.length === 0;
    const delay = finishedTyping ? 1300 : isRemoving ? 55 : 95;

    const timer = window.setTimeout(() => {
      if (finishedTyping && !isRemoving) {
        setIsRemoving(true);
        return;
      }

      if (finishedRemoving && isRemoving) {
        setIsRemoving(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setCurrentText(
        isRemoving
          ? role.slice(0, currentText.length - 1)
          : role.slice(0, currentText.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentText, isRemoving, roleIndex]);

  const socialLinks = [
    { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin, style: "bg-blue-600 hover:bg-blue-500" },
    { label: "GitHub", href: profile.github, icon: FaGithub, style: "bg-gray-700 hover:bg-gray-600" },
    { label: "Google Scholar", href: profile.scholar, icon: FaGraduationCap, style: "bg-blue-500 hover:bg-blue-400" },
    { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope, style: "bg-red-500 hover:bg-red-400" },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 py-10">
      <div className="max-w-4xl mx-auto flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center text-center">
        <div className="mb-5 rounded-full border-2 border-blue-500 shadow-md">
          <img
            src="/images/my-photo.png"
            alt="Mehmood Ul Haq"
            className="h-[180px] w-[180px] rounded-full object-cover object-top"
          />
        </div>

        <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
          AI · Data Science · Engineering
        </p>
        <h1 className="whitespace-nowrap text-2xl sm:text-5xl font-bold leading-tight">
          Engr. {profile.name}
        </h1>
        <p className="mt-3 min-h-9 text-lg sm:text-2xl">
          <span className="font-normal">I&apos;m {roles[roleIndex].startsWith("AI") ? "an" : "a"} </span>
          <span className="font-bold text-blue-500" aria-live="polite">{currentText}</span>
          <span className="ml-1 text-blue-500 animate-pulse" aria-hidden="true">|</span>
        </p>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {profile.positioning}
        </p>

        <div className="mt-6 flex w-full sm:w-auto flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/research"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors"
          >
            View Research
          </Link>
          <a
            href={profile.cvDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500 px-5 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            <FaDownload aria-hidden="true" /> Download CV
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3" aria-label="Professional profiles">
          {socialLinks.map(({ label, href, icon: Icon, style }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className={`${style} inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-white shadow transition-colors`}
            >
              <Icon className="text-xl sm:text-2xl" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
