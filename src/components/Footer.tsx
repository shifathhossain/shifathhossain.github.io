import { Github, Linkedin, Mail, FileText, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-title">Let's Build Something Amazing</h3>
              <p className="footer-description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="footer-location">
                <MapPin className="location-icon" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-column">
                <h4 className="footer-column-title">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#research">Research</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="/resume.pdf">Resume</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-column-title">Connect</h4>
                <ul className="footer-list">
                  <li>
                    <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">
                      <Github className="footer-link-icon" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="footer-link-icon" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:alex@example.com">
                      <Mail className="footer-link-icon" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-cta">
            <a href="mailto:alex@example.com" className="cta-button">
              <Mail className="cta-icon" />
              Get In Touch
            </a>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              Made with <Heart className="heart-icon" /> by Alex Chen
            </p>
            <p className="footer-year">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
