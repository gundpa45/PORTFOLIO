import styles from './About.module.scss';

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "React", "Next.js", "Node.js", 
    "Flutter", "Dart", "PostgreSQL", "Tailwind CSS"
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
              Hello! My name is Vishnu and I enjoy creating engaging digital experiences. 
              My interest in software development spans across building responsive web architectures and crafting smooth mobile applications.
            </p>
            <p>
              I recently completed a 3-month internship at Gamechange Energy (Geniusbos) as a Full Stack and Flutter App Developer. 
              This experience allowed me to work on end-to-end development, collaborate with engineering teams, and build performance-driven solutions.
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
