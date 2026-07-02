'use client';

import styles from './Experience.module.scss';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack & Flutter App Developer',
      company: 'Gamechange Energy (Geniusbos)',
      startDate: 'Mar 19, 2026',
      endDate: 'Jun 19, 2026',
      description: 'Worked on software development projects as a Full Stack and Flutter App Developer. Collaborated with the engineering team to design and implement features, enhanced technical architecture, and gained valuable hands-on industry experience.'
    }
  ];

  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <h2 className="section-title">My Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`${styles.timelineContent} glass-panel`}>
                <div className={styles.timelineHeader}>
                  <h3>{exp.role}</h3>
                  <span className={styles.timelineDate}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <h4 className={styles.timelineCompany}>{exp.company}</h4>
                <p className={styles.timelineDesc}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
