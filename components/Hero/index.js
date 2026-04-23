import Link from 'next/link';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
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
