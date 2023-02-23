import React, { useRef, useState, useEffect, WheelEvent } from "react";
import { Events, scroller } from "react-scroll";

import styles from "./app.module.css";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";

export const App = () => {
  return (
    <div id="top" className={styles["app"]}>
      <Navbar />
      <div className={styles["app-wrapper"]}>
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
};
