import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles.navlist}`}>
        <a href="#top">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </ul>
    </nav>
  );
};
