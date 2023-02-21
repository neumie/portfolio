import React from "react";
import styles from "./project_card.module.css";

type ProjectProps = {
  name: string;
  description: string;
};

export const ProjectCard = ({ name, description }: ProjectProps) => {
  return (
    <div className={`${styles.project}`}>
      <div className={`${styles.name}`}>
        <h3>{name}</h3>
      </div>
      <h4>{description}</h4>
    </div>
  );
};
