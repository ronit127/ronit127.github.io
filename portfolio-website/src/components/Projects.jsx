import projects from "../assets/data/projects";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiC,
  SiRaspberrypi,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import FeaturedProject from "./FeaturedProject";

function Projects() {
  const techIcons = {
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    React: SiReact,
    NextJS: SiNextdotjs,
    Flask: SiFlask,
    HTML: SiHtml5,
    CSS: SiCss3,
    C: SiC,
    "Raspberry Pi": SiRaspberrypi,
    "OpenAI API": SiOpenai,
  };

  return (
    <section id="projects" className="py-24">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <h2 className="section-title">Portfolio</h2>

        <div className="mb-8 md:mb-12 max-w-6xl mx-auto pt-0 px-4 sm:px-0">
          <FeaturedProject />

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              const repoHref = project.repoLink || null;
              const liveHref = project.liveLink || null;
              return (
                <div
                  key={index}
                  className="flex flex-col p-6"
                  style={{
                    border: "1px solid rgba(150,150,150,0.18)",
                    borderRadius: "6px",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="card-title !mb-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {repoHref && (
                        <a
                          href={repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm underline transition-opacity duration-150 hover:opacity-60"
                          style={{ color: "var(--text-muted)" }}
                        >
                          GitHub
                        </a>
                      )}
                      {liveHref && liveHref !== repoHref && (
                        <a
                          href={liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm underline transition-opacity duration-150 hover:opacity-60"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <p
                    className="font-sans text-lg font-normal"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4">
                    {project.technologies
                      .filter((tech) => techIcons[tech])
                      .map((tech) => {
                        const Icon = techIcons[tech];
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 text-md font-normal"
                            style={{ color: "#3A2456b3" }}
                          >
                            <Icon size={13} style={{ flexShrink: 0 }} />
                            {tech}
                          </span>
                        );
                      })}
                  </div>

                  {project.badges && project.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-3 py-1 text-white text-sm font-normal rounded-sm"
                          style={{
                            background: "#3A2456b3",
                            border: "1px solid #3A245650",
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-24 text-center">
            <div className="p-12 rounded-md glass-surface">
              <h3
                className="text-3xl tracking-tight-px font-light text-slate-900 mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                More Projects
              </h3>
              <p
                className="text-lg tracking-tight-px font-normal text-slate-700 mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                Explore my complete portfolio on GitHub to see all my work and
                contributions.
              </p>
              <a
                href="https://github.com/ronit127"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View all projects on GitHub (opens in new tab)"
                className="inline-flex items-center px-5 py-2 gap-1.5 rounded-md text-white font-normal text-sm transition-all duration-200 hover:brightness-[1.2] hover:shadow-lg active:shadow-none active:translate-y-[1px] active:brightness-[1.4]"
                style={{
                  background: "#3A2456b3",
                  border: "1px solid var(#2e1f48, #3A245650)",
                  boxShadow: "inset 0 1px 3px hsla(0, 0%, 0%, 0.30) ",
                }}
              >
                <FiArrowUpRight size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
