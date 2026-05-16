import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#6c63ff',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Mobile',
    icon: '📱',
    color: '#00d4aa',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 88 },
      { name: 'Firebase', level: 80 },
      { name: 'UI/UX Design', level: 85 },
    ],
  },
  {
    title: 'Backend & ML',
    icon: '⚙️',
    color: '#ff6b9d',
    skills: [
      { name: 'Python', level: 82 },
      { name: 'Flask', level: 78 },
      { name: 'Machine Learning', level: 75 },
      { name: 'YOLO / CV', level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#ffa726',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Problem Solving', level: 88 },
    ],
  },
];

const techLogos = [
  { name: 'React', icon: '⚛️' },
  { name: 'Flutter', icon: '💙' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Git', icon: '📊' },
  { name: 'Dart', icon: '🎯' },
  { name: 'HTML5', icon: '🌐' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.querySelectorAll('.animate-on-scroll').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Skills & Tech</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech marquee */}
        <div className="tech-marquee animate-on-scroll">
          <div className="marquee-track">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div key={i} className="marquee-item">
                <span className="marquee-icon">{tech.icon}</span>
                <span className="marquee-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills cards */}
        <div className="skills-grid">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              className="skill-card animate-on-scroll"
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                  {cat.icon}
                </div>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>

              <div className="skill-bars">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          background: cat.color,
                          transitionDelay: `${catIndex * 0.15 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
