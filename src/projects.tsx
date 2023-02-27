import React from "react";
import { ProjectCard } from "./project_card";
import { ProjectsNav } from "./projects_nav";
import projectList from "./projects.json";

import styles from "./projects.module.css";

export const Projects = () => {
  const projectElements = projectList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
      />
    );
  });

  return (
    <section id="projects" className={styles["projects-wrapper"]}>
      <ProjectsNav />
      <div className={styles["projects"]}>{projectElements}</div>
    </section>
  );
};
