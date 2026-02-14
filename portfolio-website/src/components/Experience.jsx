import { FiArrowRight } from 'react-icons/fi';
import { renderTextWithTechChips } from '../lib/renderTextWithTechChips';

function Experience() {
  // No dark mode — always light
  const isDark = false;

  const renderHighlightWithTech = (text) => renderTextWithTechChips(text, false, 'text-md');
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Butterflo',
      location: 'Remote',
      period: 'Aug 2025 – Present',
      highlights: [
        'Built accessible, responsive React components using TypeScript and Tailwind CSS for a map-based property discovery platform'
        //  designing filtering UI with geographic diversity logic to improve user exploration across large \
        //  property datasets, supported by Cosmos DB spatial queries',
       , 'Developed a filtering UI with geographic diversity logic for better user exploration across property dataset, supported by Cosmos DB spatial queries',
      ]
    },
    {
      title: 'Software Project Lead',
      company: 'Project: Code @ UIUC',
      location: 'Urbana, IL',
      period: 'Jan 2025 – Present',
      highlights: [
        'Led student developer team to build a web-based Python editor with real-time visualizations of lists, stacks, queues, heaps, dictionaries and graphs',
        'Built a Flask REST API with a JavaScript and D3.js frontend for data structure visualizations',
        'Facilitated weekly code reviews. Delivered live demo presentations at project showcase with 100+ attendees'
      ]
    },
    {
      title: 'Research Software Engineer Intern',
      company: 'Portland State University, Teuscher Lab',
      location: 'Remote',
      period: 'May 2024 – Aug 2024',
      highlights: [
        'Created a Python personalized math learning tool with 1K+ question network graph',
        'Developed A* pathfinding algorithms improving performance by 18%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="mb-8 md:mb-12 max-w-6xl mx-auto pt-0 px-4 sm:px-0">
          <div className="space-y-4 mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="p-8 md:p-10 rounded-lg glass-surface">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="card-title leading-[25px] md:leading-[30px]">
                    {exp.title}
                  </h3>
                  <p className="text-lg mb-1 tracking-[-0.75px]" style={{color: 'var(--text-muted)'}}>
                    {exp.company}
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <p className="text-lg md:text-right tracking-tight-px" style={{color: 'var(--text-muted)'}}>
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiArrowRight className="mr-3 mt-[7px] flex-shrink-0" size={18} style={{ color: 'var(--accent-purple, #3A2456b3)' }} aria-hidden="true" />
                    <span className="font-sans text-lg tracking-[-0.75px] leading-[32px] md:leading-[28px] max-w-[75ch]" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', color: 'var(--text-muted)'}}>
                      {renderHighlightWithTech(highlight)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Experience;
