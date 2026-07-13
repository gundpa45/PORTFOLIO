'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.scss';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Software Developer Intern',
      company: 'GameChange Energy',
      location: 'Mumbai, Maharashtra',
      period: 'Mar 2026 — Jun 2026',
      bullets: [
        'Architected and deployed an enterprise-grade, full-stack web and mobile workforce management ecosystem featuring secure, role-based access control (RBAC) across Admin, Supervisor, and Worker tiers.',
        'Engineered automated evaluation logic for real-time efficiency tracking, work verification, and dynamic task reassignment — eliminating historical data discrepancies.',
        'Developed an automated reporting engine generating complex Excel and PDF productivity analytics, slashing management tracking overhead by 25%.',
        'Orchestrated end-to-end DevOps pipeline and multi-platform production deployments, maintaining zero-downtime operations for 200–300 daily active users.'
      ],
      tags: ['React', 'Node.js', 'Flutter', 'MongoDB', 'RBAC', 'DevOps']
    }
  ];

  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <motion.p 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.p>

        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Where I've worked
        </motion.h2>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              className={styles.experienceItem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <p className={styles.expCompany}>{exp.company} · {exp.location}</p>
                </div>
                <span className={styles.expPeriod}>{exp.period}</span>
              </div>

              <ul className={styles.expBullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className={styles.expBullet}>{bullet}</li>
                ))}
              </ul>

              <div className={styles.expTags}>
                {exp.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
