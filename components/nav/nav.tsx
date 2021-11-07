import React from "react";
import styles from "./nav.module.css";
import Image from "next/image";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className={styles.nav}>
      <Image src="/nav-icon.svg" width="90px" height="105px" alt="Logo" />
      <div className={styles.linkContainer}>
        <a href="#projects">
          <h3 className={styles.link}>
            <span className={styles.linkNumber}>01.</span>
            Projects
          </h3>
        </a>
        <a href="#about">
          <h3 className={styles.link}>
            <span className={styles.linkNumber}>02.</span>
            About
          </h3>
        </a>
        <h3 className={styles.link}>
          <span className={styles.linkNumber}>03.</span>
          Contact
        </h3>
      </div>
    </nav>
  );
};

export default Nav;
