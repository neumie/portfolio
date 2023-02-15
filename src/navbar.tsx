import React from "react";
import Scroll, { Link } from "react-scroll";
import styles from "./navbar.module.css";

type NavbarProps = {
  scrollToProjects: () => void;
};

export const Navbar = ({ scrollToProjects }: NavbarProps) => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles.navlist}`}>
        <li>
          <Link to="hero" smooth={true} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li onClick={scrollToProjects}>Projects</li>
      </ul>
    </nav>
  );
};
