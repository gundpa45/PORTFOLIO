import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Vishnu Rathod
          </p>
          <p className={styles.footerText}>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
