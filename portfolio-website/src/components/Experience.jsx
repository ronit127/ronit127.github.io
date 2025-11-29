
function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Butterflo Inc.',
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
            <div key={index} className="p-8 md:p-10 rounded-xl hover:shadow-lg transition-shadow duration-300" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              border: '0px solid rgba(62, 62, 62, 0.4)',
              boxShadow: '0px 1px 2px grey'
            }}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-slate-700 mb-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <p className="text-base font-medium text-slate-700 md:text-right">
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-slate-400 mr-3 flex-shrink-0">•</span>
                    <span className="text-base text-slate-700 leading-relaxed">
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
