'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.scss';

const nameLetters = 'VISHNU RATHOD'.split('');
const roleLetters = 'CREATIVE DEVELOPER'.split('');

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase timeline: enter → hold → exit → unmount
    const holdTimer = setTimeout(() => setPhase('hold'), 1600);
    const exitTimer = setTimeout(() => setPhase('exit'), 2800);
    const removeTimer = setTimeout(() => setIsVisible(false), 3800);

    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.splashContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Film grain overlay */}
          <div className={styles.grainOverlay} />

          {/* Corner marks — editorial framing */}
          <div className={`${styles.cornerMark} ${styles.topLeft}`} />
          <div className={`${styles.cornerMark} ${styles.topRight}`} />
          <div className={`${styles.cornerMark} ${styles.bottomLeft}`} />
          <div className={`${styles.cornerMark} ${styles.bottomRight}`} />

          {/* Top-left branding */}
          <motion.span
            className={styles.brandTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'exit' ? 0 : 0.4 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            PORTFOLIO — 2026
          </motion.span>

          {/* Bottom-right scroll hint */}
          <motion.span
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'exit' ? 0 : 0.3 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            SCROLL TO EXPLORE ↓
          </motion.span>

          {/* Main content */}
          <div className={styles.textWrapper}>

            {/* Name — staggered letter reveal */}
            <div className={styles.nameRow}>
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`name-${i}`}
                  className={`${styles.nameLetter} ${letter === ' ' ? styles.space : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: phase === 'exit' ? 0 : 1,
                    y: phase === 'exit' ? -20 : 0,
                  }}
                  transition={{
                    opacity: { duration: phase === 'exit' ? 0.4 : 0.5, delay: phase === 'exit' ? i * 0.02 : 0.1 + i * 0.04 },
                    y: { duration: phase === 'exit' ? 0.4 : 0.6, delay: phase === 'exit' ? i * 0.02 : 0.1 + i * 0.04, ease: [0.76, 0, 0.24, 1] },
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Accent line */}
            <motion.div
              className={styles.accentLine}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: phase === 'exit' ? 0 : 1,
                opacity: phase === 'exit' ? 0 : 1,
              }}
              transition={{
                scaleX: { duration: phase === 'exit' ? 0.3 : 0.8, delay: phase === 'exit' ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.3 },
              }}
            />

            {/* Role — staggered letter reveal with wider spacing */}
            <div className={styles.roleRow}>
              {roleLetters.map((letter, i) => (
                <motion.span
                  key={`role-${i}`}
                  className={`${styles.roleLetter} ${letter === ' ' ? styles.space : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: phase === 'exit' ? 0 : 1,
                  }}
                  transition={{
                    duration: phase === 'exit' ? 0.3 : 0.4,
                    delay: phase === 'exit' ? 0.1 + i * 0.015 : 0.9 + i * 0.03,
                    ease: 'easeOut',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Pulsing dot */}
            <motion.div
              className={styles.pulsingDot}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase === 'exit' ? 0 : [0, 1, 0.5, 1],
                scale: phase === 'exit' ? 0 : 1,
              }}
              transition={{
                opacity: { duration: 2, delay: 1.4, repeat: Infinity, repeatType: 'reverse' },
                scale: { duration: 0.4, delay: 1.4, ease: 'easeOut' },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
