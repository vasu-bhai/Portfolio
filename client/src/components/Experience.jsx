import { educationData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const typeConfig = {
  education: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    color: 'bg-primary-500 text-white',
    borderColor: 'border-primary-500/30',
    bgGlow: 'bg-primary-500/10',
  },
  experience: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-accent-500 text-white',
    borderColor: 'border-accent-500/30',
    bgGlow: 'bg-accent-500/10',
  },
};

function TimelineItem({ item, index, isLast }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const config = typeConfig[item.type] || typeConfig.education;

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-dark-600 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className={`absolute left-0 sm:left-2 top-1 w-8 h-8 rounded-full ${config.color} flex items-center justify-center shadow-lg z-10`}>
        {config.icon}
      </div>

      {/* Card */}
      <div
        className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className={`glass-card p-6 border ${config.borderColor} mb-8 hover:-translate-y-1 transition-all duration-300`}>
          {/* Period Badge */}
          <span className={`inline-block px-3 py-1 rounded-full ${config.bgGlow} text-xs font-semibold tracking-wide mb-3 ${
            item.type === 'education' ? 'text-primary-400' : 'text-accent-400'
          }`}>
            {item.period}
          </span>

          <h3 className="text-xl font-bold text-dark-100 mb-1">{item.title}</h3>
          <p className="text-dark-400 text-sm font-medium mb-3">{item.institution}</p>
          <p className="text-dark-300 text-sm leading-relaxed mb-4">{item.description}</p>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="space-y-2">
              {item.achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-dark-300">
                  <span className="text-primary-400 mt-0.5 shrink-0">▹</span>
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="relative py-20">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and professional experiences that shaped my skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
