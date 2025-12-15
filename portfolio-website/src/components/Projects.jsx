import projects from '../assets/data/projects';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiHtml5, SiCss3, 
  SiNextdotjs, SiC, SiRaspberrypi, SiOpenai
} from 'react-icons/si';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

function Projects() {
  const techIcons = {
    'Python': SiPython,
    'JavaScript': SiJavascript,
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
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 rounded-xl glass-surface flex flex-col min-h-[280px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px]"
            >
              {/* Project Image */}
              {/* <div className="mb-6 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div> */}
              
              {/* Project Content */}
              <div className="flex flex-col h-full">
                <div className="flex-[0.6]" aria-hidden="true" />

                <div className="flex items-center justify-between mb-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:scale-[1.02]" style={{ transformOrigin: 'left center' }}>
                  <h3 className="card-title2">
                    {project.title}
                  </h3>
                  <span className="text-slate-400 relative">
                    <FaFolder size={20} className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
                    <FaFolderOpen size={20} className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                  </span>
                </div>
                
                <p className="font-sans text-[17px] font-normal text-slate-700 tracking-wide leading-snug" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'}}>
                  {project.description}
                </p>

                {/* Revealed on hover */}
                <div className="transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-8 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[280px] group-hover:mt-6 pointer-events-none group-hover:pointer-events-auto space-y-5">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies
                      .filter(tech => techIcons[tech])
                      .map((tech) => {
                        const Icon = techIcons[tech];
                        return (
                          <div
                            key={tech}
                            className="flex items-center justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 group-hover:opacity-100"
                            title={tech}
                            style={{ transitionDelay: '120ms' }}
                          >
                            <Icon 
                              size={32} 
                              style={{ 
                                color: 'var(--accent-purple, #3A2456b3)',
                                filter: 'drop-shadow(0 0px 1px rgba(58, 36, 86, 0.3))'
                              }} 
                            />
                          </div>
                        );
                      })}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                        style={{
                          background: 'var(--accent-purple, #3A2456b3)',
                          backdropFilter: 'blur(16px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                          border: '1.5px solid var(--accent-purple-border, #3A245650)',
                          boxShadow: '0px 1px 3px var(--accent-purple-shadow, #3A245666)'
                        }}
                      >
                        View Live
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                         className="inline-block px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                        style={{
                          background: 'var(--accent-purple, #3A2456b3)',
                          backdropFilter: 'blur(16px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                          border: '1.5px solid var(--accent-purple-border, #3A245650)',
                          boxShadow: '0px 1px 3px var(--accent-purple-shadow, #3A245666)'
                        }}
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="p-12 max-w-4xl mx-auto rounded-xl glass-surface">
            <h3 className="text-3xl font-light text-slate-900 mb-6">More Projects</h3>
            <p className="text-lg font-normal text-slate-700 mb-8">
              Explore my complete portfolio on GitHub to see all my work and contributions.
            </p>
            <a 
              href="https://github.com/ronit127" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-200 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
              style={{
                background: 'var(--accent-purple, #3A2456b3)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                border: '1.5px solid var(--accent-purple-border, #3A245650)',
                boxShadow: '0px 1px 3px var(--accent-purple-shadow, #3A245666)'
              }}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;