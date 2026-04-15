import { renderTextWithTechChips } from '../lib/renderTextWithTechChips';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Rivian',
    period: 'Summer 2026',
    highlights: [
      'Incoming Summer 2026. Will be building, testing, and deploying AI applications',
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Butterflo',
    period: 'Fall – Spring 2026',
    highlights: [
      'Built accessible, responsive React components using TypeScript and Tailwind CSS for a map-based property discovery platform',
      'Developed a filtering UI with geographic diversity logic for better user exploration across property datasets, supported by Cosmos DB spatial queries',
    ]
  },
  {
    title: 'Software Project Lead',
    company: 'Project: Code @ UIUC',
    period: 'Jan 2025 – Present',
    highlights: [
      'Led student developer team to build a web-based Python editor with real-time visualizations of lists, stacks, queues, heaps, dictionaries and graphs',
      'Built a Flask REST API with a JavaScript and D3.js frontend for data structure visualizations',
      'Facilitated weekly code reviews and delivered live demo presentations at project showcase with 100+ attendees',
    ]
  },
  {
    title: 'Research Software Engineer Intern',
    company: 'Portland State University, Teuscher Lab',
    period: 'Summer 2024',
    highlights: [
      'Created a Python personalized math learning tool with 1K+ question network graph',
      'Developed A* pathfinding algorithms improving performance by 18%',
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="pt-10 pb-24">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="mt-9 px-4 sm:px-5 space-y-8">
          {experiences.map((exp, index) => (
           <div>
              <div className="flex items-start justify-between gap-4 mb-[2px]">
                <h3 className="font-display font-medium text-2xl tracking-tight" style={{ color: 'var(--text)' }}>
                  {exp.company}
                </h3>
                <span
                  className="font-sans text-base shrink-0 rounded-md px-2 py-[3px] border"
                  style={{ color: 'var(--text-muted)', borderColor: 'rgba(150,150,150,0.3)' }}
                >
                  {exp.period}
                </span>
              </div>

              <p className="font-sans text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
                {exp.title}
              </p>

              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <p key={idx} className="font-sans text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {renderTextWithTechChips(highlight, false, 'text-sm')}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
