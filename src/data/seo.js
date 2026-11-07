import { profile, publications } from './portfolio';

// Production origin. Canonical URLs, Open Graph URLs, the sitemap and JSON-LD all derive from this.
export const SITE_URL = 'https://mehmoodulhaq570.netlify.app';
export const SITE_NAME = 'Mehmood Ul Haq';
export const OG_IMAGE = { url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Mehmood Ul Haq: AI Engineer and ML Researcher' };

// One entry per indexable route. Titles stay at or under 60 characters, descriptions at or under 155.
export const pages = [
  { path: '/', type: 'profile', title: 'Mehmood Ul Haq | AI Engineer & ML Researcher, Lahore', description: 'AI Engineering Officer at NESPAK and M.S. Data Science student at UET Lahore, researching solar forecasting, explainable AI and computer vision.' },
  { path: '/about', type: 'profile', title: 'About Mehmood Ul Haq | Computer Engineer & Data Scientist', description: 'Computer engineer and data scientist from UET Lahore building practical AI for energy forecasting, engineering prediction and enterprise HR systems.' },
  { path: '/research', title: 'Research & Publications | Mehmood Ul Haq', description: 'Peer-reviewed research on ML-based fatigue-life prediction of AM Ti-6Al-4V, solar irradiance forecasting and explainable engineering AI.' },
  { path: '/projects', title: 'AI & Machine Learning Projects | Mehmood Ul Haq', description: 'SeoulMate hybrid recommender, Smart Datalyzer, a YOLOv11 fire-suppression system, energy demand forecasting and Explainable AutoML.' },
  { path: '/experience', title: 'Experience: NESPAK & KICS UET Lahore | Mehmood Ul Haq', description: 'AI Engineering Officer at NESPAK; formerly AI Research Engineer at the Data Science Lab, KICS, UET Lahore, contributing to research with DFKI Germany.' },
  { path: '/education', title: 'Education: UET Lahore | Mehmood Ul Haq', description: 'M.S. Data Science (in progress) and B.Sc. Computer Engineering at the University of Engineering and Technology, Lahore, Pakistan.' },
  { path: '/skills', title: 'Technical Skills: Python, PyTorch, RAG | Mehmood Ul Haq', description: 'Languages, ML frameworks and tools: Python, PyTorch, TensorFlow, Scikit-learn, LangChain, FAISS, FastAPI, React, AWS and more.' },
  { path: '/certifications', title: 'Certifications & Training | Mehmood Ul Haq', description: 'Professional credentials from DeepLearning.AI, DataCamp, IBM, AWS and ACM UET Lahore, with a link to each certificate.' },
  { path: '/achievements', title: 'Achievements & Awards | Mehmood Ul Haq', description: '1st position in the PAPAAM Engineering Innovation Award, research collaboration with DFKI Germany, and an edge-AI fire detection exhibition.' },
  { path: '/interests', title: 'Research Interests | Mehmood Ul Haq', description: 'Predictive analytics, solar-energy time series, explainable engineering AI, computer vision, NLP and generative AI, and AI + IoT systems.' },
  { path: '/community', title: 'Leadership & Community | Mehmood Ul Haq', description: 'Technical Lead at UET ACM Lahore, organiser roles in UET Lahore societies, and volunteer service at AWS community events.' },
  { path: '/contact', title: 'Contact | Mehmood Ul Haq', description: 'Get in touch about research collaboration or AI/ML engineering work by email, LinkedIn, GitHub, Google Scholar, Kaggle and more.' },
  { path: '/resume', title: 'Curriculum Vitae | Mehmood Ul Haq', description: 'View or download the CV of Mehmood Ul Haq, covering AI engineering, data science research, publications, projects and education.' },
];

export const notFoundPage = { path: null, noindex: true, title: 'Page not found | Mehmood Ul Haq', description: 'The page you are looking for does not exist or has moved.' };

export const normalizePath = (pathname = '/') => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname) || '/';

export const getPage = (pathname) => pages.find((page) => page.path === normalizePath(pathname)) ?? notFoundPage;

export const canonicalUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: profile.name,
  alternateName: ['Mehmood ul Haq', 'Engr. Mehmood Ul Haq'],
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/mehmood-ul-haq-600.webp`,
  email: `mailto:${profile.email}`,
  jobTitle: 'AI Engineering Officer',
  description: 'AI engineer and machine-learning researcher working on solar-energy forecasting, explainable engineering AI and computer vision.',
  worksFor: { '@type': 'Organization', name: 'NESPAK', alternateName: 'National Engineering Services Pakistan' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Engineering and Technology, Lahore' },
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressRegion: 'Punjab', addressCountry: 'PK' },
  knowsAbout: ['Machine learning', 'Deep learning', 'Time-series forecasting', 'Solar irradiance forecasting', 'Explainable AI', 'SHAP', 'Computer vision', 'Natural language processing', 'Retrieval-augmented generation'],
  sameAs: [profile.linkedin, profile.github, profile.scholar, profile.kaggle, profile.medium, profile.devTo, profile.credly, profile.lightningAi],
};

const website = { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE_URL}/`, name: SITE_NAME, inLanguage: 'en', publisher: { '@id': PERSON_ID } };

const isSelf = (name) => name.toLowerCase().replace(/\s+/g, ' ') === profile.name.toLowerCase();

const scholarlyArticles = () => publications
  .filter((item) => item.status === 'Published')
  .map((item) => ({
    '@type': 'ScholarlyArticle',
    headline: item.title,
    author: item.authors.map((name) => (isSelf(name) ? { '@id': PERSON_ID } : { '@type': 'Person', name })),
    datePublished: item.year.match(/\d{4}/)?.[0],
    isPartOf: { '@type': 'Periodical', name: item.venue },
    url: item.url,
    sameAs: item.doi,
  }));

// JSON-LD graph for a route. The prerender step writes this into each page's static HTML.
export function jsonLdFor(path) {
  const graph = [website, person];
  const url = canonicalUrl(path);
  if (path === '/about') {
    graph.push({ '@type': 'ProfilePage', url, name: getPage(path).title, isPartOf: { '@id': WEBSITE_ID }, mainEntity: { '@id': PERSON_ID } });
  } else {
    graph.push({ '@type': 'WebPage', url, name: getPage(path).title, isPartOf: { '@id': WEBSITE_ID }, about: { '@id': PERSON_ID } });
  }
  if (path === '/research') graph.push(...scholarlyArticles());
  return { '@context': 'https://schema.org', '@graph': graph };
}
