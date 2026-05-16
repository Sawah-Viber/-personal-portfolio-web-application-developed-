import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate developer driven by creating impactful digital solutions
          </p>
        </div>

        <div className="about-grid">
          <div className="about-visual animate-on-scroll">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <div className="avatar-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="about-image-border"></div>
              <div className="about-image-dots">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="dot" />
                ))}
              </div>
            </div>

            <div className="about-code-card">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <span className="code-filename">about.js</span>
              </div>
              <pre className="code-body">
{`const developer = {
  name: "Sawah",
  role: "Full Stack Dev",
  loves: ["Clean Code",
          "UI/UX", "ML"],
  coffee: true ☕
};`}
              </pre>
            </div>
          </div>

          <div className="about-content animate-on-scroll">
            <h3 className="about-heading">
              Crafting Digital Experiences<br />
              <span className="about-heading-accent">With Passion & Precision</span>
            </h3>

            <p className="about-text">
              I'm a Full Stack Developer with a strong passion for building modern, 
              responsive, and user-friendly applications. My journey in tech has equipped 
              me with a diverse skill set spanning mobile development, web applications, 
              and machine learning.
            </p>

            <p className="about-text">
              I believe in writing clean, maintainable code and creating seamless user 
              experiences. Whether it's crafting a beautiful UI in Flutter, building 
              scalable web apps with React, or training ML models — I bring dedication 
              and creativity to every project.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Turning complex challenges into elegant solutions</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div>
                  <h4>Fast Learner</h4>
                  <p>Always exploring new technologies and frameworks</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div>
                  <h4>Creative Thinker</h4>
                  <p>Designing intuitive and beautiful interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
