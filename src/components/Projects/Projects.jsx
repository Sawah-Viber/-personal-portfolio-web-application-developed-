import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Teamify',
    subtitle: 'Team Management App',
    description: 'A comprehensive Flutter application for team management with real-time collaboration, task tracking, security alerts, and role-based access control.',
    tags: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
    color: '#6c63ff',
    icon: '👥',
    links: { github: '#', live: '#' },
    featured: true,
  },
  {
    id: 2,
    title: 'NLP Web App',
    subtitle: 'Natural Language Processing',
    description: 'An interactive NLP learning platform built with Flask featuring N-Gram models, fill-in-the-blank quizzes, and text preprocessing pipelines.',
    tags: ['Python', 'Flask', 'NLP', 'JavaScript'],
    color: '#00d4aa',
    icon: '🧠',
    links: { github: '#', live: '#' },
    featured: true,
  },
  {
    id: 3,
    title: 'Bone Fracture Detection',
    subtitle: 'Computer Vision / ML',
    description: 'A YOLO11-based deep learning model for automated bone fracture detection in medical X-ray images with high accuracy classification.',
    tags: ['Python', 'YOLO11', 'ML', 'OpenCV'],
    color: '#ff6b9d',
    icon: '🦴',
    links: { github: '#' },
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: 'Modern React App',
    description: 'A stunning, responsive portfolio website built with React and Vite featuring smooth animations, dark theme, and modern design.',
    tags: ['React', 'Vite', 'CSS3', 'JavaScript'],
    color: '#ffa726',
    icon: '🌐',
    links: { github: '#', live: '#' },
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

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
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters animate-on-scroll">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {allTags.slice(0, 6).map(tag => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card animate-on-scroll ${project.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card glow */}
              <div className="project-card-glow" style={{ background: project.color }} />

              {/* Card header */}
              <div className="project-card-top">
                <div className="project-icon" style={{ background: `${project.color}20`, color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <h3 className="project-title">{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
              <p className="project-description">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
