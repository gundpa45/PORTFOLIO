'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';

export default function Hero() {
  const { scrollY } = useScroll();
  // Fade out the starry grid and glowing lights as user scrolls down
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.3, 0]);
  // Fade out the large geometric dark star
  const starOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className={styles.heroSection} id="home">
      {/* Background Glowing Lights & Starry Grid */}
      <motion.div 
        className={styles.glowOverlay}
        style={{ opacity: overlayOpacity }}
      >
        <div className={styles.glowLight} />
        <div className={styles.glowLight2} />
      </motion.div>

      {/* Dark Glowing Star */}
      <motion.div 
        className={styles.starContainer}
        style={{ opacity: starOpacity }}
      >
        <svg viewBox="0 0 512 512" className={styles.darkStar}>
          <path d="M256 0L304 208L512 256L304 304L256 512L208 304L0 256L208 208L256 0Z" />
        </svg>
      </motion.div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h2 className={`${styles.heroRole} animate-fade-in`}>FULL STACK DEVELOPER</h2>
          <h1 className={`${styles.heroTitle} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
            Hi! I'm, <br/>
             VISHNU RATHOD. <br />
            A creative developer building high-performance web solutions.
          </h1>
          
          <div className={`${styles.heroCtaGroup} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            <Link href="https://drive.google.com/file/d/1EXwTCiUQNDh3c8r5h3iuiCEaEsKz2hBN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Download Resume
            </Link>
          </div>

          <div className={`${styles.heroStats} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.statItem}>
              <h3>0.5</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>2</h3>
              <p>Completed Projects</p>
            </div>
            <div className={styles.statItem}>
              <h3>5K+</h3>
              <p>Hours Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
