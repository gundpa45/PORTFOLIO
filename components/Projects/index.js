'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Velo',
      subtitle: 'AI Code Generation Platform',
      description: 'AI-powered platform that converts natural-language prompts into fully working Next.js applications using Groq/LLaMA 3. Features E2B cloud sandboxes, Inngest background jobs, tRPC type-safe backend, and a split-pane interface with live code preview.',
      techStack: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'E2B', 'Inngest', 'Clerk'],
      demoLink: null,
      sourceLink: 'https://github.com/gundpa45/Velo'
    },
    {
      id: 2,
      title: 'Journey Junkies',
      subtitle: 'Travel Platform',
      description: 'Full-stack travel platform promoting rural tourism with personalized destination recommendations, trip comparison, itinerary planning, and optimized travel routes built with REST APIs.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      demoLink: null,
      sourceLink: 'https://github.com/gundpa45/Journey-Jounkies'
    },
    {
      id: 3,
      title: 'ShopEssential',
      subtitle: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with authentication, product catalog, shopping cart, order management, RESTful APIs, and a dedicated admin dashboard delivering seamless cross-device experience.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      demoLink: null,
      sourceLink: null
    },
    {
      id: 4,
      title: 'Full Stack Blog',
      subtitle: 'Blog Application',
      description: 'Complete blog application featuring JWT authentication, post CRUD operations, Cloudinary image uploads, and email integration with a responsive frontend.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://fullstack-blogapp-1.onrender.com/',
      sourceLink: 'https://github.com/gundpa45/FullStack-BlogApp'
    }
  ];

  return (
    <section className={`section ${styles.projectsSection}`} id="projects">
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        You ideate, I build
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className={styles.projectItem}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <span className={styles.projectIndex}>
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className={styles.imagePlaceholder}>
              {/* Optional: we can put a real image here or just leave the stylistic placeholder */}
              [ Image / Diagram ]
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <span className={styles.projectSubtitle}>{project.subtitle}</span>
            <p className={styles.projectDesc}>{project.description}</p>

            <div className={styles.techTags}>
              {project.techStack.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>

            <div className={styles.projectLinks}>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Live ↗
                </a>
              )}
              {project.sourceLink && (
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Code ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
