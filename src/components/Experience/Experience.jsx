import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    period: '2024 - Present',
    title: 'Full Stack Developer',
    company: 'Freelance',
    description: 'Building full-stack web and mobile applications using React, Flutter, and Python. Delivering high-quality solutions for diverse clients.',
    technologies: ['React', 'Flutter', 'Python', 'Firebase'],
    icon: '💼',
    color: '#6c63ff',
  },
  {
    period: '2024',
    title: 'Mobile App Developer',
    company: 'Teamify Project',
    description: 'Led the development of Teamify, a comprehensive team management application built with Flutter featuring real-time collaboration and security features.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    icon: '📱',
    color: '#00d4aa',
  },
  {
    period: '2024',
    title: 'ML / AI Developer',
    company: 'Research Project',
    description: 'Developed a bone fracture detection system using YOLO11 for medical X-ray image analysis with high-accuracy object detection.',
    technologies: ['Python', 'YOLO11', 'OpenCV', 'Deep Learning'],
    icon: '🤖',
    color: '#ff6b9d',
  },
  {
    period: '2023 - 2024',
    title: 'Web Developer',
    company: 'NLP Project',
    description: 'Created an interactive NLP learning platform with N-Gram language models, text preprocessing, and dynamic quiz functionality.',
    technologies: ['Python', 'Flask', 'JavaScript', 'NLP'],
    icon: '🌐',
    color: '#ffa726',
  },
];

const education = [
  {
    period: '2022 - Present',
    title: 'Computer Science',
    institution: 'University',
    description: 'Studying computer science with focus on software engineering, algorithms, and artificial intelligence.',
    icon: '🎓',
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }}></div>
              <div className="timeline-card">
                <span className="timeline-period">{exp.period}</span>
                <div className="timeline-card-icon">{exp.icon}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="timeline-tech-tag" style={{ borderColor: `${exp.color}40`, color: exp.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          {education.map((edu, index) => (
            <div
              key={`edu-${index}`}
              className="timeline-item animate-on-scroll left"
              style={{ transitionDelay: `${(experiences.length + index) * 0.15}s` }}
            >
              <div className="timeline-dot education-dot"></div>
              <div className="timeline-card education-card">
                <span className="timeline-period">{edu.period}</span>
                <div className="timeline-card-icon">{edu.icon}</div>
                <h3 className="timeline-title">{edu.title}</h3>
                <span className="timeline-company">{edu.institution}</span>
                <p className="timeline-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
