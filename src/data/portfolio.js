export const profile = {
  name: 'Mehmood Ul Haq',
  role: 'AI/ML Researcher · Data Scientist · Computer Engineer',
  positioning: 'Building intelligent applications and explainable models for energy, engineering, and enterprise systems.',
  // Homepage introduction: the plain-text "who I am" passage search engines and AI answers quote.
  intro: 'I’m an AI Engineering Officer at NESPAK and an M.S. Data Science student at UET Lahore, Pakistan. Previously, I was an AI Research Engineer at the Data Science Lab, KICS, working on solar-energy forecasting and contributing to research with DFKI Germany. My research applies machine learning and SHAP-based explainability to engineering problems, from fatigue-life prediction of additively manufactured Ti-6Al-4V to solar irradiance forecasting, with papers in Progress in Additive Manufacturing, the International Journal of Precision Engineering and Manufacturing, and Results in Engineering.',
  email: 'mehmoodulhaq1040@gmail.com',
  github: 'https://github.com/mehmoodulhaq570',
  linkedin: 'https://www.linkedin.com/in/mehmodulhaq570/',
  cv: 'https://drive.google.com/file/d/1E_DEHsMPCskvuPxY7OQFTJo9NYSCTEN-/view?usp=sharing',
  cvDownload: 'https://drive.google.com/uc?export=download&id=1E_DEHsMPCskvuPxY7OQFTJo9NYSCTEN-',
  scholar: 'https://scholar.google.com/citations?user=oRDkaNIAAAAJ&hl=en',
  skillsProfile: 'https://www.skills.google/public_profiles/11036b3f-3aca-4ce1-877f-abb407608f1a',
  credly: 'https://www.credly.com/users/mehmoodulhaq570/badges/credly',
  kaggle: 'https://www.kaggle.com/mehmoodulhaq570',
  medium: 'https://medium.com/@mehmoodulhaq570',
  lightningAi: 'https://lightning.ai/mehmoodulhaq570',
  devTo: 'https://dev.to/mehmoodulhaq570',
  readersHub: 'https://readershubsite.blogspot.com',
};
export const interests = [
  { title: 'AI & Predictive Analytics', detail: 'Machine learning for forecasting, decision support, and practical engineering problems.' },
  { title: 'Solar Energy & Time Series', detail: 'Multi-horizon irradiance and PV power forecasting for renewable-energy planning.' },
  { title: 'Explainable Engineering AI', detail: 'Interpretable prediction of mechanical properties, fatigue life, and process–property relationships.' },
  { title: 'Deep Learning & Computer Vision', detail: 'Visual detection, generative models, and intelligent safety systems.' },
  { title: 'NLP & Generative AI', detail: 'Semantic retrieval, recommendation systems, LLMs, and retrieval-augmented generation.' },
  { title: 'AI + IoT & Intelligent Systems', detail: 'Connecting models with sensors, embedded devices, and software workflows.' },
];
export const research = [
  { title: 'Solar Energy Forecasting & Predictive Analytics', category: 'Renewable energy · Time series', description: 'Addressing weather-driven uncertainty in Lahore’s solar generation through multi-horizon irradiance and PV power forecasting. Compared SARIMAX, XGBoost, Random Forest, LitTFT, BiLSTM, CNN-BiLSTM, TCN, and TFT models, and developed a tool to retrieve NASA POWER and Open-Meteo data for calibration. The work supports PV planning, energy-yield estimation, and renewable-energy integration.' },
  { title: 'Machine Learning-Based Engineering Prediction', category: 'Materials engineering · Explainable AI', description: 'Predicting mechanical properties and fatigue life of additively manufactured Ti-6Al-4V where experiments are costly and data is limited. Developed regression and ANN models with SHAP interpretation and evaluated bootstrapping, Monte Carlo, and VAE data augmentation. ANN-based tools support rapid material screening and process optimization.' },
];
// Published metadata: Springer article pages and Crossref DOI records.
// Manuscript statuses and descriptions: supplied by Mehmood Ul Haq.
export const publications = [
  { title: 'Machine Learning Driven Prediction and GUI Based Optimization of Quasi-Static Mechanical Properties in SLM Fabricated Ti6Al4V Alloy', authors: ['Muhammad Muteeb Butt', 'Sidra Rashid', 'Mehmood ul Haq', 'Ayyaz Mustafa', 'Arshad Iqbal', 'Hossein Laieghi', 'Varma KVVSSN', 'Metin U. Salamci', 'Enrico Salvati', 'Hüseyin Kızıl'], venue: 'International Journal of Precision Engineering and Manufacturing', year: '2026 · Online October 2025', status: 'Published', url: 'https://link.springer.com/article/10.1007/s12541-025-01360-0', doi: 'https://doi.org/10.1007/s12541-025-01360-0', description: 'Machine learning prediction of tensile properties in SLM-fabricated Ti6Al4V, with SHAP interpretation and a GUI for selecting process parameters.' },
  { title: 'Machine learning and physics based empirical equations for fatigue life prediction of AM Ti-6Al-4 V', authors: ['Muhammad Muteeb Butt', 'Mehmood ul Haq', 'Varma KVVSSN', 'Hossein Laieghi', 'Hakan Yavas', 'Metin U Salamci', 'Hüseyin Kızıl'], venue: 'Progress in Additive Manufacturing', year: '2026', status: 'Published', url: 'https://link.springer.com/article/10.1007/s40964-026-01615-w', doi: 'https://doi.org/10.1007/s40964-026-01615-w', description: 'Fatigue-life prediction combining data augmentation, ANN modelling, SHAP analysis, and physics-guided empirical equations.' },
  { title: 'Solar Irradiance Forecasting Meta-review: An In-Depth Systematic Meta-review on Solar Irradiance Forecasting Datasets, Predictive Pipelines and Performance', authors: ['Faiza Mehmood', 'Muhammad Nabeel Asim', 'Aamir Mehmood', 'Waqar Mahmood', 'Sebastian Vollmer', 'Mehmood Ul Haq', 'Faisal Ali', 'Andreas Dengel'], venue: 'Results in Engineering', year: '2026', status: 'Published', url: 'https://www.sciencedirect.com/science/article/pii/S2590123026034675', doi: 'https://doi.org/10.1016/j.rineng.2026.112449', description: 'A systematic meta-review of solar irradiance forecasting datasets, modelling pipelines, and predictive performance.' },
  { title: 'Ensemble-Based Solar Irradiance Forecasting for Photovoltaic Energy Planning in Lahore, Pakistan', status: 'Under review', description: 'Ensemble forecasting for photovoltaic energy planning in Lahore.' },
  { title: 'Diffusion Models (DDPM) Based Re-Generation of TEM Images of PvP-Capped ZnO Nanoparticles Fabricated by Hybrid Flash Nano Precipitation–Plasma Torch (FNP-PT) Processing', status: 'Under review', description: 'Diffusion-based generation of microscopy images for nanoparticle research.' },
  { title: 'Interpretable Machine Learning for SPS Process-Property Relationships Using SHAP Analysis and 2D Process Maps', status: 'Under review', description: 'Interpretable modelling of SPS process–property relationships.' },
  { title: 'A Hybrid Evolutionary Optimization Framework for Machine Learning and Deep Learning-Based Air Quality Prediction in Lahore, Pakistan', status: 'Work in progress', description: 'Evolutionary optimization for air-quality prediction using machine learning and deep learning.' },
  { title: 'Automated Vision-Based Fire Extinguishing System Using YOLOv11 and Sensor Fusion for Safety Application', status: 'Work in progress', description: 'Vision and sensor fusion for automated fire detection and extinguishing.' },
  { title: 'Advancing Solar Energy Prediction Using Statistical, Machine Learning, and Deep Learning Models for Multi-Horizons in Lahore, Pakistan', status: 'Work in progress', description: 'Comparative forecasting across multiple horizons for Lahore’s solar-energy conditions.' },
];
export const leadership = [
  { role: 'Technical Lead', organization: 'UET ACM Lahore', dates: 'Leadership', description: 'Led technical initiatives and supported the student computing community through practical events and collaboration.' },
  { role: 'Media Organizer', organization: 'Daanish Alumni Forum · UET Lahore', dates: 'Leadership', description: 'Coordinated media and communications for alumni activities.' },
  { role: 'Finance Organizer', organization: 'Music Society · UET Lahore', dates: 'Leadership', description: 'Supported financial organization and planning for society activities.' },
  { role: 'Event Volunteer', organization: 'AWS community events', dates: 'Volunteer service', description: 'Volunteered at AWS events with Sumama Zaeed and other volunteers from Systems Limited and Tkxel.' },
];
export const achievements = [
  { title: '1st Position — PAPAAM Engineering Innovation Award', organization: 'AutoShow Pakistan · 2024', badge: '1st', url: 'https://drive.google.com/file/d/1lX-usz_0zoHYNnnHPChDMdaHnnNQ-bOS/view?usp=sharing', description: 'Developed machine-learning models for fatigue-strength prediction of 4140 alloy steel, achieving high predictive accuracy.' },
  { title: 'International Research Collaboration with DFKI Germany', organization: 'Data Science Lab, KICS · DFKI Germany', badge: 'INTL', description: 'Contributed to AI and solar forecasting research projects conducted in collaboration with DFKI Germany, focusing on machine learning, predictive analytics, and intelligent decision-support systems.' },
  { title: 'Edge-AI Fire Detection System Exhibition', organization: 'The University of Faisalabad', badge: 'AI', description: 'Developed and exhibited an edge-AI fire detection and suppression system integrating YOLOv11, Raspberry Pi, computer vision, and automated actuators for real-time fire detection and physical response.' },
];
export const certifications = [
  { title: 'Foundation Course on AI Readiness', url: 'https://drive.google.com/file/d/1GTq_8DgK1r-ROBlTUDyioAmW2HmMtzvE/view', issuer: 'IICT · AI Skills House · Google and YouTube', year: '25 Aug 2026' },
  { title: 'AI and ML Certification', url: 'https://drive.google.com/file/d/1zkTeM9Z4yzlG7C7IuLbaEQ312sYuf56D/view', issuer: 'DeepLearning.AI' },
  { title: 'Introduction to Python', url: 'https://drive.google.com/file/d/1KwCpKdoRmTlWP1B8imvcU0DsrzAaN5Jd/view', issuer: 'DataCamp' },
  { title: 'Supervised Learning with scikit-learn', url: 'https://drive.google.com/file/d/19jynlXG5Bi9uOQP-C_vRSBbLt0XmxPU5/view', issuer: 'DataCamp' },
  { title: 'Introduction to Relational Databases (RDBMS)', url: 'https://drive.google.com/file/d/13QHfFANfrS8L2Mp3cTlJTiC1ult6PCxg/view', issuer: 'IBM' },
  { title: 'AWSome Day Online Conference', url: 'https://drive.google.com/file/d/1FbIHjFMYQ9-C7_dVtp2ZU0jaNdxrje6N/view', issuer: 'AWS', additionalDocuments: [{ label: 'Additional certificate', url: 'https://drive.google.com/file/d/10h7SL2zSJ_2O7FSso6oHofd7H30HCJ-c/view' }] },
  { title: 'AI/ML Fellowship Completion', url: 'https://drive.google.com/file/d/1ooAq4GCDi2bem20lU0CkPls4k1Kan-5s/view', issuer: 'ACM UET Lahore' },
  { title: 'Professional Training on IT and Personal Growth', url: 'https://drive.google.com/file/d/1KUxANETPzZqXRr4sSrS4RebrP6OdVxRB/view', issuer: 'QASF', year: 'One-year programme' },
];
export const projects = [
  { title: 'Explainable AutoML', category: 'AutoML · Explainable AI', date: 'Jul 2026', status: 'In development', flow: ['Prepare data', 'Compare models', 'Explain results'],
    problem: 'Make machine learning workflows accessible to beginners without extensive coding.',
    approach: 'Developing a guided Streamlit workflow for automated cleaning, feature engineering, model selection, evaluation, and interpretation.',
    result: 'In development: an interactive no-code/low-code platform with model comparisons and downloadable learning reports.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly', 'AutoML'] },
  { title: 'SeoulMate', category: 'NLP · Recommendations', date: 'Mar 2026', flow: ['Natural language', 'Hybrid retrieval', 'Personalized ranking'],
    problem: 'Find relevant K-dramas from natural-language preferences.',
    approach: 'Combine SBERT + FAISS semantic search with BM25 retrieval, user profiles, intent-aware ranking, and optional CrossEncoder reranking.',
    result: 'An end-to-end personalized recommendation pipeline with a FastAPI backend and Streamlit interface.',
    technologies: ['FastAPI', 'SBERT', 'FAISS', 'BM25', 'LangChain'], github: 'https://github.com/mehmoodulhaq570/SeoulMate' },
  { title: 'Smart Energy Demand Forecasting System', category: 'Energy · Forecasting', date: 'Jan 2026', flow: ['Consumption + weather', 'Time-series models', 'Demand forecasts'],
    problem: 'Anticipate electricity demand from historical consumption and weather conditions.',
    approach: 'Use NASA POWER meteorological data and compare XGBoost, Random Forest, LSTM, CNN-LSTM, TFT, TCN, and ensemble models.',
    result: 'A forecasting platform with model evaluation and optimization workflows for smart-grid applications.',
    technologies: ['Python', 'XGBoost', 'LSTM', 'TFT', 'NASA POWER'] },
  { title: 'Smart Datalyzer', category: 'Data science · Developer tools', date: 'Sep 2025', flow: ['CSV / Excel', 'Quality + diagnostics', 'HTML / JSON reports'],
    problem: 'Assess dataset quality and machine-learning readiness with less repetitive analysis.',
    approach: 'Automate exploratory analysis, outlier detection, statistical diagnostics, target leakage checks, and feature importance through a Python CLI.',
    result: 'A toolkit that generates visualizations and HTML/JSON reports from CSV and Excel datasets.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Plotly', 'CLI'], github: 'https://github.com/mehmoodulhaq570/Datalyzer' },
  { title: 'Food Chatbot', category: 'Conversational AI · Software systems', date: 'Aug 2025', flow: ['Conversation', 'Intent recognition', 'Order management'],
    problem: 'Support interactive food ordering through natural-language conversation.',
    approach: 'Use Google Dialogflow for language understanding, FastAPI for backend workflows, and MySQL for order storage.',
    result: 'An interactive ordering chatbot with database-backed order management.',
    technologies: ['Python', 'FastAPI', 'Dialogflow', 'MySQL'], github: 'https://github.com/mehmoodulhaq570/Chatbot-with-Dialogflow' },
  { title: 'Smart Fire Extinguisher', category: 'Computer vision · Embedded AI', date: 'Jun 2025', flow: ['Camera input', 'YOLOv11n detection', 'Targeted suppression'],
    problem: 'Detect and locate fires, then direct an automated extinguishing unit toward them.',
    approach: 'Deploy YOLOv11n on Raspberry Pi 5 with Pi Camera v1.3, integrating MG995 servos, an L298N-controlled water pump, and a brass nozzle.',
    result: 'An integrated vision-based fire detection, localization, and targeted suppression system.',
    technologies: ['YOLOv11n', 'Raspberry Pi 5', 'OpenCV', 'Deep learning'], github: 'https://github.com/mehmoodulhaq570/Smart-Fire-System' },
];
export const skills = [
  { title: 'Languages & Databases', items: ['Python', 'C#', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MySQL'] },
  { title: 'AI/ML & Data', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Plotly', 'MLflow'] },
  { title: 'Frameworks & Development', items: ['FastAPI', 'Flask', 'React', 'Hugging Face Transformers', 'LangChain', 'FAISS', 'ChromaDB'] },
  { title: 'Tools & Platforms', items: ['AWS', 'Git / GitHub', 'Visual Studio', 'VS Code', 'PyCharm', 'Google Colab'] },
];
export const additionalSkills = [
  { title: 'AI & Data Expertise', items: ['Forecasting', 'SHAP', 'LLMs', 'RAG', 'Prompt engineering', 'SBERT', 'Feature engineering', 'Model evaluation'] },
  { title: 'Professional Strengths', items: ['Leadership', 'Written & verbal communication', 'Problem-solving', 'Teamwork', 'Organization', 'Attention to detail', 'Time management'] },
  { title: 'Languages', items: ['Urdu', 'English'] },
];
export const experience = [
  { role: 'AI Engineering Officer (GET)', organization: 'NESPAK · Pakistan', dates: 'Jan 2026 – Present', contributions: ['Developing recruitment automation modules using NLP-based CV analysis, candidate matching, and verification workflows integrated with enterprise HR systems.', 'Modernizing the HR management platform by redesigning recruitment workflows and implementing an ATS-based hiring pipeline for applicant tracking and employee management.'] },
  { role: 'AI Research Engineer / Data Scientist', organization: 'Data Science Lab (DSL) · Al-Khawarizmi Institute of Computer Science (KICS), UET Lahore', dates: 'Oct 2024 – Dec 2025', contributions: ['Developed machine learning and deep learning solutions for solar-energy predictive analytics, time-series forecasting, and AI-driven decision support.', 'Designed end-to-end ML pipelines covering data cleaning, preprocessing, feature engineering, model training, and evaluation.', 'Contributed to AI research projects in collaboration with DFKI Germany.'] },
  { role: 'AI/ML Engineer Intern', document: { label: 'View KICS internship experience letter', url: 'https://drive.google.com/file/d/151xmDt8fDAgJcN95JlseDjuMqcowfjwy/view' }, organization: 'Data Science Lab (DSL) · KICS, UET Lahore', dates: 'Jul 2024 – Sep 2024', contributions: ['Implemented Scikit-learn and TensorFlow models across preprocessing, training, optimization, and evaluation workflows.', 'Performed exploratory data analysis, feature engineering, and statistical analysis on real-world datasets.', 'Explored AI model deployment using cloud platforms.'] },
];
export const education = [
  { degree: 'M.S. Data Science', institution: 'University of Engineering and Technology, Lahore', dates: 'Sep 2025 – Present', detail: 'In progress · Lahore, Punjab, Pakistan.' },
  { degree: 'B.Sc. Computer Engineering', institution: 'University of Engineering and Technology, Lahore', dates: 'Nov 2021 – Aug 2025', detail: 'Lahore, Punjab, Pakistan.' },
];
