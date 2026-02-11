import projects from '../assets/data/projects';
import { useState, useEffect } from 'react';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiHtml5, SiCss3, 
  SiNextdotjs, SiC, SiRaspberrypi, SiOpenai, SiTypescript
} from 'react-icons/si';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import FeaturedProject from './FeaturedProject';

function Projects() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = window.localStorage?.getItem('prefers-dark');
      if (stored !== null) return stored === 'true';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    }
  });

  useEffect(() => {
    try {
      const stored = window.localStorage?.getItem('prefers-dark');
      if (stored !== null) {
        setIsDark(stored === 'true');
      } else if (window.matchMedia) {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    } catch (e) {}

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
        
        <FeaturedProject />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const hasLink = Boolean(project.repoLink || project.liveLink);
            const href = project.repoLink || project.liveLink;
            const Tag = hasLink ? 'a' : 'div';
            return (
              <Tag
                key={index}
                {...(hasLink ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': project.repoLink ? `View source for ${project.title}` : `View live for ${project.title}` } : {})}
                className={`group block relative overflow-visible p-8 rounded-lg glass-surface flex-col min-h-[200px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]` + (hasLink ? ' active:translate-y-[1px]' : '')}
                onMouseEnter={(e) => hasLink && (e.currentTarget.style.filter = 'brightness(1.009)')}
                onMouseLeave={(e) => hasLink && (e.currentTarget.style.filter = '')}
              >
        
                <div className="flex flex-col h-full">

                  {/* title and arrow link */}
                  <div className="flex items-center justify-between mb-3" style={{ transformOrigin: 'left center' }}>
                    <h3 className="card-title text-[var(--text-muted)] group-hover:!text-[var(--text-purple)]">
                      <span className="relative inline-flex items-center">
                        <span>{project.title}</span>
                      </span>
                    </h3>
                    {hasLink && (
                      <span className="text-[var(--text-muted)] relative inline-flex items-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[var(--text-strong)] group-hover:translate-x-2 group-hover:-translate-y-2 flex-shrink-0">
                        <FiArrowUpRight size={20} />
                      </span>
                    )}
                  </div>
                  
                  <p className="font-sans text-ui-17 font-normal tracking-tight-px" style={{color: 'var(--text-muted)', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    {project.description}
                  </p>
                  
                  {/* tech chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
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
                              boxShadow: isDark ? 'inset 0 0 0 1px #cbd5e1' : `inset 0 0 0 1px #3A245657`
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
                  
                  {/* flex badges */}
                  {project.badges && project.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-3 py-1 text-white rounded-sm text-sm font-normal whitespace-nowrap flex-shrink-0"
                          style={{
                            background: '#3A2456b3',
                            boxShadow: 'inset 0 0 0 1px #3A245650',
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
   
        <div className="mt-24 text-center">
          <div className="p-12 rounded-md glass-surface">
            <h3 className="text-3xl tracking-tight-px font-light text-slate-900 mb-6" style={{color: 'var(--text-muted)'}}>More Projects</h3>
            <p className="text-lg tracking-tight-px font-normal text-slate-700 mb-8" style={{color: 'var(--text-muted)'}}>
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
                border: '1px solid var(#2e1f48, #3A245650)',
                boxShadow: 'inset 0 1px 3px hsla(0, 0%, 0%, 0.30) '
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