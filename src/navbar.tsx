import React from "react";
import styles from "./navbar.module.css";

type NavbarProps = {
  scrollToHero: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  right?: boolean;
};

export const Navbar = ({
  scrollToHero,
  scrollToAbout,
  scrollToProjects,
  right,
}: NavbarProps) => {
  return (
    <nav className={`${styles.navbar} ${right && styles.right}`}>
      <ul className={`${styles.navlist}`}>
        <li onClick={scrollToHero}>Home</li>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToProjects}>Projects</li>
      </ul>
    </nav>
  );
};
