'use client';

import React from 'react';
import styles from './TechStack.module.scss';
import { motion } from 'framer-motion';

// Importing standard icons
import { FaFigma, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiCplusplus, SiRedux, SiJavascript, SiPrisma, SiNextdotjs, SiGatsby, SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiAngular, SiVuedotjs, SiPostgresql, SiFirebase, SiPython, SiMysql, SiOpenai } from 'react-icons/si';

const TopIcon = ({ children }) => (
  <div className={styles.iconBox}>
    {children}
  </div>
);

// SVG Line Generator for smooth connections
const paths = [
  "M200,100 C200,300 450,300 500,450",
  "M300,100 C300,250 470,280 500,450",
  "M400,100 C400,200 490,250 500,450",
  "M500,100 C500,200 500,300 500,450",
  "M600,100 C600,200 510,250 500,450",
  "M700,100 C700,250 530,280 500,450",
  "M800,100 C800,300 550,300 500,450",
  "M250,200 C250,320 450,320 500,450",
  "M350,200 C350,300 470,350 500,450",
  "M450,200 C450,280 490,380 500,450",
  "M550,200 C550,280 510,380 500,450",
  "M650,200 C650,300 530,350 500,450",
  "M750,200 C750,320 550,320 500,450",
];

const OrbitPlanet = ({ ringRadius, speed, delay, Icon }) => {
  return (
    <div className={styles.pivot} style={{ animation: `${styles.spinZ} ${speed}s linear ${delay}s infinite` }}>
      <div className={styles.planet} style={{ transform: `translateY(-${ringRadius}px)` }}>
        <div className={styles.stabilizer} style={{ animation: `${styles.spinZ_reverse} ${speed}s linear ${delay}s infinite` }}>
          <Icon />
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className={styles.container}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I'm currently looking to join a <span>cross-functional</span> team
      </motion.h2>
      <motion.p 
        className={styles.subheading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        that values improving people's lives through accessible design
      </motion.p>

      <div className={styles.visualArea}>
        
        {/* SVG Drawing Layer connecting icons to center */}
        <svg className={styles.linesOverlay} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          {paths.map((d, i) => (
            <motion.path 
              key={i} 
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
            />
          ))}
        </svg>

        <div className={styles.topIcons}>
          <div className={styles.iconRow}>
            <TopIcon><FaFigma color="#F24E1E" /></TopIcon>
            <TopIcon><FaReact color="#61DAFB" /></TopIcon>
            <TopIcon><SiCplusplus color="#00599C" /></TopIcon>
            <TopIcon><FaNodeJs color="#339933" /></TopIcon>
            <TopIcon><SiRedux color="#764ABC" /></TopIcon>
            <TopIcon><SiJavascript color="#F7DF1E" /></TopIcon>
            <TopIcon><FaCss3Alt color="#1572B6" /></TopIcon>
          </div>
          <div className={styles.iconRow}>
            <TopIcon><SiPrisma color="#0C344B" /></TopIcon>
            <TopIcon><SiNextdotjs color="#FFFFFF" /></TopIcon>
            <TopIcon><SiGatsby color="#663399" /></TopIcon>
            <TopIcon><SiTailwindcss color="#38BDF8" /></TopIcon>
            <TopIcon><SiExpress color="#FFFFFF" /></TopIcon>
            <TopIcon><SiMongodb color="#47A248" /></TopIcon>
          </div>
        </div>

        <div className={styles.orbitScene}>
          <div className={styles.glowBase} />
          
          <div className={`${styles.orbitRing} ${styles.ring3}`}>
            <OrbitPlanet ringRadius={350} speed={40} delay={0} Icon={SiPostgresql} />
            <OrbitPlanet ringRadius={350} speed={40} delay={10} Icon={FaGithub} />
            <OrbitPlanet ringRadius={350} speed={40} delay={20} Icon={SiPython} />
            <OrbitPlanet ringRadius={350} speed={40} delay={30} Icon={SiOpenai} />
          </div>
          <div className={`${styles.orbitRing} ${styles.ring2}`}>
            <OrbitPlanet ringRadius={275} speed={30} delay={0} Icon={SiTypescript} />
            <OrbitPlanet ringRadius={275} speed={30} delay={7.5} Icon={FaGitAlt} />
            <OrbitPlanet ringRadius={275} speed={30} delay={15} Icon={SiVuedotjs} />
            <OrbitPlanet ringRadius={275} speed={30} delay={22.5} Icon={SiMysql} />
          </div>
          <div className={`${styles.orbitRing} ${styles.ring1}`}>
            <OrbitPlanet ringRadius={200} speed={20} delay={0} Icon={SiAngular} />
            <OrbitPlanet ringRadius={200} speed={20} delay={10} Icon={SiFirebase} />
          </div>

          <div className={styles.centerOrb}>
            <svg viewBox="0 0 100 100">
               <path d="M 25 25 L 75 25 L 40 50 L 75 75 L 25 75" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;