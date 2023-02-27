import React from "react";
import styles from "./projects_nav.module.css";
import projectList from "./projects.json";

export const ProjectsNav = () => {
  const projectLinks = projectList.map((project) => {
    return (
      <a href={`#${project.id}`} key={project.id}>
        {project.name}
      </a>
    );
  });

  return (
    <nav className={styles["projects-nav-wrapper"]}>
      <ul className={styles["projects-nav"]}>{projectLinks}</ul>
    </nav>
  );
};
