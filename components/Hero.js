import React from 'react';
import styles from '../styles/Hero.module.css';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className="content">
        <h1 className={styles.heading}>
          I'm Abbas - a React developer based in London, UK
        </h1>
        <p>
          TypeScript • React • Redux • React Native • Sass • Node.js • Express •
          MongoDB • Git • HTML5 • CSS3
        </p>
      </div>
      <div className={styles.logo}>
        <Logo src="abbasldnlogo.svg" size={150} />
      </div>
    </div>
  );
};

export default Hero;
