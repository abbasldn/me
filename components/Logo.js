import React from "react";
import styles from "../styles/Logo.module.css";

const Logo = ({ src, workLogo, size, footer, face }) => {
  let classNames;

  if (workLogo) {
    classNames = `${styles.logocontainer} ${styles.worklogocontainer}`;
  }

  if (footer) {
    classNames = styles.footer;
  }
  return (
    <div className={classNames}>
      <img
        className={face ? styles.face : styles.logo}
        src={`/${src}`}
        height={size}
        width={size}
        alt={src}
      />
    </div>
  );
};

export default Logo;
