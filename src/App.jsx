import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigationbar";
import Seo from "./components/Seo";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import SkillsPage from "./components/Skills";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import ProjectsPage from "./components/Projects";
import ResumePage from "./components/Resume";
import { ResearchSection, InterestsSection, CertificationsSection, CommunitySection, AchievementsSection, ContactSection, NotFoundSection } from "./components/PortfolioSections";
import { DarkModeProvider } from "./context/DarkModeProvider";

// The router is supplied by the caller: BrowserRouter in main.jsx, StaticRouter in entry-server.jsx.
const App = () => (
  <DarkModeProvider>
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Seo />
      <NavigationBar />

      {/* Content below the fixed navigation bar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/research" element={<ResearchSection />} />
          <Route path="/interests" element={<InterestsSection />} />
          <Route path="/certifications" element={<CertificationsSection />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/achievements" element={<AchievementsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFoundSection />} />
        </Routes>
      </div>
    </div>
  </DarkModeProvider>
);

export default App;
