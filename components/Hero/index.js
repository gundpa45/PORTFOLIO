'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';
import styles from './Hero.module.scss';
import SpotifyWidget from '@/components/SpotifyWidget';

export default function Hero() {
  const socials = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/vishnu-rathod-0105/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/gundpa45', label: 'GitHub' },
    { icon: FaXTwitter, href: 'https://x.com/', label: 'X' },
  ];

  return (
    <section className={styles.heroSection} id="home">
      {/* ── Geometric grid texture overlay ── */}
      <div className={styles.textureOverlay} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        {/* ── Left column: Text content ── */}
        <div className={styles.heroContent}>

          <motion.div 
            className={styles.heroBadge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.8 }}
          >
            <span className={styles.statusDot} />
            Available for work
          </motion.div>

          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 4.0, ease: [0.4, 0, 0.2, 1] }}
          >
            Building AI-integrated<br />
            applications &amp; scalable<br />
            <span className={styles.titleEmphasis}>web experiences.</span>
          </motion.h1>

          <motion.p 
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Vishnu Rathod — Full-stack developer working with LLMs, RAG pipelines,<br className={styles.brDesktop} />
            and production-ready MERN / Next.js architectures.
          </motion.p>

          <motion.div 
            className={styles.heroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link 
              href="https://drive.google.com/file/d/1u210YwM2OvxzMzZQpNKpfWRJvdSOrcSC/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnPrimary}
            >
              Resume ↗
            </Link>
            <Link href="#projects" className={styles.btnGhost}>
              View work
            </Link>
          </motion.div>

        </div>

        {/* ── Right column: Spotify widget + socials ── */}
        <div className={styles.heroRight}>
          <SpotifyWidget />

          {/* Decorative coordinates label */}
          <motion.div 
            className={styles.coordsLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5.2 }}
          >
            <span>19.0760° N, 72.8777° E</span>
            <span className={styles.coordsDivider}>·</span>
            <span>Mumbai, IN</span>
          </motion.div>

          {/* ── Let's Connect — Social links ── */}
          <motion.div
            className={styles.connectBlock}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.4 }}
          >
            <span className={styles.connectLabel}>Let&apos;s connect</span>
            <div className={styles.socialRow}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom stat bar ── */}
        <motion.div 
          className={styles.heroMeta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.7 }}
        >
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>3+</span>
            <span className={styles.metaLabel}>Projects shipped</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>8.25</span>
            <span className={styles.metaLabel}>CGPA — B.E. Computer Eng.</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaValue}>3×</span>
            <span className={styles.metaLabel}>Hackathon finalist</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
