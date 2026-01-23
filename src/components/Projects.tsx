import { Server, Users, Database, Code, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      name: "Distributed Task Scheduler",
      description: "High-performance job scheduling system for multi-tenant compute clusters",
      problem: "Reducing job latency in multi-tenant compute clusters",
      stack: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      outcome: "Reduced average task latency by 43% under load",
      link: "/projects/task-scheduler",
      github: "https://github.com/alexchen/task-scheduler",
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
      color: "#3b82f6"
    },
    {
      name: "Real-time Collaborative Editor",
      description: "Conflict-free replicated data types for seamless multi-user editing",
      problem: "Implementing conflict-free replicated data types for text editing",
      stack: ["TypeScript", "WebSocket", "Yjs", "React", "Node.js"],
      outcome: "Supports 100+ concurrent users with <50ms sync time",
      link: "/projects/collaborative-editor",
      github: "https://github.com/alexchen/collab-editor",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      color: "#a855f7"
    },
    {
      name: "Database Query Optimizer",
      description: "Advanced query optimization engine for time-series data",
      problem: "Optimizing join operations for time-series data",
      stack: ["Rust", "SQLite", "LLVM", "C++"],
      outcome: "3.2x faster queries on 10M+ row datasets",
      link: "/projects/query-optimizer",
      github: "https://github.com/alexchen/query-optimizer",
      icon: Database,
      gradient: "from-teal-500 to-emerald-500",
      color: "#14b8a6"
    },
    {
      name: "AI Code Assistant",
      description: "Intelligent code completion and refactoring tool",
      problem: "Enhancing developer productivity with AI-powered suggestions",
      stack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      outcome: "40% reduction in coding time for repetitive tasks",
      link: "/projects/ai-assistant",
      github: "https://github.com/alexchen/ai-assistant",
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      color: "#f97316"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="title-highlight">Projects</span>
          </h2>
          <p className="section-description">
            A collection of projects showcasing my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={`project-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ '--project-color': project.color } as React.CSSProperties}
              >
                <div className="project-header">
                  <div className={`project-icon-wrapper bg-gradient-to-br ${project.gradient}`}>
                    <Icon className="project-icon" />
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="link-icon" />
                    </a>
                    <a 
                      href={project.link}
                      className="project-link-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="link-icon" />
                    </a>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">
                    <a href={project.link}>{project.name}</a>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-stack">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-outcome">
                    <span className="outcome-icon">✨</span>
                    <span>{project.outcome}</span>
                  </div>
                </div>
                
                <div className="project-hover-effect"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
