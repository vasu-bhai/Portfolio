import { skillsData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Databases: '🗄️',
  'Tools & DevOps': '🛠️',
  'AI / ML': '🤖',
};

const categoryGradients = {
  Frontend: 'from-sky-500/20 to-blue-500/20 border-sky-500/20',
  Backend: 'from-green-500/20 to-emerald-500/20 border-green-500/20',
  Databases: 'from-amber-500/20 to-orange-500/20 border-amber-500/20',
  'Tools & DevOps': 'from-purple-500/20 to-violet-500/20 border-purple-500/20',
  'AI / ML': 'from-rose-500/20 to-pink-500/20 border-rose-500/20',
};

const barColors = {
  Frontend: 'from-sky-400 to-blue-500',
  Backend: 'from-green-400 to-emerald-500',
  Databases: 'from-amber-400 to-orange-500',
  'Tools & DevOps': 'from-purple-400 to-violet-500',
  'AI / ML': 'from-rose-400 to-pink-500',
};

function SkillCategory({ category, skills, index }) {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`glass-card p-6 h-full border bg-gradient-to-br ${categoryGradients[category] || ''} hover:-translate-y-1 transition-all duration-300`}>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">{categoryIcons[category] || '📦'}</span>
          <h3 className="text-lg font-bold text-dark-100">{category}</h3>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-dark-200">{skill.name}</span>
                <span className="text-xs text-dark-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-dark-700/60 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${barColors[category] || 'from-primary-400 to-primary-600'} transition-all duration-1000 ease-out`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've worked with, organized by category.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
