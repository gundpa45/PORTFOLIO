'use client';

import { motion } from 'framer-motion';
import styles from './About.module.scss';

export default function About() {
  const achievements = [
    'Finalist at BNB Chain Mumbai Hackathon (Web3)',
    'Winner of the Pivot Ideathon',
    'Top 7 in Smart India Hackathon (2024)'
  ];

  return (
    <section className={`section ${styles.aboutSection}`} id="about">
      <div className="container">
        <motion.p 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.p>

        <div className={styles.aboutGrid}>
          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className={styles.heading}>
              A bit about me
            </h2>
            <p className={styles.aboutText}>
              I'm Vishnu Rathod, a final-year Computer Engineering student at Lokmanya Tilak College of Engineering, Mumbai. I build AI-integrated applications with LLMs, RAG pipelines, and production-ready MERN/Next.js architectures.
            </p>
            <p className={styles.aboutText}>
              I recently completed a software development internship at GameChange Energy, where I architected an enterprise workforce management system serving 200+ daily users. I'm passionate about building tools that solve real problems with clean, scalable code.
            </p>
          </motion.div>

          <div className={styles.aboutSidebar}>
            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className={styles.cardLabel}>Education</h3>
              <p className={styles.cardTitle}>Lokmanya Tilak College of Engineering</p>
              <p className={styles.cardSub}>B.E. Computer Engineering · CGPA 8.25/10</p>
              <p className={styles.cardMeta}>2023 — 2027 · Mumbai, India</p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className={styles.cardLabel}>Achievements</h3>
              <ul className={styles.achievementList}>
                {achievements.map((item, i) => (
                  <li key={i} className={styles.achievementItem}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
