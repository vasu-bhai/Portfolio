import { aboutData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into who I am, what drives me, and what I love building.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Profile Card */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card p-6 text-center">
              {/* Avatar Placeholder */}
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-dark-600/50 flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-6xl">👨‍💻</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {aboutData.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="bg-dark-700/50 rounded-xl p-3 border border-dark-600/30"
                  >
                    <div className="text-xl font-bold gradient-text">{item.value}</div>
                    <div className="text-xs text-dark-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio Text */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-5">
              {aboutData.paragraphs.map((para, i) => (
                <p key={i} className="text-dark-300 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Interest Tags */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-3">
                Interests & Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'Artificial Intelligence',
                  'Machine Learning',
                  'System Design',
                  'Open Source',
                  'Mobile Development',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium hover:bg-primary-500/20 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume CTA */}
            <div className="mt-8">
              <a
                href="#"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
