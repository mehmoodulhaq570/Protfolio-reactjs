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
    { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
    { label: "GitHub", href: profile.github, icon: FaGithub },
    { label: "Google Scholar", href: profile.scholar, icon: FaGraduationCap },
    { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-paper text-ink px-4 sm:px-8 py-10">
      <div className="max-w-4xl mx-auto flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center text-center">
        <div className="mb-5 rounded-full border-2 border-accent p-1">
          <img
            src="/images/mehmood-ul-haq-360.webp"
            alt="Mehmood Ul Haq"
            width={180}
            height={180}
            fetchPriority="high"
            decoding="async"
            className="h-[180px] w-[180px] rounded-full object-cover object-top"
          />
        </div>

        <h1 className="whitespace-nowrap text-2xl sm:text-5xl font-semibold leading-tight">
          Engr. {profile.name}
        </h1>
        {/* The full role list is real text for crawlers and screen readers; the typing effect is decorative. */}
        <p className="sr-only">I&apos;m an AI Engineer, Data Scientist and AI/ML Researcher.</p>
        <p className="mt-3 min-h-9 text-lg sm:text-2xl" aria-hidden="true">
          <span className="font-normal">I&apos;m {roles[roleIndex].startsWith("AI") ? "an" : "a"} </span>
          <span className="font-semibold text-accent">{currentText}</span>
          <span className="ml-1 text-accent motion-safe:animate-pulse">|</span>
        </p>

        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
          {profile.positioning}
        </p>

        <div className="mt-6 flex w-full sm:w-auto flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/research"
            className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-strong active:translate-y-px px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors"
          >
            View Research
          </Link>
          <a
            href={profile.cvDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent px-5 py-2.5 text-sm font-semibold text-accent hover:bg-soft active:translate-y-px transition-colors"
          >
            <FaDownload aria-hidden="true" /> Download CV
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3" aria-label="Professional profiles">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-ink text-paper hover:bg-accent hover:text-on-accent active:translate-y-px transition-colors"
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
