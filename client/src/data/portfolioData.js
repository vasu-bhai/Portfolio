// ============================
// 📝 PORTFOLIO DATA — Replace placeholders with your real info!
// ============================

export const personalInfo = {
  name: "Vasu Panseriya",
  tagline: "AI/ML Enthusiast",
  shortIntro:
    "I build modern web applications and explore AI/ML solutions. Passionate about turning ideas into impactful, real-world products.",
  email: "[vasupanseriya135@gmail.com]",
  phone: "+91 7016431646",
  linkedin: "https://www.linkedin.com/in/vasu-panseriya-1096042b4/",
  github: "https://github.com/vasu-bhai",
  resumeLink: "/resume.pdf",
  location: "Ahmedabad, Gujarat",
};

export const aboutData = {
  paragraphs: [
    "I am a final-year Computer Science student focused on Machine Learning and AI-driven problem solving.",
    "I have built projects like customer churn prediction using neural networks and smart energy consumption forecasting using Random Forest, where I handled the full pipeline—data preprocessing, feature engineering, model building, and evaluation.",
    "My strength lies in transforming raw data into meaningful features and building models that generalize well on real-world data. I am experienced with structured datasets, experimenting with algorithms, and evaluating model performance using proper metrics.",
    "I am seeking opportunities to apply my ML skills to real-world problems and grow in building scalable AI systems.",
    "I am passionate about building AI systems that can solve real-world problems and make a difference in people's lives.",
  ],
  highlights: [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Learned", value: "20+" },
    { label: "GitHub Contributions", value: "100+" },
    { label: "DSA questions", value: "250+" },
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
  {
    title: "Smart Energy Consumption Prediction",
    description:
      "A machine learning model that predicts short-term household energy usage based on historical weather and time data. I processed the data, extracted key patterns like peak hours, and used a Random Forest algorithm to ensure reliable predictions.",
    techStack: ["Python", "scikit-learn", "Pandas", "Random Forest", "Feature Engineering"],
    liveLink: "#",
    githubLink: "#",
    image: null,
    featured: true,
    pipeline: [
      "Collected historical energy, weather, and time data",
      "Cleaned data and handled missing values",
      "Engineered new features like peak hours and rolling averages",
      "Trained a Random Forest model on the processed data",
      "Evaluated the model using RMSE and R² score for accurate predictions",
    ],
  },
  {
    title: "Employee Attrition Prediction",
    description:
      "An HR analytics model that predicts whether an employee is likely to leave the company. By analyzing factors like job satisfaction and income, the model helps identify the key reasons behind employee turnover using Logistic Regression.",
    techStack: ["Python", "scikit-learn", "Pandas", "Logistic Regression", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
    image: null,
    featured: true,
    pipeline: [
      "Gathered HR data including salary, role, and job satisfaction",
      "Preprocessed data by handling missing values and encoding text",
      "Created new metrics like income-to-experience ratio",
      "Addressed class imbalance and trained a Logistic Regression model",
      "Analyzed model coefficients to find the top drivers of attrition",
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
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
