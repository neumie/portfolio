import React from "react";
import { Project } from "./project";
import styles from "./projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <Project name={"Chord Trainer"} image={"chord-trainer.png"} />
      <Project name={"Chord Trainer"} image={"chord-trainer.png"} />
      <Project name={"Chord Trainer"} image={"chord-trainer.png"} />
      <Project name={"Chord Trainer"} image={"chord-trainer.png"} />
    </section>
  );
};
