import styles from './About.module.scss';

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "React", "Next.js", "Node.js", 
    "Express", "TypeScript", "PostgreSQL", "Vanilla CSS"
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutText} glass-panel`}>
            <p>
              Hello! My name is Jane and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try 
              editing custom Tumblr themes — turns out hacking together HTML & CSS taught 
              me a lot about layout and typography!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and as a freelance developer. My main focus these days 
              is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className={styles.skillsList}>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.aboutImageWrapper}>
             <div className={`${styles.aboutImage} glass-panel`}>
                 <div className={styles.placeholderAvatar}></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
