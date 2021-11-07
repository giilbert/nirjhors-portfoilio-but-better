import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      transition={{ delay: 0.3, ease: [0.7, 0, 0.07, 1], duration: 1 }}
    >
      <div>
        <div className={styles.text}>
          <h4>
            hi, i&apos;m <span>nirjhor</span>
          </h4>
          <h1>
            i&apos;m building interactive <br /> web apps
          </h1>
          <h3>
            I&apos;m a fullstack software engineer building functional <br />
            web apps
          </h3>
        </div>
        <a href="#projects">
          <button className={styles.button}>Portfolio</button>
        </a>
      </div>
      <div className={styles.image}>
        <Image
          src="/hero-art.svg"
          width="430px"
          height="360px"
          alt="person coding"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
