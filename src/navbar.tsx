import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={`${styles["navlist-mobile"]}`}>
        <a href="#top">
          <img src="home.svg" alt="home icon" />
        </a>
        <a href="#about">
          <img src="info.svg" alt="about icon" />
        </a>
        <a href="#contact">
          <img src="contact.svg" alt="contact icon" />
        </a>
        <a href="#projects">
          <img src="list.svg" alt="projects icon" />
        </a>
      </ul>
      <ul className={`${styles["navlist-desktop"]}`}>
        <a href="#top">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#bottom">Projects</a>
      </ul>
    </nav>
  );
};
