import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js & Vanilla CSS.
        </p>
      </div>
    </footer>
  );
}
