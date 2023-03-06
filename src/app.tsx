import React, { useRef, useState, useEffect, WheelEvent } from "react";

import styles from "./app.module.css";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";

export const App = () => {
  const [dark, setDark] = useState<boolean>(false);

  const root = document.documentElement;
  const toggleTheme = () => {
    if (!dark) {
      root.style.setProperty("--lightest", "#222222");
      root.style.setProperty("--light", "#444444");
      root.style.setProperty("--dark", "#CCCCCC");
      root.style.setProperty("--darkest", "#DDDDDD");
    } else {
      root.style.setProperty("--darkest", "#222222");
      root.style.setProperty("--dark", "#444444");
      root.style.setProperty("--light", "#CCCCCC");
      root.style.setProperty("--lightest", "#DDDDDD");
    }
    setDark((prev) => (prev = !prev));
  };

  return (
    <>
      <div className={styles["app"]}>
        <Navbar />
        <div className={styles["app-wrapper"]}>
          <Hero />
          <About />
          <Projects />
        </div>
      </div>
    </>
  );
};
