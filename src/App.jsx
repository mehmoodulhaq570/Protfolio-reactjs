import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navigationbar';
import Home from './components/Home';
import { AchievementsSection, CertificationsSection, AboutSection, InterestsSection, ResearchSection, ProjectsSection, SkillsSection, ExperienceSection, EducationSection, ResumeSection, ContactSection } from './components/PortfolioSections';
import { DarkModeProvider } from './context/DarkModeProvider';
import Footer from './components/Footer';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const label = pathname === '/' ? 'AI/ML Research & Engineering' : pathname.slice(1).replace(/^./, c => c.toUpperCase());
    document.title = `Mehmood Ul Haq | ${label}`;
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
const pages = { achievements: AchievementsSection, certifications: CertificationsSection, about: AboutSection, research: ResearchSection, interests: InterestsSection, projects: ProjectsSection, skills: SkillsSection, experience: ExperienceSection, education: EducationSection, resume: ResumeSection, contact: ContactSection };
export default function App() {
  return <DarkModeProvider><BrowserRouter><RouteEffects/><a className="skip-link" href="#main-content">Skip to content</a><NavigationBar/><main id="main-content" className="site-main"><Routes><Route path="/" element={<Home/>}/>{Object.entries(pages).map(([path, Component]) => <Route key={path} path={`/${path}`} element={<div className="standalone-page"><Link to="/" className="text-link back-link">← Back to overview</Link><Component/></div>}/>)}<Route path="*" element={<div className="standalone-page"><h1>Page not found.</h1><Link to="/" className="button primary">Return home</Link></div>}/></Routes></main><Footer/></BrowserRouter></DarkModeProvider>;
}
