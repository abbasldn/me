import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Logo from './Logo';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Abbas</h1>
      <div className={styles.links}>
        {/* <Link href="#work">
          <a>Work</a>
        </Link> */}
        {/* <Link href="">
        <a>Blog</a>
    </Link> */}
        <a href="https://github.com/abbasldn" target="_blank">
          <Logo src="logo-github.svg" size={29} />
        </a>
        <a href="https://linkedin.com/in/abbasldndev" target="_blank">
          <Logo src="logo-linkedin.svg" size={29} />
        </a>
      </div>
    </div>
  );
};

export default Header;
