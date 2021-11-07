import React from "react";
import Project from "./project/project";
import styles from "./projects.module.css";

interface ProjectProps {}

const Projects: React.FC<ProjectProps> = ({}) => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.headingContainer}>
        <h3 className={styles.heading}>
          <span className={styles.bracket}>&lt;</span>What I&apos;ve Done
          <span className={styles.bracket}>/&gt;</span>
        </h3>
        <div className={styles.headingBorder} />
      </div>
      <div className={styles.projects}>
        <Project
          name="ArchiveCord"
          direction="right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="NextJS, NextAuth, ChakraUI, Axios"
        />
        <Project
          name="TechCodes"
          direction="left"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="GatsbyJS, ChakraUI, Framer-Motion"
        />
        <Project
          name="LiteBot"
          direction="right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="Discord.py, Sanic, Discord API"
        />
      </div>
    </div>
  );
};

export default Projects;
