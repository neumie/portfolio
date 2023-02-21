import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={`${styles.corner}`}>
      <div className={`${styles.connector}`}></div>
      <div className={`${styles.about}`}></div>
    </section>
  );
};
