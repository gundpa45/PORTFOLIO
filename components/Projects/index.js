'use client';

import styles from './Projects.module.scss';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Velo',
      description: 'AI-powered development platform that lets you create web applications by chatting with AI agents in real-time sandboxes.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'tRPC'],
      demoLink: '#',
      sourceLink: 'https://github.com/gundpa45/Velo'
    },
    {
      id: 2,
      title: 'Journey Junkies',
      description: 'A comprehensive trip planner with budget management and hotel comparison capabilities.',
      techStack: ['JavaScript', 'React', 'Vite', 'Tailwind CSS'],
      demoLink: '#',
      sourceLink: 'https://github.com/gundpa45/Journey-Jounkies'
    },
    {
      id: 3,
      title: 'Full Stack Blog',
      description: 'A complete blog application featuring JWT authentication, post CRUD operations, Cloudinary image uploads, and email integration.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://fullstack-blogapp-1.onrender.com/',
      sourceLink: 'https://github.com/gundpa45/FullStack-BlogApp'
    },
    {
      id: 4,
      title: 'CleverBook',
      description: 'My first fully frontend deployed project. A fast, responsive React application built to provide a seamless basic web experience.',
      techStack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
      demoLink: 'https://clever-book-ten.vercel.app',
      sourceLink: 'https://github.com/gundpa45/CleverBook'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">SELECTED PROJECTS</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id} className={`${styles.projectCard} glass-panel`}>
              <span className={styles.projectNumber}>_{String(index + 1).padStart(2, '0')}.</span>
              <div className="project-content">
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.projectTech}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.demoLink && project.demoLink !== '#' && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                      Live Demo
                    </a>
                  )}
                  {project.sourceLink && project.sourceLink !== '#' && (
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary} style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
