'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.scss';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the animation sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400); // Exits after texts slide out

    // Prevent scrolling while splash screen is visible
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
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
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className={styles.textWrapper}>
              
              {/* Blade Spark Effect */}
              <motion.div 
                className={styles.spark}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 3, 0], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeInOut" }}
              />

              <motion.h1 
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: "-100vw" }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: { duration: 0.5, delay: 0.2, ease: "easeOut" },
                  x: { duration: 0.8, delay: 1.4, ease: "anticipate" }
                }}
                className={styles.name}
              >
                gundpa
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: "100vw" }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.6 },
                  y: { duration: 0.5, delay: 0.6, ease: "easeOut" },
                  x: { duration: 0.8, delay: 1.4, ease: "anticipate" }
                }}
                className={styles.welcome}
              >
                welcoming u
              </motion.p>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
