import { Code2, Briefcase, Award, Rocket, TrendingUp, Users, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function About() {
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Rocket, color: "#3b82f6" },
    { value: "5+", label: "Years Experience", icon: Briefcase, color: "#a855f7" },
    { value: "100%", label: "Client Satisfaction", icon: TrendingUp, color: "#14b8a6" },
    { value: "10+", label: "Technologies Mastered", icon: Code2, color: "#f97316" }
  ];

  const skills = [
    { name: "Frontend", technologies: ["React", "TypeScript", "Next.js", "Vue.js"], level: 95 },
    { name: "Backend", technologies: ["Node.js", "Python", "Go", "Rust"], level: 90 },
    { name: "DevOps", technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"], level: 85 },
    { name: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"], level: 88 }
  ];

  return (
    <section id="skills" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Skills & <span className="title-highlight">Expertise</span>
          </h2>
          <p className="section-description">
            A passionate developer with expertise across the full stack
          </p>
        </div>

        <div className="stats-grid" ref={statsRef}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`stat-card ${visibleStats ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <Icon className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-techs">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="skill-tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Building the Future, One Line of Code at a Time</h3>
            <p>
              I'm a software engineer passionate about creating impactful solutions. With expertise 
              spanning frontend, backend, and infrastructure, I bring ideas to life through clean, 
              scalable code.
            </p>
            <p>
              My journey includes building distributed systems, optimizing database performance, and 
              crafting intuitive user interfaces. I thrive in collaborative environments and am 
              always eager to tackle new challenges.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <Zap className="highlight-icon" />
                <span>Fast & Efficient Solutions</span>
              </div>
              <div className="highlight-item">
                <Users className="highlight-icon" />
                <span>Team Collaboration</span>
              </div>
              <div className="highlight-item">
                <Award className="highlight-icon" />
                <span>Quality First Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
