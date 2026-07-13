import styles from './PixelButton.module.scss';

export default function PixelButton({ href, children }) {
  // 7x7 Grid representation for a downward arrow
  // 0 = dim, 1 = lit
  const arrowGrid = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
    0, 1, 0, 1, 0, 1, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
  ];

  return (
    <a 
      href={href} 
      className={styles.pixelButton} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className={styles.btnText}>{children}</span>
      <div className={styles.pixelGrid}>
        {arrowGrid.map((val, i) => {
          // Calculate column index for staggered delay
          const col = i % 7;
          return (
            <div 
              key={i} 
              className={`${styles.pixel} ${val === 1 ? styles.lit : ''}`}
              style={{ '--delay': `${col * 0.05}s` }}
            />
          );
        })}
      </div>
    </a>
  );
}
