import React from "react";
import styles from "./project.module.css";
import Image from "next/image";

interface ProjectProps {
  name: string;
  direction: "left" | "right";
  description: string;
  technologies: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  direction,
  description,
  technologies,
}) => {
  const leftImage =
    direction === "right" ? (
      <img src="/splash.jpg" className={styles.image} />
    ) : null;

  const rightImage =
    direction === "left" ? (
      <img src="/splash.jpg" className={styles.image} />
    ) : null;

  return (
    <div className={styles.root}>
      {leftImage}
      <div
        className={`${styles.container} ${
          direction === "left" ? styles.containLeft : styles.containRight
        }`}
      >
        <h4 className={styles.title}>{name}</h4>
        <div
          className={`${styles.description} ${
            direction === "left" ? styles.overflowLeft : styles.overflowRight
          }`}
        >
          <p>{description}</p>
        </div>
        <p className={styles.technologies}>{technologies}</p>
      </div>
      {rightImage}
    </div>
  );
};

export default Project;
