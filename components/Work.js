import React from "react";
import Logo from "./Logo";
import styles from "../styles/Work.module.css";

const Work = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      <h2 className={styles.subheading}>Applications Engineer</h2>
      <div className={styles.work}>
        <p className={styles.workdate}>Jul 2021 - Present</p>
        <div className={styles.company}>
          <Logo src="medidata-user-logo.jpeg" workLogo size={29} />
          <a href="https://www.medidata.com/" target="_blank">
            <h3 className={styles.companyName}>Medidata</h3>
          </a>
        </div>
      </div>
      <p>
        Medidata combines the wealth of data, AI powered insights, and
        patient-centric solutions required to bring tomorrow's breakthrough
        therapies and devices to life, and into the hands of patients.
      </p>
      <h2 className={styles.subheading}>Fullstack Developer</h2>
      <div className={styles.work}>
        <p className={styles.workdate}>Jan 2020 - Jun 2021</p>
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
