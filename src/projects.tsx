import React from "react";
import { ProjectCard } from "./project_card";
import styles from "./projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <ProjectCard name={"Chord Trainer"} description="asd" />
      <ProjectCard name={"Chord Trainer"} description="asd" />
      <ProjectCard name={"Chord Trainer"} description="asd" />
      <ProjectCard name={"Chord Trainer"} description="asd" />
    </section>
  );
};
