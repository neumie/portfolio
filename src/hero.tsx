import React from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero}`}>
      <div className={`${styles.name}`}>
        <h1>Jakub Neumann</h1>
        <h2>Front-End Developer</h2>
      </div>
    </section>
  );
};
