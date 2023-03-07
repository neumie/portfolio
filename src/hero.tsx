import React from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section id="hero" className={`${styles["hero"]} animated-entrance`}>
      <div className={styles["name"]}>
        <h1>Jakub Neumann</h1>
        <h2>Software Developer</h2>
        <div className={styles["description"]}>
          <p>
            I am a developer based in the Czech Republic. Currently I'm
            perfecting my typescript, HTML and CSS skills.
          </p>
        </div>
      </div>
    </section>
  );
};
