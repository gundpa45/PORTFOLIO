'use client';

import React from 'react';
import styles from './TechStack.module.scss';
import { motion } from 'framer-motion';

// Importing standard icons
import { FaFigma, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiRedux, SiJavascript, SiPrisma, SiNextdotjs, SiGatsby, SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiAngular, SiVuedotjs, SiPostgresql, SiFirebase, SiMysql, SiOpenai, SiFlutter, SiRabbitmq, SiRedis, SiLangchain } from 'react-icons/si';

const TopIcon = ({ children, cx, cy }) => (
  <div 
    className={styles.iconBox}
    style={{ left: `${(cx / 1000) * 100}%`, top: `${(cy / 800) * 100}%` }}
  >
    {children}
  </div>
);

// SVG Line Generator — Row 1 at y=20, Row 2 at y=140, converge at y=560
const paths = [
  "M200,20 C200,240 460,300 500,560",
  "M300,20 C300,200 470,260 500,560",
  "M400,20 C400,160 490,220 500,560",
  "M500,20 C500,140 500,300 500,560",
  "M600,20 C600,160 510,220 500,560",
  "M700,20 C700,200 530,260 500,560",
  "M800,20 C800,240 540,300 500,560",
  
  "M250,140 C250,300 460,340 500,560",
  "M350,140 C350,280 475,360 500,560",
  "M450,140 C450,260 492,400 500,560",
  "M550,140 C550,260 508,400 500,560",
  "M650,140 C650,280 525,360 500,560",
  "M750,140 C750,300 540,340 500,560",
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

const categoriesLeft = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
    ]
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Flutter', icon: SiFlutter },
    ]
  }
];

const categoriesRight = [
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Redis', icon: SiRedis },
    ]
  },
  {
    title: 'Data & Tools',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt },
      { name: 'RAG / AI', icon: SiLangchain },
    ]
  }
];

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

      <div className={styles.layoutWrapper}>
        
        {/* Left Side Technologies */}
        <div className={styles.sideList}>
          {categoriesLeft.map((category, catIdx) => (
            <div key={category.title} className={styles.categoryBlock}>
              <motion.h3 
                className={styles.categoryTitle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <div className={styles.techItems}>
                {category.items.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    className={styles.techItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) + (catIdx * 0.2), ease: 'easeOut' }}
                  >
                    <item.icon className={styles.techItemIcon} />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central Tree Animation */}
        <div className={styles.visualArea}>
          <div className={styles.treeAspectWrapper}>
            {/* SVG Drawing Layer connecting icons to center */}
            <svg className={styles.svgLayer} viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet">
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

            {/* Row 1 — top icons */}
            <TopIcon cx={200} cy={20}><SiTypescript color="#3178C6" /></TopIcon>
            <TopIcon cx={300} cy={20}><FaReact color="#61DAFB" /></TopIcon>
            <TopIcon cx={400} cy={20}><SiNextdotjs /></TopIcon>
            <TopIcon cx={500} cy={20}><FaNodeJs color="#339933" /></TopIcon>
            <TopIcon cx={600} cy={20}><SiExpress /></TopIcon>
            <TopIcon cx={700} cy={20}><SiMongodb color="#47A248" /></TopIcon>
            <TopIcon cx={800} cy={20}><SiPostgresql color="#4169E1" /></TopIcon>

            {/* Row 2 — staggered below */}
            <TopIcon cx={250} cy={140}><SiTailwindcss color="#38BDF8" /></TopIcon>
            <TopIcon cx={350} cy={140}><FaDocker color="#2496ED" /></TopIcon>
            <TopIcon cx={450} cy={140}><FaPython color="#3776AB" /></TopIcon>
            <TopIcon cx={550} cy={140}><SiLangchain /></TopIcon>
            <TopIcon cx={650} cy={140}><SiOpenai /></TopIcon>
            <TopIcon cx={750} cy={140}><FaGithub /></TopIcon>

            <div className={styles.orbitScene}>
              <div className={styles.glowBase} />
              
              <div className={`${styles.orbitRing} ${styles.ring3}`}>
                <OrbitPlanet ringRadius={250} speed={40} delay={0} Icon={SiPostgresql} />
                <OrbitPlanet ringRadius={250} speed={40} delay={10} Icon={FaGithub} />
                <OrbitPlanet ringRadius={250} speed={40} delay={20} Icon={FaPython} />
                <OrbitPlanet ringRadius={250} speed={40} delay={30} Icon={SiOpenai} />
              </div>
              <div className={`${styles.orbitRing} ${styles.ring2}`}>
                <OrbitPlanet ringRadius={190} speed={30} delay={0} Icon={SiTypescript} />
                <OrbitPlanet ringRadius={190} speed={30} delay={7.5} Icon={FaGitAlt} />
                <OrbitPlanet ringRadius={190} speed={30} delay={15} Icon={SiVuedotjs} />
                <OrbitPlanet ringRadius={190} speed={30} delay={22.5} Icon={SiMysql} />
              </div>
              <div className={`${styles.orbitRing} ${styles.ring1}`}>
                <OrbitPlanet ringRadius={130} speed={20} delay={0} Icon={SiAngular} />
                <OrbitPlanet ringRadius={130} speed={20} delay={10} Icon={SiFirebase} />
              </div>

              <div className={styles.centerOrb}>
                <FaPython size={50} color="#ffffff" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Technologies */}
        <div className={styles.sideList}>
          {categoriesRight.map((category, catIdx) => (
            <div key={category.title} className={styles.categoryBlock}>
              <motion.h3 
                className={styles.categoryTitle}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <div className={styles.techItems}>
                {category.items.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    className={styles.techItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) + (catIdx * 0.2), ease: 'easeOut' }}
                  >
                    <item.icon className={styles.techItemIcon} />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;