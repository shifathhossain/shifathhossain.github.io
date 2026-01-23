import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development of microservices architecture serving 10M+ users. Optimized database queries resulting in 60% performance improvement.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      type: "work"
    },
    {
      title: "Software Engineering Intern",
      company: "Stripe",
      period: "2021 - 2022",
      description: "Worked on payments infrastructure, implementing new features and optimizing existing systems. Contributed to open-source projects.",
      technologies: ["Go", "Ruby", "PostgreSQL"],
      type: "work"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: "Built MVP from scratch, including frontend, backend, and deployment infrastructure. Scaled to handle 50K+ users.",
      technologies: ["React", "Python", "MongoDB", "Docker"],
      type: "work"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Professional <span className="title-highlight">Experience</span>
          </h2>
          <p className="section-description">
            My career journey and professional achievements
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker">
                <Briefcase className="marker-icon" />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    {item.company && (
                      <span className="timeline-company">{item.company}</span>
                    )}
                  </div>
                  <span className="timeline-period">
                    <Calendar className="period-icon" />
                    {item.period}
                  </span>
                </div>
                
                <p className="timeline-description">{item.description}</p>
                
                {item.technologies && (
                  <div className="timeline-techs">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

