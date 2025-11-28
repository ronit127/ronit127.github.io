import React from 'react';
import projects from '../assets/data/projects';

function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-8 rounded-xl" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.28)',
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
                  <div className="text-mono text-sm text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <p className="body-text mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => {
                    const colors = ['#2D1B3E', '#3A2456', '#4A3362'];
                    const bgColor = colors[1];
                    return (
                      <span
                        key={tech}
                        className="px-3 py-1 text-white rounded-sm text-sm font-normal whitespace-nowrap snap-start flex-shrink-0"
                        style={{
                          background: `${bgColor}b3`,
                          backdropFilter: 'blur(16px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                          border: `1.5px solid ${bgColor}50`,
                          boxShadow: `0px 1px 3px ${bgColor}66`
                        }}
                      >
                        {tech}
                      </span>
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
                      className="flex-1 text-center px-4 py-2 rounded-lg text-white font-medium transition-opacity hover:opacity-75"
                      style={{
                        background: 'linear-gradient(135deg, #3A2456e6 0%, #3A2456b3 50%, #3A2456cc 100%)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '2.5px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 7px #3A245699'
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
                      className="flex-1 text-center px-4 py-2 rounded-lg text-white font-medium transition-opacity hover:opacity-75"
                      style={{
                        background: 'linear-gradient(135deg, #4A3362e6 0%, #4A3362b3 50%, #4A3362cc 100%)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '2.5px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 7px #4A336299'
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
            backgroundColor: 'rgba(255, 255, 255, 0.28)',
            border: '0px solid rgba(62, 62, 62, 0.4)',
            boxShadow: '0px 1px 2px grey'
          }}>
            <h3 className="text-3xl font-light text-slate-900 mb-6">More Projects</h3>
            <p className="text-lg font-normal text-slate-600 mb-8">
              Explore my complete portfolio on GitHub to see all my work and contributions.
            </p>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-75"
              style={{
                background: 'linear-gradient(135deg, #2D1B3Ee6 0%, #2D1B3Eb3 50%, #2D1B3Ecc 100%)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                border: '2.5px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 7px #2D1B3E99'
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