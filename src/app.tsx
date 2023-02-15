import React, { useRef, useState, useEffect } from "react";
import { scroller as scroll } from "react-scroll";

import styles from "./app.module.css";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";

export const App = () => {
  const [bottom, setBottom] = useState<boolean>(false);
  const horizontalRef = useRef<HTMLDivElement>(null);

  //Prevents from wrong scrolling if user refreshes page on the wrong spot
  useEffect(() => {
    setBottom(isBottom());
  }, [window.scrollY]);

  //Scrolls to projects
  const scrollToProjects = () => {
    scroll.scrollTo("about", { duration: 500, smooth: true });
    disableScroll();
    setTimeout(() => {
      horizontalRef.current && (horizontalRef.current.scrollLeft = 1000);
    }, 500);
  };

  //Checks if the client is scrolled down
  const isBottom = () => {
    return (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    );
  };

  const handleWheel = () => {
    setBottom(isBottom());
  };

  //Translates vertical scroll into horizontal scroll
  const horizontalScroll = (event: any) => {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 200;
  };

  const disableScroll = () => {
    document.body.classList.add(`${styles.disableScroll}`);
  };

  const enableScroll = () => {
    document.body.classList.remove(`${styles.disableScroll}`);
  };

  //Decides if we should use horizontal or vertical scroll
  const handleHorizontalWheel = (event: any) => {
    if (bottom) {
      if (horizontalRef.current!.scrollLeft <= 0) {
        enableScroll();
        if (event.nativeEvent.wheelDelta <= 0) {
          horizontalScroll(event);
        }
      } else {
        disableScroll();
        horizontalScroll(event);
      }
    } else enableScroll();
  };

  return (
    <div className={`${styles.app}`} onWheel={handleWheel}>
      <Navbar scrollToProjects={scrollToProjects} />
      <Hero />
      <div
        className={`${styles.wrapper}`}
        ref={horizontalRef}
        onWheel={(e) => handleHorizontalWheel(e)}
      >
        <About />
        <Projects />
      </div>
    </div>
  );
};
