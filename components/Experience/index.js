'use client';

import styles from './Experience.module.scss';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Tech Company',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: 'Developing and maintaining web applications using modern technologies. Leading frontend architecture and implementing scalable solutions.'
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Agency',
      startDate: 'Jun 2021',
      endDate: 'Dec 2022',
      description: 'Built responsive websites and web applications. Collaborated with designers and backend developers to deliver high-quality products.'
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'Startup Inc',
      startDate: 'Jan 2020',
      endDate: 'May 2021',
      description: 'Assisted in developing web applications and learned modern development practices. Contributed to various client projects.'
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
