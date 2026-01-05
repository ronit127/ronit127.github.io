import projects from '../assets/data/projects';
import { useState, useEffect } from 'react';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiHtml5, SiCss3, 
  SiNextdotjs, SiC, SiRaspberrypi, SiOpenai, SiTypescript
} from 'react-icons/si';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

function Projects() {
  const [isDark, setIsDark] = useState(() => 
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const techIcons = {
    'Python': SiPython,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'NextJS': SiNextdotjs,
    'Flask': SiFlask,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'C': SiC,
    'Raspberry Pi': SiRaspberrypi,
    'OpenAI API': SiOpenai
  };

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 rounded-lg glass-surface flex flex-col min-h-[280px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
        
              <div className="flex flex-col h-full">
                <div className="flex-[0.6]" aria-hidden="true" />

                <div className="flex items-center justify-between mb-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:scale-[1.02]" style={{ transformOrigin: 'left center' }}>
                  <h3 className="card-title">
                    {project.title}
                  </h3>
                  <span className="text-slate-400 relative">
                    <FaFolder size={20} className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
                    <FaFolderOpen size={20} className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                  </span>
                </div>
                
                <p className="font-sans text-[17px] font-normal text-slate-700 tracking-wide leading-snug" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', letterSpacing:'-0.03em' }}>
                  {project.description}
                </p>

                <div className="transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-8 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[280px] group-hover:mt-6 pointer-events-none group-hover:pointer-events-auto space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .filter(tech => techIcons[tech])
                      .map((tech) => {
                        const Icon = techIcons[tech];
                        return (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-3 py-1 text-slate-700 rounded-sm text-sm font-normal whitespace-nowrap"
                            title={tech}
                            style={{
                              color: isDark ? 'rgb(248, 250, 252)' : '#3A2456b3',
                              background: 'var(--surface)',
                              border: isDark ? '1.5px solid #cbd5e1' : `1.5px solid #3A2456b3`
                            }}
                          >
                            <Icon 
                              size={16} 
                              style={{ flexShrink: 0 }}
                            />
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                  </div>
               
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`Open live project: ${project.title}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                        style={{
                          background: '#3A2456b3',
                          border: '1.5px solid var(--accent-purple-border, #3A245650)'
                        }}
                      >
                        <FiArrowUpRight size={16} />
                        View Live
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`Open source code for ${project.title}`}
                         className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                        style={{
                          background: '#3A2456b3',
                          border: '1.5px solid var(--accent-purple-border, #3A245650)'
                        }}
                      >
                        <FiArrowUpRight size={16} />
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
   
        <div className="mt-24 text-center">
          <div className="p-12 rounded-md glass-surface">
            <h3 className="text-3xl font-light text-slate-900 mb-6" style={{letterSpacing: '-0.05em'}}>More Projects</h3>
            <p className="text-lg font-normal text-slate-700 mb-8" style={{letterSpacing: '-0.03em'}}>
              Explore my complete portfolio on GitHub to see all my work and contributions.
            </p>
              <a 
                href="https://github.com/ronit127" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View all projects on GitHub (opens in new tab)"
                className="inline-flex items-center px-5 py-2 gap-1.5 rounded-md text-white font-normal text-sm transition-all duration-200 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:brightness-[1.4]"
              style={{
                background: '#3A2456b3',
                border: '1.5px solid var(--accent-purple-border, #3A245650)'
              }}
            >
              <FiArrowUpRight size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;