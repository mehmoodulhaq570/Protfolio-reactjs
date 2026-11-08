import { Link } from 'react-router-dom';
import { profile, interests, research, publications, projects, skills, additionalSkills, experience, education, leadership, certifications, achievements } from '../data/portfolio';
import {
  FaAward,
  FaBloggerB,
  FaBolt,
  FaBrain,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDev,
  FaEnvelope,
  FaGithub,
  FaGoogle,
  FaGraduationCap,
  FaKaggle,
  FaLanguage,
  FaLinkedin,
  FaMedium,
  FaPenNib,
  FaRobot,
  FaUsers,
  FaAws,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiMlflow,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiPycharm,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSharp,
  SiTensorflow,
} from 'react-icons/si';

const button = 'inline-flex items-center justify-center bg-accent hover:bg-accent-strong active:translate-y-px text-on-accent px-5 py-2.5 rounded-lg font-semibold transition-colors';
const outlineButton = 'inline-flex items-center justify-center border border-accent text-accent hover:bg-soft active:translate-y-px px-5 py-2.5 rounded-lg font-semibold transition-colors';
// Cards sit on the page with a hairline border and no shadow, in both themes.
const card = 'bg-surface border border-line rounded-lg p-6';
const skillItemIcons = {
  'Python': SiPython,
  'C#': SiSharp,
  'C++': SiCplusplus,
  'JavaScript': SiJavascript,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'SQL': FaDatabase,
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'Scikit-learn': SiScikitlearn,
  'OpenCV': SiOpencv,
  'Forecasting': FaChartLine,
  'SHAP': FaBrain,
  'LLMs': FaRobot,
  'RAG': FaRobot,
  'Prompt engineering': FaPenNib,
  'Hugging Face Transformers': SiHuggingface,
  'LangChain': SiLangchain,
  'SBERT': FaBrain,
  'FAISS': FaDatabase,
  'ChromaDB': FaDatabase,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Plotly': SiPlotly,
  'Feature engineering': FaCode,
  'Model evaluation': FaChartLine,
  'MLflow': SiMlflow,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'React': SiReact,
  'MySQL': SiMysql,
  'Git / GitHub': SiGithub,
  'AWS': FaAws,
  'Visual Studio': FaCode,
  'VS Code': FaCode,
  'PyCharm': SiPycharm,
  'Google Colab': SiGooglecolab,
  'Leadership': FaUsers,
  'Written & verbal communication': FaUsers,
  'Problem-solving': FaBrain,
  'Teamwork': FaUsers,
  'Organization': FaUsers,
  'Attention to detail': FaBrain,
  'Time management': FaChartLine,
  'Urdu': FaLanguage,
  'English': FaLanguage,
};

// Meta line above a card title: the label on the left, the date in its own column on the right.
function MetaLine({ text, date, className = 'font-semibold' }) {
  return <p className={`flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm text-accent ${className}`}><span>{text}</span>{date && <span className="font-normal text-faint">{date}</span>}</p>;
}

export function ExternalLink({ href, children, className = button }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span aria-hidden="true" className="ml-2">↗</span></a>;
}

export function Section({ id, title, subtitle, children, wide = false }) {
  return <main id={id} className="min-h-screen bg-paper text-ink px-4 sm:px-8 py-10">
    <div className={`container ${wide ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
      <header className="text-center mb-12"><h1 className="text-4xl sm:text-5xl font-semibold">{title}</h1>{subtitle && <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto mt-4 leading-relaxed">{subtitle}</p>}</header>
      {children}
    </div>
  </main>;
}

export function InterestsSection() {
  return <Section id="interests" title="Research Interests" subtitle="The areas where I apply data science, machine learning, and engineering.">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{interests.map((item, index) => <article key={item.title} className={`${card} hover:-translate-y-1 transition-transform`}><span className="text-accent font-bold">0{index + 1}</span><h2 className="text-xl font-bold mt-4 mb-3">{item.title}</h2><p className="text-muted leading-relaxed">{item.detail}</p></article>)}</div>
  </Section>;
}

export function ResearchSection() {
  return <Section id="research" title="Research & Publications" subtitle="Applied research in renewable energy, materials engineering, predictive analytics, and intelligent systems.">
    <div className="flex justify-center mb-10"><ExternalLink href={profile.scholar}>Google Scholar</ExternalLink></div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">{research.map(item => <article key={item.title} className={card}><p className="text-accent text-sm font-bold">{item.category}</p><h2 className="text-2xl font-bold mt-3 mb-4">{item.title}</h2><p className="text-muted leading-relaxed">{item.description}</p><a href={`mailto:${profile.email}?subject=${encodeURIComponent(item.title)}`} className={`${outlineButton} mt-6`}>Discuss Research</a></article>)}</div>
    {['Published', 'Under review', 'Work in progress'].map(status => <section key={status} className="mb-12"><div className="flex items-center gap-3 mb-5"><h2 className="text-2xl font-bold">{status}</h2><span className="bg-soft text-accent-strong px-3 py-1 rounded-full text-sm">{publications.filter(p => p.status === status).length}</span></div><div className="space-y-5">{publications.filter(p => p.status === status).map(p => <article key={p.title} className={card}><MetaLine text={p.venue} date={p.year} /><h3 className="text-xl sm:text-2xl font-bold my-3 leading-snug">{p.title}</h3>{p.authors && <p className="text-sm text-faint mb-3">{p.authors.join(', ')}</p>}<p className="text-muted leading-relaxed">{p.description}</p><div className="flex flex-wrap gap-3 mt-5">{p.url && <ExternalLink href={p.url}>View Paper</ExternalLink>}{p.doi && <ExternalLink href={p.doi} className={outlineButton}>View DOI</ExternalLink>}</div></article>)}</div></section>)}
  </Section>;
}

export function CertificationsSection() {
  return <Section id="certifications" title="Certifications & Training" subtitle="Selected professional credentials and continued learning.">
    <div className="flex flex-wrap justify-center gap-3 mb-10"><ExternalLink href={profile.skillsProfile}>Google Skills Profile</ExternalLink><ExternalLink href={profile.credly} className={outlineButton}>Credly Profile</ExternalLink></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{certifications.map(item => <article key={item.title} className={`${card} flex flex-col justify-between`}><div><MetaLine text={item.issuer} date={item.year} /><h2 className="text-xl font-bold mt-3">{item.title}</h2></div><div className="flex flex-wrap gap-3 mt-6">{item.url && <ExternalLink href={item.url}>View Certificate</ExternalLink>}{item.additionalDocuments?.map(doc => <ExternalLink key={doc.url} href={doc.url} className={outlineButton}>{doc.label}</ExternalLink>)}</div></article>)}</div>
  </Section>;
}

export function CommunitySection() {
  return <Section id="community" title="Leadership & Community" subtitle="Technical leadership, student organizations, and community service.">
    <div className="relative max-w-4xl mx-auto"><div className="hidden sm:block absolute left-6 top-0 bottom-0 border-l-4 border-soft" />{leadership.map(item => <article key={item.role + item.organization} className="relative sm:pl-16 mb-7"><span className="hidden sm:block absolute left-3 top-7 w-7 h-7 bg-accent rounded-full border-4 border-paper"/><div className={card}><p className="text-accent text-sm font-semibold">{item.dates}</p><h2 className="text-2xl font-bold mt-2">{item.role}</h2><p className="text-accent font-semibold my-2">{item.organization}</p><p className="text-muted leading-relaxed">{item.description}</p></div></article>)}</div>
  </Section>;
}

export function AchievementsSection() {
  return <Section id="achievements" title="Achievements" subtitle="Recognition for engineering work and applied machine learning.">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">{achievements.map(item => <article key={item.title} className={`${card} text-center flex flex-col`}><div className="w-16 h-16 rounded-full bg-accent text-on-accent text-base font-bold flex items-center justify-center mx-auto mb-5">{item.badge}</div><p className="text-accent font-semibold">{item.organization}</p><h2 className="text-xl sm:text-2xl font-bold my-3">{item.title}</h2><p className="text-muted mx-auto leading-relaxed flex-1">{item.description}</p>{item.url && <div className="mt-6"><ExternalLink href={item.url}>View Award</ExternalLink></div>}</article>)}</div>
  </Section>;
}

export function ContactSection() {
  const contactLinks = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
    { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
    { label: 'GitHub', href: profile.github, icon: FaGithub },
    { label: 'Google Scholar', href: profile.scholar, icon: FaGraduationCap },
    { label: 'Kaggle', href: profile.kaggle, icon: FaKaggle },
    { label: 'Lightning AI', href: profile.lightningAi, icon: FaBolt },
    { label: 'Medium', href: profile.medium, icon: FaMedium },
    { label: 'DEV Community', href: profile.devTo, icon: FaDev },
    { label: 'Google Skills', href: profile.skillsProfile, icon: FaGoogle },
    { label: 'Credly', href: profile.credly, icon: FaAward },
    { label: 'Readers Hub', href: profile.readersHub, icon: FaBloggerB },
  ];

  return <Section id="contact" title="Contact & Collaboration" subtitle="Interested in research or technical collaboration? Let’s connect.">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-xl sm:text-2xl font-bold">Start a conversation</h2>
      <a
        href={`mailto:${profile.email}`}
        className="inline-block mt-3 mb-8 text-sm sm:text-base text-accent hover:underline active:text-accent-strong break-all"
      >
        {profile.email}
      </a>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-9" aria-label="Contact and professional profiles">
        {contactLinks.map(({ label, href, icon: Icon }) => {
          const external = !href.startsWith('mailto:');
          return (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex w-[92px] sm:w-[150px] min-w-0 flex-col items-center text-center text-muted hover:text-accent"
              aria-label={label}
              title={label === 'Email' ? profile.email : label}
            >
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-ink text-paper group-hover:bg-accent group-hover:text-on-accent group-hover:-translate-y-1 group-active:translate-y-0 transition-[color,background-color,transform]">
                <Icon className="text-xl sm:text-2xl" aria-hidden="true" />
              </span>
              <span className="mt-2 max-w-full text-xs sm:text-sm font-semibold leading-tight">{label === 'Email' ? 'Email Me' : label}</span>
            </a>
          );
        })}
      </div>
    </div>
  </Section>;
}

export function AboutSection() {
  return <Section id="about" title="About Me" subtitle="Computer engineer, data scientist, and AI researcher building practical intelligent systems.">
    <div className="-mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
      <div className="lg:col-span-2 space-y-5 text-base text-muted leading-relaxed">
        <p>I am an M.S. Data Science student at UET Lahore and an AI Engineering Officer at NESPAK. I develop intelligent recruitment workflows using NLP-based CV analysis, candidate matching, and enterprise HR integration.</p>
        <p>Previously, I worked as an AI Research Engineer and Data Scientist at the Data Science Lab, KICS, where I built data pipelines, forecasting models, and predictive analytics systems while contributing to research with DFKI Germany.</p>
        <p>My work connects machine learning with energy forecasting, explainable engineering models, computer vision, recommendation systems, and generative AI.</p>
        <div className="flex flex-wrap gap-3 pt-3"><Link to="/experience" className={button}>View Experience</Link><Link to="/research" className={outlineButton}>Explore Research</Link></div>
        <aside className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-r-lg border-l-4 border-accent bg-soft p-4 sm:p-5" aria-labelledby="beyond-engineering-title">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent">
            <FaPenNib className="text-xl" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 id="beyond-engineering-title" className="text-lg font-bold text-ink">Poetry & Creative Writing</h2>
            <p className="text-sm text-muted mt-1 leading-relaxed">I publish poems and articles through Readers Hub.</p>
          </div>
          <ExternalLink href={profile.readersHub} className={`${outlineButton} shrink-0 text-sm px-4 py-2`}>Visit Readers Hub</ExternalLink>
        </aside>
      </div>
      <div className={`${card} w-full max-w-[240px] sm:max-w-[280px] mx-auto lg:mx-0 lg:justify-self-end p-3`}><img src="/images/mehmood-ul-haq-600.webp" alt="Mehmood Ul Haq" width={600} height={648} decoding="async" className="w-full aspect-[4/5] object-cover object-top rounded-lg"/><p className="text-center text-sm font-bold mt-3">Mehmood Ul Haq</p></div>
    </div>
  </Section>;
}

export function ProjectsSection() {
  return <Section id="projects" title="Featured Projects" subtitle="Selected work across forecasting, explainable AI, NLP, data tooling, and computer vision.">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">{projects.map(project => <article key={project.title} className={`${card} flex flex-col`}><MetaLine text={project.category} date={project.date} className="font-bold" /><h2 className="text-2xl font-bold my-3">{project.title}</h2><p className="text-muted leading-relaxed flex-1">{project.problem}</p><p className="text-sm text-faint mt-4 leading-relaxed">{project.result}</p><div className="flex flex-wrap gap-2 mt-5">{project.technologies.map(tech => <span key={tech} className="border border-line text-muted text-xs px-3 py-1 rounded-full">{tech}</span>)}</div>{project.github && <div className="mt-6"><ExternalLink href={project.github}>View on GitHub</ExternalLink></div>}</article>)}</div>
  </Section>;
}

export function SkillsSection() {
  return <Section id="skills" title="Technical Skills" subtitle="I enjoy learning new technologies and applying them across research, data science, and software engineering." wide>
    <div className="-mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12">{skills.map(group =>
      <section key={group.title} aria-labelledby={`skill-${group.title.replace(/\W+/g, '-').toLowerCase()}`}>
        <h2 id={`skill-${group.title.replace(/\W+/g, '-').toLowerCase()}`} className="text-xl sm:text-2xl font-bold mb-7 text-center">{group.title}</h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
          {group.items.map(item => {
            const ItemIcon = skillItemIcons[item] || FaCode;
            return <div key={item} className="flex w-[82px] sm:w-[76px] flex-col items-center text-center">
              <ItemIcon className="text-muted text-4xl" aria-hidden="true" />
              <span className="mt-2.5 text-xs sm:text-sm leading-tight text-muted">{item}</span>
            </div>;
          })}
        </div>
      </section>
    )}</div>
    <section className="mt-14 border-t border-line pt-10" aria-labelledby="additional-expertise-title">
      <h2 id="additional-expertise-title" className="text-2xl sm:text-3xl font-bold text-center mb-8">Additional Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {additionalSkills.map(group => <div key={group.title} className="text-center">
          <h3 className="text-lg font-bold text-accent mb-4">{group.title}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {group.items.map(item => <span key={item} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted">{item}</span>)}
          </div>
        </div>)}
      </div>
    </section>
  </Section>;
}

export function ExperienceSection() {
  return <Section id="experience" title="Experience" subtitle="Applied AI research and engineering across academic and enterprise environments.">
    <div className="relative max-w-4xl mx-auto"><div className="hidden sm:block absolute left-6 top-0 bottom-0 border-l-4 border-soft"/>{experience.map(item => <article key={item.role + item.organization} className="relative sm:pl-16 mb-8"><span className="hidden sm:block absolute left-3 top-7 w-7 h-7 bg-accent rounded-full border-4 border-paper"/><div className={card}><span className="inline-block bg-soft text-accent-strong px-4 py-1 rounded-full text-sm font-semibold">{item.dates}</span><h2 className="text-2xl font-bold mt-4">{item.role}</h2><p className="text-accent font-semibold mt-1">{item.organization}</p><ul className="list-disc ml-5 mt-4 space-y-2 text-muted">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>{item.document && <div className="mt-6"><ExternalLink href={item.document.url}>View Experience Letter</ExternalLink></div>}</div></article>)}</div>
  </Section>;
}

export function EducationSection() {
  return <Section id="education" title="Education" subtitle="Academic preparation in computer engineering and data science.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">{education.map(item => <article key={item.degree} className={`${card} text-center`}><span className="inline-block bg-soft text-accent-strong px-4 py-1 rounded-full text-sm font-semibold">{item.dates}</span><h2 className="text-2xl font-bold mt-5">{item.degree}</h2><p className="text-accent font-semibold mt-3">{item.institution}</p><p className="text-muted mt-3">{item.detail}</p></article>)}</div>
  </Section>;
}

export function NotFoundSection() {
  return <Section id="not-found" title="Page not found" subtitle="The page you’re looking for doesn’t exist or has moved.">
    <div className="flex flex-wrap justify-center gap-3"><Link to="/" className={button}>Go to homepage</Link><Link to="/research" className={outlineButton}>View research</Link></div>
  </Section>;
}

export function ResumeSection() {
  return <Section id="resume" title="Curriculum Vitae" subtitle="A concise overview of my education, research, engineering experience, and technical work.">
    <div className={`${card} max-w-3xl mx-auto text-center`}><h2 className="text-2xl font-bold mb-4">Mehmood Ul Haq: Professional CV</h2><p className="text-muted mb-7">View the CV in your browser or download a copy.</p><div className="flex flex-wrap justify-center gap-3"><ExternalLink href={profile.cv}>View CV</ExternalLink><ExternalLink href={profile.cvDownload} className={outlineButton}>Download CV</ExternalLink></div></div>
  </Section>;
}
