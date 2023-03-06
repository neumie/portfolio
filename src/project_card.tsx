import React from "react";
import styles from "./project_card.module.css";

type ProjectProps = {
  name: string;
  description: string;
  id: string;
  tools: string[];
  github: string;
  demo: string;
};

export const ProjectCard = ({
  name,
  description,
  id,
  tools,
  github,
  demo,
}: ProjectProps) => {
  const toolsElements = tools.map((tool) => (
    <li key={tools.indexOf(tool)}>{tool}</li>
  ));

  return (
    <div id={id} className={styles["project"]}>
      <div className={styles["name"]}>
        <h3>{name}</h3>
      </div>
      <div className={styles["description-wrapper"]}>
        <h4>{description}</h4>
        <div>
          <h4>Built with:</h4>
          <ul>{toolsElements}</ul>
        </div>
      </div>
      <div className={styles["links"]}>
        <a href={github} target="_blank">
          <img src="/github.svg" />
        </a>
        {demo && (
          <a href={demo} target="_blank">
            <img src="/new_tab.svg" />
          </a>
        )}
      </div>
    </div>
  );
};
