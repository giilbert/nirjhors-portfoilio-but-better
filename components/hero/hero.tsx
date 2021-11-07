import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.text}>
          <h4>
            hi, i'm <span>nirjhor</span>
          </h4>
          <h1>
            i'm building interactive <br /> web apps
          </h1>
          <h3>
            I'm a fullstack software engineer building functional <br /> web
            apps
          </h3>
        </div>
        <button className={styles.button}>Portfolio</button>
      </div>

      <div className={styles.image}>
        <Image src="/hero-art.svg" width="430px" height="360px" />
      </div>
    </div>
  );
};

export default Hero;
