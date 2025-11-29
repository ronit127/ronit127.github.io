import projects from '../assets/data/projects';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiHtml5, SiCss3, 
  SiNextdotjs, SiC, SiRaspberrypi, SiOpenai
} from 'react-icons/si';

function Projects() {
  // Map tech names to their icons
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
            <div key={index} className="p-8 rounded-xl" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              border: '0px solid rgba(62, 62, 62, 0.4)',
              boxShadow: '0px 1px 2px grey'
            }}>
              {/* Project Image */}
              {/* <div className="mb-6 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div> */}
              
              {/* Project Content */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="card-title">
                    {project.title}
                  </h3>
                  <div className="text-mono text-sm text-slate-700">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <p className="body-text mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.technologies
                    .filter(tech => techIcons[tech])
                    .map((tech) => {
                      const Icon = techIcons[tech];
                      return (
                        <div
                          key={tech}
                          className="flex items-center justify-center"
                          title={tech}
                        >
                          <Icon 
                            size={32} 
                            style={{ 
                              color: '#3A2456b3',
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
                      className="inline-block px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-200 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                      style={{
                        background: '#3A2456b3',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '1.5px solid #3A245650',
                        boxShadow: '0px 1px 3px #3A245666'
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
                      className="inline-block px-5 py-2 rounded-md text-white font-normal text-sm transition-all duration-200 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:scale-100 active:brightness-[1.4]"
                      style={{
                        background: '#3A2456b3',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '1.5px solid #3A245650',
                        boxShadow: '0px 1px 3px #3A245666'
                      }}
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="p-12 max-w-4xl mx-auto rounded-xl" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '0px solid rgba(62, 62, 62, 0.4)',
            boxShadow: '0px 1px 2px grey'
          }}>
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
                background: '#3A2456b3',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                border: '1.5px solid #3A245650',
                boxShadow: '0px 1px 3px #3A245666'
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