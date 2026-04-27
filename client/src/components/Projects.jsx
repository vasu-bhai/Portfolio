import { projectsData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Visual config per project
const projectConfig = [
  {
    emoji: '🤖',
    accent: 'from-violet-500 to-indigo-500',
    accentLight: 'violet',
    stat: { value: '98%', label: 'Query Accuracy' },
    pipelineIcons: ['🔗', '✂️', '🧠', '📦', '🔍', '💬'],
  },
  {
    emoji: '🌿',
    accent: 'from-emerald-500 to-teal-500',
    accentLight: 'emerald',
    stat: { value: '98.4%', label: 'Detection Accuracy' },
    pipelineIcons: ['📸', '🔧', '📡', '🧬', '📊', '💊'],
  },
  {
    emoji: '🏦',
    accent: 'from-amber-500 to-orange-500',
    accentLight: 'amber',
    stat: { value: '82%', label: 'Prediction Accuracy' },
    pipelineIcons: ['📋', '🧹', '📈', '⚗️', '🤖', '🚀'],
  },
];

const techColors = {
  Python: 'bg-blue-500/15 text-blue-300',
  LangChain: 'bg-violet-500/15 text-violet-300',
  'OpenAI API': 'bg-emerald-500/15 text-emerald-300',
  FAISS: 'bg-yellow-500/15 text-yellow-300',
  Streamlit: 'bg-rose-500/15 text-rose-300',
  TensorFlow: 'bg-orange-500/15 text-orange-300',
  Keras: 'bg-red-500/15 text-red-300',
  CNN: 'bg-purple-500/15 text-purple-300',
  FastAPI: 'bg-teal-500/15 text-teal-300',
  React: 'bg-sky-500/15 text-sky-300',
  'scikit-learn': 'bg-amber-500/15 text-amber-300',
  Pandas: 'bg-indigo-500/15 text-indigo-300',
  Flask: 'bg-gray-500/15 text-gray-300',
  NumPy: 'bg-cyan-500/15 text-cyan-300',
  OpenCV: 'bg-pink-500/15 text-pink-300',
  Matplotlib: 'bg-lime-500/15 text-lime-300',
  Seaborn: 'bg-fuchsia-500/15 text-fuchsia-300',
  'UnstructuredURL Loader': 'bg-slate-500/15 text-slate-300',
  'Logistic Regression': 'bg-green-500/15 text-green-300',
  'Random Forest': 'bg-teal-500/15 text-teal-300',
};

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const cfg = projectConfig[index];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative glass-card overflow-hidden hover:-translate-y-1 transition-transform duration-300">

        {/* Top gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${cfg.accent}`} />

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LEFT: Project Identity ──────────────────────── */}
            <div className="lg:w-72 shrink-0">
              {/* Icon + Title */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cfg.accent} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {cfg.emoji}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>

              {/* Accuracy Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${cfg.accent} bg-opacity-20 mb-4`}>
                <span className="text-2xl font-black text-white">{cfg.stat.value}</span>
                <span className="text-xs text-white/70 leading-tight">{cfg.stat.label}</span>
              </div>

              {/* Short description */}
              <p className="text-dark-400 text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveLink && project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${cfg.accent} text-white text-xs font-semibold hover:opacity-90 transition`}>
                    🌐 Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 border border-dark-600 text-dark-300 text-xs font-semibold hover:text-white hover:border-dark-400 transition">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* ── RIGHT: Visual Pipeline ──────────────────────── */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-dark-400 uppercase tracking-widest mb-4">⚙️ How It Works</p>

              {/* Pipeline Flow — visual nodes connected by arrows */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {project.pipeline.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-dark-800/60 border border-dark-700/50 rounded-xl p-3 hover:border-dark-500/70 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{cfg.pipelineIcons[i]}</span>
                        <span className={`text-xs font-bold bg-gradient-to-r ${cfg.accent} bg-clip-text text-transparent`}>
                          Step {i + 1}
                        </span>
                      </div>
                      <p className="text-xs text-dark-300 leading-snug">{step}</p>
                    </div>
                    {/* Arrow connecting to next (except last in each row and very last) */}
                    {i < project.pipeline.length - 1 && (i + 1) % 3 !== 0 && (
                      <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-dark-600 text-xs hidden sm:block">▶</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-dark-400 uppercase tracking-widest mb-2">🛠 Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${techColors[tech] || 'bg-dark-700/50 text-dark-300'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            AI/ML systems built end-to-end — from data to deployment.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
