import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = ["Software Engineer", "Full Stack Developer", "Systems Architect"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`hero-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Sparkles className="logo-icon" />
            <span>Portfolio</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="title-name">
            <span className="name-gradient">Alex Chen</span>
            <span className="name-emoji">👋</span>
          </span>
        </h1>
        
        <div className="hero-role">
          <span className="role-prefix">I'm a</span>
          <span className="role-text" key={currentRole}>
            {roles[currentRole]}
          </span>
        </div>
        
        <p className="hero-description">
          Building scalable systems and crafting exceptional user experiences.
          Passionate about clean code, innovative solutions, and continuous learning.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <span className="btn-arrow">→</span>
          </a>
          <a href="/resume.pdf" className="btn btn-secondary" download>
            <Download className="btn-icon" />
            Download Resume
          </a>
        </div>
        
        <div className="hero-social">
          <a 
            href="https://github.com/alexchen" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="social-icon" />
          </a>
          <a 
            href="https://linkedin.com/in/alexchen" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="social-icon" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail className="social-icon" />
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </header>
  );
}
