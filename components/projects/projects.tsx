import React from "react";
import Project from "./project/project";
import styles from "./projects.module.css";

interface ProjectProps {}

const Projects: React.FC<ProjectProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        <span className={styles.bracket}>&lt;</span>What I've Done
        <span className={styles.bracket}>/&gt;</span>
      </h3>
      <div className={styles.projects}>
        <Project
          name="Coolest Project"
          direction="right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="React, ChakraUI, Nest, Javscript, Typescript"
        />
        <Project
          name="Coolest Project"
          direction="left"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="React, ChakraUI, Nest, Javscript, Typescript"
        />
        <Project
          name="Coolest Project"
          direction="right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in vulputate dolor. In condimentum erat non sem consequat fringilla. Vivamus in molestie purus. Phasellus ullamcorper risus non odio elementum vulputate. "
          technologies="React, ChakraUI, Nest, Javscript, Typescript"
        />
      </div>
    </div>
  );
};

export default Projects;
