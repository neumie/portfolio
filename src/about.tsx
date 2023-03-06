import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={`${styles.about}`}>
      <div className={styles["description"]}>
        <h2>Hi, I'm Jakub. Nice to meet You.</h2>
        <h3></h3>
      </div>
      <div className={styles["contact"]}>
        <h3>Contact me</h3>
      </div>
      <div className={styles["skills"]}>
        <h3>My skills:</h3>
        <ul>
          <li className={styles["skill"]}>HTML</li>
          <li className={styles["skill"]}>CSS</li>
          <li className={styles["skill"]}>Javascript</li>
          <li className={styles["skill"]}>React</li>
          <li className={styles["skill"]}>GIT</li>
          <li className={styles["skill"]}>Github</li>
          <li className={styles["skill"]}>Linux</li>
        </ul>
      </div>
    </section>
  );
};
