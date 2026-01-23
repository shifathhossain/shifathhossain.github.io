import { BookOpen, ExternalLink, Calendar, Award, FileText } from "lucide-react";

export function Research() {
  const researchProject = {
    title: "Early Prediction of Multi-Label Care Escalation Triggers in the ICU Using EHRs",
    institution: "St. John's University",
    period: "2025",
    description: "Research on improving Raft consensus algorithm performance in high-latency networks. Developed novel approach reducing consensus time by 35%.",
    publications: [
      {
        title: "Early Prediction of Multi-Label Care Escalation Triggers in the ICU Using Electronic Health Records",
        venue: "IEEE HealthCom",
        link: "https://arxiv.org/abs/2509.18145",
        year: "2025"
      }
    ],
    technologies: [" ", "Distributed Systems", "Consensus Algorithms"],
    status: "published"
  };

  return (
    <section id="research" className="research-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Research</span>
          <h2 className="section-title">
            Academic <span className="title-highlight">Research</span>
          </h2>
          <p className="section-description">
            Exploring cutting-edge problems in distributed systems, databases, and algorithms
          </p>
        </div>
        
        <div className="research-grid">
          <div className="research-card">
            <div className="research-header">
              <div className="research-icon-wrapper">
                <BookOpen className="research-icon" />
              </div>
              <div className="research-status">
                {researchProject.status === 'published' ? (
                  <span className="status-badge published">
                    <Award className="status-icon" />
                    Published
                  </span>
                ) : (
                  <span className="status-badge ongoing">
                    <span className="status-dot"></span>
                    Ongoing
                  </span>
                )}
              </div>
            </div>
            
            <div className="research-content">
              <h3 className="research-title">{researchProject.title}</h3>
              <div className="research-meta">
                <span className="research-institution">{researchProject.institution}</span>
                <span className="research-period">
                  <Calendar className="period-icon" />
                  {researchProject.period}
                </span>
              </div>
              
              <p className="research-description">{researchProject.description}</p>
              
              {researchProject.publications.length > 0 && (
                <div className="research-publications">
                  <h4 className="publications-title">Publications:</h4>
                  {researchProject.publications.map((pub, i) => (
                    <a 
                      key={i} 
                      href={pub.link} 
                      className="publication-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="pub-icon" />
                      <div className="pub-info">
                        <span className="pub-title">{pub.title}</span>
                        <span className="pub-venue">{pub.venue} ({pub.year})</span>
                      </div>
                      <ExternalLink className="pub-external" />
                    </a>
                  ))}
                </div>
              )}
              
              <div className="research-techs">
                {researchProject.technologies.map((tech, i) => (
                  <span key={i} className="research-tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
