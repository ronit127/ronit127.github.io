import { FiArrowRight } from 'react-icons/fi';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Butterflo',
      location: 'Remote',
      period: 'Aug 2025 - Present',
      highlights: [
        'Built and refactored React components with TypeScript and Tailwind CSS',
        'Optimized CI/CD pipeline, cutting test execution times by 40%'
      ]
    },
    {
      title: 'Software Project Lead',
      company: 'Project: Code @ UIUC',
      location: 'Urbana, IL',
      period: 'Jan 2025 - Present',
      highlights: [
        'Led 17-member team building a Python editor with real-time visualizations',
        'Built Flask REST API with D3.js frontend for interactive data structure visualization'
      ]
    },
    {
      title: 'Research Software Engineer Intern',
      company: 'Portland State University, Teuscher Lab',
      location: 'Remote',
      period: 'May 2024 - Aug 2024',
      highlights: [
        'Created personalized math learning tool with 1K+ question network graph',
        'Developed A* pathfinding algorithms improving performance by 18%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-8 md:p-10 rounded-xl glass-surface hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="card-title2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-slate-700 mb-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <p className="text-slate-900 md:text-right">
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiArrowRight className="mr-3 flex-shrink-0 mt-0.5" size={18} style={{ color: 'var(--accent-purple, #3A2456b3)' }} aria-hidden="true" />
                    <span className="font-sans text-[17px] font-normal text-slate-700 tracking-wide leading-snug" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'}}>
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
