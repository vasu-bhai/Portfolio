// ============================
// 📝 PORTFOLIO DATA — Replace placeholders with your real info!
// ============================

export const personalInfo = {
  name: "Vasu Panseriya",
  tagline: "Full-Stack Developer & AI/ML Enthusiast",
  shortIntro:
    "I build modern web applications and explore AI/ML solutions. Passionate about turning ideas into impactful, real-world products.",
  email: "[vasupanseriya135@gmail.com]",
  phone: "+91 7016431646",
  linkedin: "https://www.linkedin.com/in/vasu-panseriya-1096042b4/",
  github: "https://github.com/vasu-bhai",
  resumeLink: "/Resume.pdf",
  location: "Ahmedabad, Gujarat",
};

export const aboutData = {
  paragraphs: [
    "I'm a passionate software developer currently pursuing my degree in Computer Science. My journey in tech started with curiosity about how apps and websites work, and it has evolved into a deep interest in building scalable, user-friendly applications.",
    "I specialize in full-stack web development using the MERN stack and have a growing interest in Artificial Intelligence and Machine Learning. I love solving real-world problems through code and continuously learning new technologies.",
    "When I'm not coding, you'll find me exploring research papers, contributing to open-source projects, or brainstorming startup ideas that can make a difference.",
  ],
  highlights: [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Learned", value: "20+" },
    { label: "GitHub Contributions", value: "500+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};

export const projectsData = [
  {
    title: "News Research Chatbot",
    description:
      "An AI-powered chatbot that ingests news articles from URLs, processes them using LangChain and FAISS vector embeddings, and answers user queries with cited sources. Built with an intuitive Streamlit interface for real-time Q&A over live news content.",
    techStack: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit", "UnstructuredURL Loader"],
    liveLink: "#",
    githubLink: "https://github.com/vasu-bhai/news-research-chatbot",
    image: null,
    featured: true,
    pipeline: [
      "User enters news article URLs",
      "URLs are loaded & split into chunks via LangChain",
      "Chunks are embedded using OpenAI Embeddings",
      "Embeddings stored in FAISS vector index",
      "User asks a question → FAISS retrieves relevant chunks",
      "LLM generates a grounded answer with source citations",
    ],
  },
  {
    title: "Potato Disease Detection System",
    description:
      "A deep learning system that classifies potato leaf images into Early Blight, Late Blight, or Healthy categories with 98%+ accuracy. Features a FastAPI backend for real-time inference and a React frontend for farmers to upload and diagnose leaf images instantly.",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "FastAPI", "React", "NumPy", "OpenCV"],
    liveLink: "#",
    githubLink: "https://github.com/vasu-bhai/potato-disease-detection",
    image: null,
    featured: true,
    pipeline: [
      "Farmer uploads leaf image via React frontend",
      "Image is preprocessed (resize, normalize) with OpenCV & NumPy",
      "Preprocessed image sent to FastAPI backend",
      "CNN model (trained on PlantVillage dataset) runs inference",
      "Model outputs disease class + confidence score",
      "Result displayed to farmer with treatment recommendation",
    ],
  },
  {
    title: "Loan Approval Prediction System",
    description:
      "A machine learning pipeline that predicts loan approval based on applicant details like income, credit history, and employment status. Trained on real-world banking data using multiple classifiers with hyperparameter tuning, achieving 82% accuracy. Deployed via Flask REST API.",
    techStack: ["Python", "scikit-learn", "Pandas", "Flask", "Matplotlib", "Seaborn", "Logistic Regression", "Random Forest"],
    liveLink: "#",
    githubLink: "https://github.com/vasu-bhai/loan-approval-prediction",
    image: null,
    featured: true,
    pipeline: [
      "Raw applicant data collected (income, CIBIL score, employment, etc.)",
      "Data cleaned: handle missing values, encode categoricals",
      "EDA performed: visualize distributions & correlations",
      "Feature engineering + train/test split (80/20)",
      "Multiple models trained: Logistic Regression, Random Forest, SVM",
      "Best model selected via cross-validation → deployed on Flask API",
    ],
  },
];


export const skillsData = {
  Frontend: [
    { name: "React / React Native", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "Python", level: 80 },
    { name: "Socket.io", level: 75 },
  ],
  Databases: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 70 },
    { name: "Firebase", level: 65 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    { name: "Docker", level: 60 },
    { name: "Linux / Bash", level: 70 },
  ],
  "AI / ML": [
    { name: "TensorFlow / Keras", level: 65 },
    { name: "scikit-learn", level: 70 },
    { name: "Pandas / NumPy", level: 75 },
    { name: "OpenCV", level: 60 },
    { name: "NLP Basics", level: 55 },
  ],
};

export const educationData = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    institution: "Your University Name",
    period: "2022 — 2026",
    description:
      "Relevant coursework: Data Structures & Algorithms, Database Management, Operating Systems, Machine Learning, Web Technologies.",
    achievements: [
      "Dean's List — Top 5% of class",
      "Won 1st place at college hackathon",
      "Published research paper on ML applications",
    ],
  },
  {
    type: "education",
    title: "Higher Secondary (12th Grade)",
    institution: "Your School Name",
    period: "2020 — 2022",
    description:
      "Science stream with Computer Science. Built initial foundation in programming with C++ and Python.",
    achievements: [
      "Scored 92% in board examinations",
      "School-level coding competition winner",
    ],
  },
  {
    type: "experience",
    title: "Freelance Web Developer",
    institution: "Self-Employed",
    period: "2024 — Present",
    description:
      "Building custom web solutions for small businesses and startups. Focused on MERN stack applications with responsive design.",
    achievements: [
      "Delivered 5+ client projects",
      "Maintained 5-star rating across platforms",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
