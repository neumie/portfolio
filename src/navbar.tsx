import React from "react";
import styles from "./navbar.module.css";

type NavbarProps = {
  scrollToHero: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  left?: boolean;
  right?: boolean;
};

export const Navbar = ({
  scrollToHero,
  scrollToAbout,
  scrollToProjects,
  left,
  right,
}: NavbarProps) => {
  return (
    <nav
      className={`${styles.navbar} ${left && styles.left} ${
        right && styles.right
      }`}
    >
      <ul className={`${styles.navlist}`}>
        <li onClick={scrollToHero}>
          <a>Home</a>
        </li>
        <li onClick={scrollToAbout}>
          <a>About</a>
        </li>
        <li onClick={scrollToProjects}>
          <a>Projects</a>
        </li>
      </ul>
    </nav>
  );
};
