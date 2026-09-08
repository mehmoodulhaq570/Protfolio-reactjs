import { Link } from 'react-router-dom';
import { profile, interests, research, publications, projects, skills, experience, education, leadership, certifications, achievements } from '../data/portfolio';

export function ExternalLink({ href, children, className = '' }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}
export function Section({ id, eyebrow, title, children, className = '' }) {
  return <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-title`}>{title}</h2></div>{children}</section>;
}
export function AboutSection() {
  return <Section id="about" eyebrow="01 / About" title="Engineering foundations. Research in practice.">
    <div className="about-grid">
      <p className="large-copy">I design, develop, and improve intelligent applications—from research models to enterprise workflows.</p>
      <div className="prose">
        <p>I am a computer engineer and M.S. Data Science student at UET Lahore, currently working as an AI Engineering Officer (GET) at NESPAK. My work spans NLP-based recruitment automation, candidate matching, and HR platform modernization.</p>
        <p>Previously, I worked as an AI Research Engineer / Data Scientist at the Data Science Lab, KICS, UET Lahore, building ML pipelines and forecasting models and contributing to research with DFKI Germany.</p>
        <p>My research connects solar-energy forecasting, explainable materials modelling, and computer vision. I also build recommendation systems, data tools, and generative AI applications, with an emphasis on collaborative problem-solving and practical delivery.</p>
        <Link className="text-link" to="/experience">Explore my experience <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </Section>;
}

export function InterestsSection() {
  return <Section id="interests" eyebrow="02 / Research interests" title="Questions that drive my work."><div className="interest-grid">{interests.map((item, i) => <article key={item.title} className="interest-card"><span className="item-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></Section>;
}
export function ResearchSection() {
  return <Section id="research" eyebrow="03 / Research & publications" title="Predictive models. Engineering questions.">
    <div className="section-intro split"><p>Applied research in renewable energy, materials engineering, and intelligent systems.</p>{profile.scholar && <ExternalLink href={profile.scholar} className="text-link">Google Scholar</ExternalLink>}</div>
    <div className="research-grid">{research.map(item => <article className="research-card" key={item.title}>
      <p className="eyebrow">{item.category}</p><h3>{item.title}</h3><p>{item.description}</p>
      <a className="text-link" href={'mailto:' + profile.email + '?subject=' + encodeURIComponent(item.title)}>Discuss this research <span aria-hidden="true">↗</span></a>
    </article>)}</div>
    {['Published', 'Under review', 'Work in progress'].map(status => {
      const items = publications.filter(p => p.status === status);
      if (!items.length) return null;
      return <div className="publications" key={status}>
        <h3 className="publication-group-title">{status}<span className="publication-count">{items.length}</span></h3>
        {items.map(p => <article className="publication" key={p.title}>
          <p className="eyebrow">{p.status}{p.year && ' · ' + p.year}</p>
          <h3>{p.title}</h3>
          {p.authors && <p className="publication-authors">{p.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{/mehmood ul haq/i.test(author) ? <strong>{author}</strong> : author}</span>)}</p>}
          {p.venue && <p className="publication-venue">{p.venue}</p>}
          <p>{p.description}</p>
          <div className="link-row">{p.url && <ExternalLink href={p.url}>View paper</ExternalLink>}{p.doi && <ExternalLink href={p.doi}>DOI</ExternalLink>}{p.pdf && <ExternalLink href={p.pdf}>PDF</ExternalLink>}</div>
        </article>)}
      </div>;
    })}
  </Section>;
}

export function ProjectsSection() {
  return <Section id="projects" eyebrow="04 / Selected projects" title="From an idea to a working system.">
    <div className="section-intro split"><p>Six projects across explainable ML, energy forecasting, recommendations, data tooling, and embedded vision.</p><ExternalLink href={profile.github} className="text-link">All repositories</ExternalLink></div>
    <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}>
      <div className="project-workflow" aria-label="Project workflow">
        <div className="project-meta"><span>0{index + 1}</span><span>{[project.status, project.date].filter(Boolean).join(' · ')}</span></div>
        <ol>{project.flow.map(step => <li key={step}>{step}</li>)}</ol>
      </div>
      <div className="project-body"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3>
        <dl>{[['Problem', project.problem], ['Approach', project.approach], [project.status === 'In development' ? 'Current work' : 'Outcome', project.result]].map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
        <ul className="tags" aria-label="Technologies">{project.technologies.map(t => <li key={t}>{t}</li>)}</ul>
        {project.github && <ExternalLink href={project.github} className="text-link">View source on GitHub</ExternalLink>}
        {project.demo && <ExternalLink href={project.demo} className="text-link">Live demo</ExternalLink>}
      </div>
    </article>)}</div>
  </Section>;
}

export function SkillsSection() {
  return <Section id="skills" eyebrow="05 / Technical skills" title="A toolkit for research and delivery."><div className="skills-list">{skills.map(group => <div key={group.title} className="skill-row"><h3>{group.title}</h3><ul className="tags">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></Section>;
}
export function ExperienceSection() {
  return <Section id="experience" eyebrow="06 / Experience" title="Learning through applied work."><div className="timeline">{experience.map(item => <article key={item.role + item.organization} className="timeline-item"><p className="eyebrow">{item.dates}</p><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><ul className="contributions">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>{item.document && <ExternalLink href={item.document.url} className="text-link">{item.document.label}</ExternalLink>}</div></article>)}</div></Section>;
}
export function EducationSection() {
  return <Section id="education" eyebrow="07 / Education" title="Built on an engineering foundation.">{education.map(item => <article className="timeline-item" key={item.degree}><p className="eyebrow">{item.dates}</p><div><h3>{item.degree}</h3><p className="organization">{item.institution}</p><p>{item.detail}</p></div></article>)}</Section>;
}
export function CommunitySection() {
  if (!leadership.length) return null;
  return <Section id="community" eyebrow="Community" title="Sharing knowledge. Building together.">{leadership.map(item => <article className="timeline-item" key={item.role + item.organization}><p className="eyebrow">{item.dates}</p><div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.description}</p></div></article>)}</Section>;
}
export function CertificationsSection() {
  if (!certifications.length) return null;
  return <Section id="certifications" eyebrow="Continued learning" title="Certifications & training.">
    <div className="section-intro split"><p>Selected credentials and ongoing professional learning.</p><div className="link-row"><ExternalLink href={profile.skillsProfile} className="text-link">Google Skills profile</ExternalLink><ExternalLink href={profile.credly} className="text-link">Credly profile</ExternalLink></div></div>
    <div className="certification-list">{certifications.map(item => <article className="certification-item" key={item.title}>
      <div><p className="eyebrow">{[item.issuer, item.year].filter(Boolean).join(' · ')}</p><h3>{item.title}</h3></div>
      <div className="link-row">{item.url && <ExternalLink href={item.url}>View credential</ExternalLink>}{item.additionalDocuments?.map(document => <ExternalLink key={document.url} href={document.url}>{document.label}</ExternalLink>)}</div>
    </article>)}</div>
  </Section>;
}
export function AchievementsSection() {
  if (!achievements.length) return null;
  return <Section id="achievements" eyebrow="Recognition" title="Engineering with impact.">
    {achievements.map(item => <article className="achievement-card" key={item.title}>
      <span className="award-mark" aria-hidden="true">01</span><div><p className="eyebrow">{[item.organization, item.year].filter(Boolean).join(' · ')}</p><h3>{item.title}</h3><p>{item.description}</p>{item.url && <ExternalLink href={item.url}>View award</ExternalLink>}</div>
    </article>)}
  </Section>;
}

export function ResumeSection() {
  return <Section id="resume" eyebrow="08 / Curriculum vitae" title="The concise version."><div className="split"><p className="section-intro">Education, technical experience, and project work in one document.</p><div className="button-row"><ExternalLink href={profile.cvDownload} className="button primary">Download CV</ExternalLink><ExternalLink href={profile.cv} className="button secondary">View CV</ExternalLink></div></div></Section>;
}
export function ContactSection() {
  return <Section id="contact" eyebrow="09 / Contact & collaboration" title="Let’s work on a meaningful problem." className="contact-section"><p className="large-copy">Interested in research or technical collaboration? Let’s connect.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><div className="link-row"><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink>{profile.scholar && <ExternalLink href={profile.scholar}>Google Scholar</ExternalLink>}{profile.skillsProfile && <ExternalLink href={profile.skillsProfile}>Google Skills</ExternalLink>}{profile.credly && <ExternalLink href={profile.credly}>Credly</ExternalLink>}</div></Section>;
}
