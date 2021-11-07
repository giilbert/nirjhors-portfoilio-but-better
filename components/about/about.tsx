import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className={styles.root} id="about">
      <div className={styles.headingContainer}>
        <div className={styles.headingBorder} />
        <h3 className={styles.heading}>
          <span className={styles.bracket}>&lt;</span>Who I Am
          <span className={styles.bracket}>/&gt;</span>
        </h3>
      </div>
      <div className={styles.container}>
        <Image
          src="/man.jpg"
          alt="me"
          className={styles.image}
          width="500px"
          height="600px"
        />
        <p className={styles.about}>
          Hello! My name is Charlus Dogun Worth, and I saved the world at the
          age of 5. Shortly afterwards, I invented the concept of time and
          space. By the age of 10, i won four nobel prize awards for services to
          the galaxy. by the age of 14, i was the first human to set foot on
          mars. <br /> 2 years later, I have decided to settle down and pursue a
          career in software development. in the past two years, I have worked
          at Apple, Google, Microsoft, Meta, Netflix, Shopify, spotify,
          jetbrains and linode. now, I am a multi-trillionaire who wakes up at 3
          aM every morning and goes to bed yesterday. <br />
          Technologies I’m familiar with:
          <li>Python</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Python</li>
        </p>
      </div>
    </div>
  );
};

export default About;
