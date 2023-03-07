import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles["contact"]}>
      <h2>Let's get in touch!</h2>
      <div className={styles["contacts"]}>
        <a href="https://www.linkedin.com/in/jakub-neumann0/" target="_blank">
          <img src="/linkedin.svg" />
        </a>
        <a href="https://github.com/neumie" target="_blank">
          <img src="/github.svg" />
        </a>
        <a href="mailto:jakub_neumann@outlook.com" target="_blank">
          <img src="/mail.svg" />
        </a>
      </div>
    </div>
  );
};
