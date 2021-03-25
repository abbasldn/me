import React from 'react';
import Logo from './Logo';
import styles from '../styles/Work.module.css';

const Work = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      {/* <h2 className={styles.subheading}>Founder</h2>
      <div className={styles.work}>
        <p className={styles.workdate}>Mar 2021 - Present</p>
        <div className={styles.company}>
          <Logo src="sujood-logo-bg.png" workLogo size={29} />
          <a href="https://sujood.io" target="_blank">
            <h3 className={styles.companyName}>Sujood</h3>
          </a>
        </div>
      </div>
      <p>
        Sujood is an app which aims to provide a free &amp; fast website to any
        mosque in the world. <br /> <br /> Built with: TypeScript, Next.js,
        React with Redux, Node.js + Express, MongoDB, JWT &amp; AWS
      </p> */}
      <h2 className={styles.subheading}>Fullstack Developer</h2>
      <div className={styles.work}>
        <p className={styles.workdate}>Jan 2020 - Present</p>
        <div className={styles.company}>
          <Logo src="sunnahmatch.png" workLogo size={29} />
          <a href="https://sunnahmatch.com" target="_blank">
            <h3 className={styles.companyName}>Sunnah Match</h3>
          </a>
        </div>
      </div>
      <p>
        Sunnah Match is an app (web and mobile) which aims to aid muslims in
        finding a romantic partner. Sunnah Match has over 1000 paid users and
        has apps on the App Store and Play Store.
        <br />
        <br />
        Built with: JavaScript (ES6+), React with Redux, Sass, Node.js +
        Express, MongoDB, JWT, Amazon SES + Expo PNS, Heroku, React Native &amp;
        Expo
      </p>
    </div>
  );
};

export default Work;
