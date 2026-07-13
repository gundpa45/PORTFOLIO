'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import VrDubLogo from './VrDubLogo';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <VrDubLogo className={styles.logoSvg} />
        </Link>
        <div className={styles.navLinks}>
          <Link href="#experience" className={styles.navLink}>Experience</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
          
          {mounted && (
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
              <span className={styles.themeIcon}>{theme === 'dark' ? '○' : '●'}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
