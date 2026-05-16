import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'Flutter Developer',
  'React Developer',
  'ML Engineer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated background elements */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* Decorative ring */}
      <div className="hero-ring"></div>

      <div className="container hero-content">
        <div className="hero-badge" style={{ animationDelay: '0.2s' }}>
          <span className="badge-dot"></span>
          Available for work
        </div>

        <h1 className="hero-title" style={{ animationDelay: '0.4s' }}>
          Hi, I'm <span className="hero-name">Sawah</span>
        </h1>

        <div className="hero-role-wrapper" style={{ animationDelay: '0.6s' }}>
          <span className="hero-role-prefix">{'>'} </span>
          <span className="hero-role">{text}</span>
          <span className="hero-caret">|</span>
        </div>

        <p className="hero-description" style={{ animationDelay: '0.8s' }}>
          I build exceptional digital experiences with modern technologies.
          Passionate about creating elegant solutions that make a real impact.
        </p>

        <div className="hero-actions" style={{ animationDelay: '1s' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')} id="view-projects-btn">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')} id="contact-btn">
            <span>Get In Touch</span>
          </button>
        </div>

        <div className="hero-stats" style={{ animationDelay: '1.2s' }}>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
